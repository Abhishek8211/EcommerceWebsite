// ============================================
// SHOPSPHERE E-COMMERCE - MAIN JAVASCRIPT
// ============================================

// Product Database
const products = [
    // Electronics
    {
        id: 'prod1',
        name: 'Premium Wireless Headphones',
        category: 'electronics',
        price: 2499,
        originalPrice: 4999,
        discount: 50,
        rating: 4.5,
        reviews: 1250,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
        description: 'Experience superior sound quality with these premium wireless headphones featuring noise cancellation, 30-hour battery life, and comfortable over-ear design. Perfect for music lovers and professionals.'
    },
    {
        id: 'prod2',
        name: 'Smart Watch Series 7',
        category: 'electronics',
        price: 3999,
        originalPrice: 7999,
        discount: 50,
        rating: 4.7,
        reviews: 2340,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
        description: 'Advanced smartwatch with fitness tracking, heart rate monitor, GPS, and water resistance. Stay connected and healthy with this cutting-edge wearable technology.'
    },
    {
        id: 'prod3',
        name: 'Wireless Gaming Mouse',
        category: 'electronics',
        price: 1299,
        originalPrice: 2499,
        discount: 48,
        rating: 4.6,
        reviews: 890,
        image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop',
        description: 'High-precision wireless gaming mouse with customizable RGB lighting, 16000 DPI sensor, and ergonomic design for extended gaming sessions.'
    },
    {
        id: 'prod4',
        name: 'Bluetooth Speaker Pro',
        category: 'electronics',
        price: 1999,
        originalPrice: 3999,
        discount: 50,
        rating: 4.4,
        reviews: 670,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
        description: 'Portable Bluetooth speaker with 360-degree sound, waterproof design, and 20-hour battery life. Perfect for outdoor adventures and parties.'
    },

    // Fashion
    {
        id: 'prod5',
        name: 'Men\'s Casual Sneakers',
        category: 'fashion',
        price: 1499,
        originalPrice: 2999,
        discount: 50,
        rating: 4.3,
        reviews: 1120,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop',
        description: 'Comfortable and stylish casual sneakers perfect for everyday wear. Features breathable mesh upper and cushioned sole for all-day comfort.'
    },
    {
        id: 'prod6',
        name: 'Premium Leather Wallet',
        category: 'fashion',
        price: 899,
        originalPrice: 1799,
        discount: 50,
        rating: 4.8,
        reviews: 2450,
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop',
        description: 'Genuine leather wallet with RFID protection, multiple card slots, and slim design. Combines style with security and functionality.'
    },
    {
        id: 'prod7',
        name: 'Designer Sunglasses',
        category: 'fashion',
        price: 1199,
        originalPrice: 2399,
        discount: 50,
        rating: 4.5,
        reviews: 780,
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop',
        description: 'Polarized designer sunglasses with UV protection and durable frame. Make a style statement while protecting your eyes.'
    },
    {
        id: 'prod8',
        name: 'Casual Backpack',
        category: 'fashion',
        price: 1799,
        originalPrice: 3599,
        discount: 50,
        rating: 4.6,
        reviews: 1560,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
        description: 'Spacious and durable backpack with laptop compartment, water-resistant material, and ergonomic design for daily commute.'
    },

    // Home & Kitchen
    {
        id: 'prod9',
        name: 'Coffee Maker Machine',
        category: 'home',
        price: 2999,
        originalPrice: 5999,
        discount: 50,
        rating: 4.7,
        reviews: 1890,
        image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop',
        description: 'Automatic coffee maker with programmable settings, thermal carafe, and brewing strength control. Start your day with the perfect cup of coffee.'
    },
    {
        id: 'prod10',
        name: 'Non-Stick Cookware Set',
        category: 'home',
        price: 3499,
        originalPrice: 6999,
        discount: 50,
        rating: 4.5,
        reviews: 2100,
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop',
        description: 'Complete cookware set with non-stick coating, heat-resistant handles, and dishwasher-safe design. Essential for every kitchen.'
    },

    // Books
    {
        id: 'prod11',
        name: 'The Midnight Library',
        category: 'books',
        price: 399,
        originalPrice: 799,
        discount: 50,
        rating: 4.8,
        reviews: 5670,
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop',
        description: 'A dazzling novel about all the choices that go into a life well lived. Somewhere out beyond the edge of the universe there is a library.'
    },
    {
        id: 'prod12',
        name: 'Atomic Habits',
        category: 'books',
        price: 499,
        originalPrice: 999,
        discount: 50,
        rating: 4.9,
        reviews: 8920,
        image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=500&fit=crop',
        description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones. Transform your life one tiny change at a time.'
    },

    // Sports
    {
        id: 'prod13',
        name: 'Yoga Mat Premium',
        category: 'sports',
        price: 899,
        originalPrice: 1799,
        discount: 50,
        rating: 4.6,
        reviews: 1340,
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop',
        description: 'Extra thick yoga mat with non-slip surface, eco-friendly material, and carrying strap. Perfect for yoga, pilates, and home workouts.'
    },
    {
        id: 'prod14',
        name: 'Resistance Bands Set',
        category: 'sports',
        price: 699,
        originalPrice: 1399,
        discount: 50,
        rating: 4.4,
        reviews: 890,
        image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500&h=500&fit=crop',
        description: 'Set of 5 resistance bands with different strength levels, door anchor, and carrying bag. Ideal for strength training and flexibility.'
    },

    // Additional products for variety
    {
        id: 'prod15',
        name: 'Mechanical Keyboard RGB',
        category: 'electronics',
        price: 2799,
        originalPrice: 5599,
        discount: 50,
        rating: 4.7,
        reviews: 1670,
        image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&h=500&fit=crop',
        description: 'Mechanical gaming keyboard with RGB backlighting, tactile switches, and programmable keys for ultimate gaming experience.'
    },
    {
        id: 'prod16',
        name: 'USB-C Hub Adapter',
        category: 'electronics',
        price: 1499,
        originalPrice: 2999,
        discount: 50,
        rating: 4.5,
        reviews: 920,
        image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop',
        description: 'Multi-port USB-C hub with HDMI, USB 3.0, SD card reader, and power delivery. Expand your laptop connectivity.'
    },
    {
        id: 'prod17',
        name: 'Fitness Tracker Band',
        category: 'sports',
        price: 1999,
        originalPrice: 3999,
        discount: 50,
        rating: 4.3,
        reviews: 1120,
        image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop',
        description: 'Advanced fitness tracker with heart rate monitor, sleep tracking, step counter, and smartphone notifications.'
    },
    {
        id: 'prod18',
        name: 'Insulated Water Bottle',
        category: 'sports',
        price: 799,
        originalPrice: 1599,
        discount: 50,
        rating: 4.6,
        reviews: 2340,
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop',
        description: 'Stainless steel insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours. Leak-proof and eco-friendly.'
    }
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Get all products
function getAllProducts() {
    return products;
}

// Get product by ID
function getProductById(id) {
    return products.find(p => p.id === id);
}

// Get products by category
function getProductsByCategory(category) {
    return products.filter(p => p.category === category);
}

// Create product card HTML
function createProductCard(product) {
    return `
        <div class="product-card" onclick="viewProduct('${product.id}')">
            <button class="wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist('${product.id}')">
                ❤️
            </button>
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    <span class="stars">${'⭐'.repeat(Math.floor(product.rating))}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toLocaleString()}</span>
                    <span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
                    <span class="discount">${product.discount}% OFF</span>
                </div>
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

// Create skeleton card for loading
function createSkeletonCard() {
    return `
        <div class="skeleton-card">
            <div class="skeleton skeleton-image"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text short"></div>
            <div class="skeleton skeleton-text"></div>
        </div>
    `;
}

// ============================================
// PRODUCT DISPLAY
// ============================================

// Load products with skeleton loading
function loadProducts() {
    const sections = [
        { id: 'topDeals', count: 8 },
        { id: 'bestSellers', count: 6 },
        { id: 'trending', count: 8 },
        { id: 'electronics', count: 4 },
        { id: 'fashion', count: 4 }
    ];

    sections.forEach(section => {
        const container = document.getElementById(section.id);
        if (!container) return;

        // Show skeleton loading
        container.innerHTML = Array(section.count).fill('').map(() => createSkeletonCard()).join('');

        // Load actual products after delay
        setTimeout(() => {
            let productsToShow;
            
            switch(section.id) {
                case 'topDeals':
                    productsToShow = products.slice(0, 8);
                    break;
                case 'bestSellers':
                    productsToShow = products.slice(4, 10);
                    break;
                case 'trending':
                    productsToShow = products.slice(2, 10);
                    break;
                case 'electronics':
                    productsToShow = getProductsByCategory('electronics').slice(0, 4);
                    break;
                case 'fashion':
                    productsToShow = getProductsByCategory('fashion').slice(0, 4);
                    break;
                default:
                    productsToShow = products.slice(0, section.count);
            }

            container.innerHTML = productsToShow.map(p => createProductCard(p)).join('');
        }, 800);
    });
}

// View product details
function viewProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// Filter by category
function filterByCategory(category) {
    showToast(`Showing ${category} products`, 'success');
    // In a real app, this would filter and display products
}

// ============================================
// CART MANAGEMENT
// ============================================

// Add to cart
function addToCart(product, quantity = 1) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    showToast('Added to cart!', 'success');
}

// Update cart badge
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(badge => {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'block' : 'none';
    });
}

// ============================================
// WISHLIST MANAGEMENT
// ============================================

// Toggle wishlist
function toggleWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    if (wishlist.includes(productId)) {
        wishlist = wishlist.filter(id => id !== productId);
        showToast('Removed from wishlist', 'success');
    } else {
        wishlist.push(productId);
        showToast('Added to wishlist!', 'success');
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
    // Update all wishlist buttons for this product
    document.querySelectorAll(`.wishlist-btn`).forEach(btn => {
        const card = btn.closest('.product-card');
        if (card && card.onclick.toString().includes(productId)) {
            btn.classList.toggle('active', wishlist.includes(productId));
        }
    });
}

// Check if in wishlist
function isInWishlist(productId) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    return wishlist.includes(productId);
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

// Search products
function searchProducts(query) {
    if (!query || query.length < 2) {
        document.getElementById('searchSuggestions')?.classList.remove('active');
        return;
    }

    const results = products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);

    const suggestionsContainer = document.getElementById('searchSuggestions');
    if (!suggestionsContainer) return;

    if (results.length > 0) {
        suggestionsContainer.innerHTML = results.map(p => `
            <div class="suggestion-item" onclick="viewProduct('${p.id}')">
                <strong>${p.name}</strong>
                <br>
                <small style="color: var(--text-gray);">₹${p.price.toLocaleString()}</small>
            </div>
        `).join('');
        suggestionsContainer.classList.add('active');
    } else {
        suggestionsContainer.innerHTML = '<div class="suggestion-item">No results found</div>';
        suggestionsContainer.classList.add('active');
    }
}

// ============================================
// THEME TOGGLE
// ============================================

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.textContent = isDark ? '☀️' : '🌙';
    }
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.textContent = '☀️';
        }
    }
}

// ============================================
// PROFILE MANAGEMENT
// ============================================

// Update profile name
function updateProfileName() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const profileNameEl = document.getElementById('profileName');
    
    if (profileNameEl) {
        if (user.isLoggedIn) {
            const name = user.name || user.identifier || 'User';
            profileNameEl.textContent = name.split(' ')[0]; // First name only
        } else {
            profileNameEl.textContent = 'Login';
        }
    }
}

// Logout
function logout() {
    localStorage.removeItem('user');
    showToast('Logged out successfully', 'success');
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1000);
}

// ============================================
// HERO SLIDER
// ============================================

let currentSlide = 0;

function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
}

// ============================================
// TOAST NOTIFICATION
// ============================================

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    const icon = toast.querySelector('.toast-icon');
    const messageEl = toast.querySelector('.toast-message');
    
    messageEl.textContent = message;
    toast.className = `toast ${type}`;
    icon.textContent = type === 'success' ? '✓' : '✕';
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================
// MODAL
// ============================================

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.remove('active');
    }
    
    const successModal = document.getElementById('successModal');
    if (successModal) {
        successModal.classList.remove('active');
    }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    fadeElements.forEach(el => observer.observe(el));
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Load theme
    loadTheme();
    
    // Initialize slider
    initSlider();
    
    // Load products on homepage
    if (document.getElementById('topDeals')) {
        loadProducts();
    }
    
    // Update cart badge
    updateCartBadge();
    
    // Update profile name
    updateProfileName();
    
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Profile dropdown
    const profileBtn = document.getElementById('profileBtn');
    const profileDropdown = document.getElementById('profileDropdown');
    
    if (profileBtn && profileDropdown) {
        profileBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            profileDropdown.classList.toggle('active');
        });
        
        document.addEventListener('click', function() {
            profileDropdown.classList.remove('active');
        });
    }
    
    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const user = localStorage.getItem('user');
            if (user) {
                logout();
            } else {
                window.location.href = 'login.html';
            }
        });
    }
    
    // Profile button click - redirect to login if not logged in
    if (profileBtn) {
        profileBtn.addEventListener('click', function() {
            const user = localStorage.getItem('user');
            if (!user) {
                window.location.href = 'login.html';
            }
        });
    }
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchProducts(this.value);
        });
        
        searchInput.addEventListener('blur', function() {
            setTimeout(() => {
                const suggestions = document.getElementById('searchSuggestions');
                if (suggestions) {
                    suggestions.classList.remove('active');
                }
            }, 200);
        });
    }
    
    // Scroll animations
    initScrollAnimations();
    
    // Fade in sections on scroll
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
    
    // Mobile menu toggle (for future implementation)
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navLinks = document.getElementById('navLinks');
            if (navLinks) {
                navLinks.classList.toggle('active');
            }
        });
    }
    
    // Close modal on outside click
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('modal');
        if (e.target === modal) {
            closeModal();
        }
        
        const successModal = document.getElementById('successModal');
        if (e.target === successModal) {
            closeModal();
        }
    });
});

// ============================================
// EXPORT FOR OTHER PAGES
// ============================================

// These functions are available globally for other pages to use
window.getAllProducts = getAllProducts;
window.getProductById = getProductById;
window.createProductCard = createProductCard;
window.addToCart = addToCart;
window.updateCartBadge = updateCartBadge;
window.toggleWishlist = toggleWishlist;
window.isInWishlist = isInWishlist;
window.showToast = showToast;
window.closeModal = closeModal;
window.updateProfileName = updateProfileName;
window.viewProduct = viewProduct;
window.filterByCategory = filterByCategory;
