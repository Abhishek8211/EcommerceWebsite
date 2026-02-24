// API Configuration and Helper Functions for Frontend
// Add this file to your frontend and import in your main script.js

// Detect environment and set appropriate backend URL
const isLocalhost = window.location.hostname === 'localhost' || 
                    window.location.hostname === '127.0.0.1' ||
                    window.location.hostname === '';

const API_CONFIG = {
    // Update this with your deployed backend URL from Render/Railway
    BASE_URL: isLocalhost 
        ? 'http://localhost:5000/api' 
        : 'https://your-backend-url.onrender.com/api', // TODO: Replace with your actual backend URL
    TIMEOUT: 10000 // 10 seconds
};

// ==================== API HELPER FUNCTION ====================
async function apiCall(endpoint, options = {}) {
    const token = localStorage.getItem('token');
    
    const config = {
        method: options.method || 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` }),
            ...options.headers
        },
        ...(options.body && { body: JSON.stringify(options.body) })
    };

    try {
        const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, config);
        const data = await response.json();
        
        if (!response.ok) {
            // Handle unauthorized (token expired)
            if (response.status === 401) {
                logout();
                throw new Error('Session expired. Please login again.');
            }
            throw new Error(data.message || 'Request failed');
        }
        
        return data;
    } catch (error) {
        console.error('API Error:', error.message);
        throw error;
    }
}

// ==================== AUTHENTICATION APIs ====================

// Register new user
async function registerUser(name, email, mobile, password) {
    const data = await apiCall('/auth/register', {
        method: 'POST',
        body: { name, email, mobile, password }
    });
    
    // Save token and user info
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    
    return data;
}

// Login with email/mobile and password
async function loginUser(emailOrMobile, password) {
    const data = await apiCall('/auth/login', {
        method: 'POST',
        body: { emailOrMobile, password }
    });
    
    // Save token and user info
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    
    return data;
}

// Send OTP to mobile
async function sendOTP(mobile) {
    const data = await apiCall('/auth/send-otp', {
        method: 'POST',
        body: { mobile }
    });
    return data;
}

// Alias for sendOTP to avoid naming conflicts
window.sendOTPAPI = sendOTP;

// Verify OTP and login
async function verifyOTP(mobile, otp) {
    const data = await apiCall('/auth/verify-otp', {
        method: 'POST',
        body: { mobile, otp }
    });
    
    // Save token and user info
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    
    return data;
}

// Alias for verifyOTP to avoid naming conflicts
window.verifyOTPAPI = verifyOTP;

// Get user profile
async function getUserProfile() {
    const data = await apiCall('/auth/profile');
    return data.user;
}

// Check if user is logged in
function isLoggedIn() {
    return !!localStorage.getItem('token');
}

// Get current user
function getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

// Logout user
function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login.html';
}

// ==================== PRODUCT APIs ====================

// Get all products with filters
async function getProducts(filters = {}) {
    const queryParams = new URLSearchParams(filters).toString();
    const endpoint = queryParams ? `/products?${queryParams}` : '/products';
    const data = await apiCall(endpoint);
    return data.products;
}

// Get single product
async function getProduct(productId) {
    const data = await apiCall(`/products/${productId}`);
    return data.product;
}

// Create product (Admin only)
async function createProduct(productData) {
    const data = await apiCall('/products', {
        method: 'POST',
        body: productData
    });
    return data.product;
}

// Update product (Admin only)
async function updateProduct(productId, productData) {
    const data = await apiCall(`/products/${productId}`, {
        method: 'PUT',
        body: productData
    });
    return data.product;
}

// Delete product (Admin only)
async function deleteProduct(productId) {
    const data = await apiCall(`/products/${productId}`, {
        method: 'DELETE'
    });
    return data;
}

// ==================== CART APIs ====================

// Get user cart
async function getCart() {
    const data = await apiCall('/cart');
    return data.cart;
}

// Add item to cart
async function addToCart(productId, quantity = 1) {
    const data = await apiCall('/cart/add', {
        method: 'POST',
        body: { productId, quantity }
    });
    return data.cart;
}

// Update cart item quantity
async function updateCartItem(productId, quantity) {
    const data = await apiCall('/cart/update', {
        method: 'PUT',
        body: { productId, quantity }
    });
    return data.cart;
}

// Remove item from cart
async function removeFromCart(productId) {
    const data = await apiCall(`/cart/remove/${productId}`, {
        method: 'DELETE'
    });
    return data.cart;
}

// Clear entire cart
async function clearCart() {
    const data = await apiCall('/cart/clear', {
        method: 'DELETE'
    });
    return data.cart;
}

// ==================== ORDER APIs ====================

// Create new order
async function createOrder(orderData) {
    const data = await apiCall('/orders', {
        method: 'POST',
        body: orderData
    });
    return data.order;
}

// Get user orders
async function getMyOrders() {
    const data = await apiCall('/orders/my-orders');
    return data.orders;
}

// Get single order
async function getOrder(orderId) {
    const data = await apiCall(`/orders/${orderId}`);
    return data.order;
}

// ==================== NOTIFICATION APIs ====================

// Get user notifications
async function getNotifications() {
    const data = await apiCall('/notifications');
    return {
        notifications: data.notifications,
        unreadCount: data.unreadCount
    };
}

// Mark notification as read
async function markNotificationAsRead(notificationId) {
    const data = await apiCall(`/notifications/read/${notificationId}`, {
        method: 'PUT'
    });
    return data.notification;
}

// Mark all notifications as read
async function markAllNotificationsAsRead() {
    const data = await apiCall('/notifications/read-all', {
        method: 'PUT'
    });
    return data;
}

// Delete notification
async function deleteNotification(notificationId) {
    const data = await apiCall(`/notifications/${notificationId}`, {
        method: 'DELETE'
    });
    return data;
}

// ==================== EXPORT FOR USE IN OTHER FILES ====================
// Make functions globally available
window.isLoggedIn = isLoggedIn;
window.getCurrentUser = getCurrentUser;
window.logout = logout;
window.registerUser = registerUser;
window.loginUser = loginUser;
window.getUserProfile = getUserProfile;
window.getProducts = getProducts;
window.getProduct = getProduct;
window.getCart = getCart;
window.addToCart = addToCart;
window.updateCartItem = updateCartItem;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.createOrder = createOrder;
window.getMyOrders = getMyOrders;
window.getOrder = getOrder;
window.getNotifications = getNotifications;
window.markNotificationAsRead = markNotificationAsRead;
window.markAllNotificationsAsRead = markAllNotificationsAsRead;
window.deleteNotification = deleteNotification;

console.log('✅ API helper functions loaded');
