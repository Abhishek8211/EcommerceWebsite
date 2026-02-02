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
        subcategory: 'headphones',
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
        subcategory: 'accessories',
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
        subcategory: 'accessories',
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
        subcategory: 'accessories',
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
    },
    
    // Smartphones
    {
        id: 'prod19',
        name: 'iPhone 15 Pro Max',
        category: 'electronics',
        subcategory: 'mobiles',
        price: 134900,
        originalPrice: 159900,
        discount: 16,
        rating: 4.9,
        reviews: 5670,
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&h=500&fit=crop',
        description: 'Latest flagship iPhone with A17 Pro chip, titanium design, 48MP camera system, and USB-C. Experience unmatched performance and photography.'
    },
    {
        id: 'prod20',
        name: 'Samsung Galaxy S24 Ultra',
        category: 'electronics',
        subcategory: 'mobiles',
        price: 124999,
        originalPrice: 144999,
        discount: 14,
        rating: 4.8,
        reviews: 4230,
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&h=500&fit=crop',
        description: 'Premium Android flagship with S Pen, 200MP camera, AI features, and stunning 6.8" Dynamic AMOLED display. Power meets elegance.'
    },
    {
        id: 'prod21',
        name: 'Google Pixel 8 Pro',
        category: 'electronics',
        subcategory: 'mobiles',
        price: 89999,
        originalPrice: 106999,
        discount: 16,
        rating: 4.7,
        reviews: 3120,
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop',
        description: 'Best Android camera phone with Google Tensor G3 chip, AI-powered features, and pure Android experience. Photography perfection.'
    },
    {
        id: 'prod22',
        name: 'OnePlus 12',
        category: 'electronics',
        subcategory: 'mobiles',
        price: 64999,
        originalPrice: 69999,
        discount: 7,
        rating: 4.6,
        reviews: 2890,
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
        description: 'Flagship killer with Snapdragon 8 Gen 3, 100W fast charging, Hasselblad camera, and 120Hz AMOLED display. Speed redefined.'
    },
    {
        id: 'prod23',
        name: 'Xiaomi 14 Pro',
        category: 'electronics',
        subcategory: 'mobiles',
        price: 54999,
        originalPrice: 64999,
        discount: 15,
        rating: 4.5,
        reviews: 1980,
        image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&h=500&fit=crop',
        description: 'Premium flagship with Leica optics, Snapdragon 8 Gen 3, 120W HyperCharge, and stunning design. Photography excellence.'
    },
    {
        id: 'prod24',
        name: 'Nothing Phone 2',
        category: 'electronics',
        subcategory: 'mobiles',
        price: 44999,
        originalPrice: 49999,
        discount: 10,
        rating: 4.4,
        reviews: 1560,
        image: 'https://images.unsplash.com/photo-1592286927505-b0501739c2fb?w=500&h=500&fit=crop',
        description: 'Unique transparent design with Glyph Interface, Snapdragon 8+ Gen 1, and premium build. Stand out from the crowd.'
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

// Create product card HTML with enhanced features
function createProductCard(product) {
    const badges = [];
    if (product.discount >= 50) badges.push('<span class="badge badge-hot">🔥 Hot Deal</span>');
    if (product.rating >= 4.7) badges.push('<span class="badge badge-trending">⭐ Trending</span>');
    
    return `
        <div class="product-card">
            <div class="product-badges">${badges.join('')}</div>
            <div class="discount-badge">${product.discount}% OFF</div>
            <button class="wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist('${product.id}')" title="Add to Wishlist">
                🤍
            </button>
            <button class="quick-view-btn" onclick="event.stopPropagation(); showQuickView('${product.id}')" title="Quick View">
                👁️
            </button>
            <button class="share-btn" onclick="event.stopPropagation(); shareProduct('${product.id}')" title="Share">
                🔗
            </button>
            <div style="overflow: hidden; border-radius: 12px; cursor: pointer;" onclick="viewProduct('${product.id}')">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title" title="${product.name}" onclick="viewProduct('${product.id}')" style="cursor: pointer;">${product.name}</h3>
                <div class="product-rating">
                    <span class="stars">${'⭐'.repeat(Math.floor(product.rating))}</span>
                    <span class="rating-text">${product.rating}</span>
                    <span class="rating-count">(${product.reviews.toLocaleString()})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toLocaleString()}</span>
                    <span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
                </div>
                <div style="display: flex; gap: 8px; margin-top: 12px;">
                    <button class="add-to-cart-btn" style="flex: 1;" onclick="event.stopPropagation(); addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})" title="Add to Cart">
                        🛒 Add
                    </button>
                    <button class="buy-now-btn" onclick="event.stopPropagation(); buyNow('${product.id}')" title="Buy Now">
                        ⚡
                    </button>
                </div>
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
    console.log('Loading products...');
    console.log('Total products available:', products.length);
    
    const sections = [
        { id: 'topDeals', count: 8 },
        { id: 'bestSellers', count: 6 },
        { id: 'trending', count: 8 },
        { id: 'recommended', count: 6 },
        { id: 'electronics', count: 4 },
        { id: 'fashion', count: 6 },
        { id: 'recentlyViewed', count: 6 }
    ];

    sections.forEach(section => {
        const container = document.getElementById(section.id);
        if (!container) {
            console.log('Container not found:', section.id);
            return;
        }

        console.log('Loading section:', section.id);

        // Load actual products immediately (removed skeleton delay)
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
            case 'recommended':
                productsToShow = [...products].sort(() => Math.random() - 0.5).slice(0, 6);
                break;
            case 'electronics':
                productsToShow = getProductsByCategory('electronics').slice(0, 4);
                break;
            case 'fashion':
                productsToShow = getProductsByCategory('fashion').slice(0, 6);
                break;
            case 'recentlyViewed':
                const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
                if (recentlyViewed.length > 0) {
                    productsToShow = recentlyViewed.map(id => getProductById(id)).filter(Boolean).slice(0, 6);
                } else {
                    productsToShow = products.slice(0, 6);
                }
                break;
            case 'wishlistProducts':
                const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
                if (wishlist.length > 0) {
                    productsToShow = wishlist.map(id => getProductById(id)).filter(Boolean);
                } else {
                    productsToShow = [];
                }
                break;
            default:
                productsToShow = products.slice(0, section.count);
        }

        console.log('Products to show in', section.id, ':', productsToShow.length);
        
        if (section.id === 'wishlistProducts' && productsToShow.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 60px 20px; grid-column: 1/-1;">
                    <div style="font-size: 80px; margin-bottom: 20px;">💔</div>
                    <h3 style="color: var(--text-dark); margin-bottom: 10px;">Your Wishlist is Empty</h3>
                    <p style="color: var(--text-gray); margin-bottom: 20px;">Start adding products you love!</p>
                    <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" style="padding: 12px 30px; background: var(--primary-blue); color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">Browse Products</button>
                </div>
            `;
        } else {
            container.innerHTML = productsToShow.map(p => createProductCard(p)).join('');
        }
    });
}

// View product details
function viewProduct(productId) {
    // Save to recently viewed
    let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
    recentlyViewed = recentlyViewed.filter(id => id !== productId);
    recentlyViewed.unshift(productId);
    recentlyViewed = recentlyViewed.slice(0, 10);
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    
    window.location.href = `product.html?id=${productId}`;
}

// Filter by category or subcategory
function filterByCategory(subcategory) {
    const container = document.getElementById('topDeals');
    if (!container) return;
    
    let filteredProducts;
    let displayName = subcategory;
    
    // Check if it's a main category or subcategory
    const mainCategories = ['electronics', 'fashion', 'home', 'sports', 'books'];
    
    if (mainCategories.includes(subcategory)) {
        // Filter by main category
        filteredProducts = products.filter(p => p.category === subcategory);
    } else {
        // Filter by subcategory
        filteredProducts = products.filter(p => p.subcategory === subcategory);
    }
    
    if (filteredProducts.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <div style="font-size: 64px; margin-bottom: 20px;">📦</div>
                <h3 style="color: var(--text-dark); margin-bottom: 10px;">No products found</h3>
                <p style="color: var(--text-gray);">We don't have ${displayName} products yet.</p>
            </div>
        `;
    } else {
        container.innerHTML = filteredProducts.map(p => createProductCard(p)).join('');
    }
    
    // Scroll to products section smoothly
    const filterBar = document.querySelector('.filter-sort-bar');
    if (filterBar) {
        setTimeout(() => {
            window.scrollTo({
                top: filterBar.offsetTop - 100,
                behavior: 'smooth'
            });
        }, 100);
    }
    
    showToast(`📱 Showing ${filteredProducts.length} ${displayName} products`, 'success');
}

// ============================================
// CART MANAGEMENT
// ============================================

// Add to cart with fly animation
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
    showToast('✓ Added to cart!', 'success');
    
    // Trigger fly to cart animation
    const productCard = event?.target?.closest?.('.product-card');
    if (productCard) {
        flyToCart(productCard);
    }
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
    
    const isRemoving = wishlist.includes(productId);
    
    if (isRemoving) {
        wishlist = wishlist.filter(id => id !== productId);
        showToast('💔 Removed from wishlist', 'success');
    } else {
        wishlist.push(productId);
        showToast('❤️ Added to wishlist!', 'success');
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
    // Update all wishlist buttons for this product
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        const onclickAttr = btn.getAttribute('onclick');
        if (onclickAttr && onclickAttr.includes(`'${productId}'`)) {
            if (isRemoving) {
                btn.classList.remove('active');
            } else {
                btn.classList.add('active');
            }
        }
    });
    
    // Reload wishlist section if it exists
    const wishlistSection = document.getElementById('wishlistProducts');
    if (wishlistSection) {
        const wishlistProductsToShow = wishlist.map(id => getProductById(id)).filter(Boolean);
        if (wishlistProductsToShow.length === 0) {
            wishlistSection.innerHTML = `
                <div style="text-align: center; padding: 60px 20px; grid-column: 1/-1;">
                    <div style="font-size: 80px; margin-bottom: 20px;">💔</div>
                    <h3 style="color: var(--text-dark); margin-bottom: 10px;">Your Wishlist is Empty</h3>
                    <p style="color: var(--text-gray); margin-bottom: 20px;">Start adding products you love!</p>
                    <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" style="padding: 12px 30px; background: var(--primary-blue); color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">Browse Products</button>
                </div>
            `;
        } else {
            wishlistSection.innerHTML = wishlistProductsToShow.map(p => createProductCard(p)).join('');
        }
    }
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
    
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            const navLinks = document.getElementById('navLinks');
            if (navLinks) {
                navLinks.classList.toggle('active');
            }
        });
    }
    
    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
        
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Glass navbar effect on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Chat support button
    const chatSupport = document.getElementById('chatSupport');
    if (chatSupport) {
        chatSupport.addEventListener('click', function() {
            showToast('💬 Chat support opening soon!', 'info');
        });
    }
    
    // Countdown timer
    initCountdown();
    
    // Initialize product sliders with enhanced features
    initProductSliders();
    
    // Initialize fade-in on scroll
    initFadeOnScroll();
    
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
// ADVANCED ANIMATIONS
// ============================================

// Fly to cart animation
function flyToCart(productElement) {
    const cartIcon = document.querySelector('.cart-icon-wrapper');
    if (!cartIcon || !productElement) return;
    
    const productRect = productElement.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();
    
    // Create flying product image
    const flyingProduct = document.createElement('div');
    flyingProduct.className = 'flying-product';
    flyingProduct.innerHTML = '<img src="' + productElement.querySelector('.product-image').src + '" style="width: 60px; height: 60px; border-radius: 8px;">';
    flyingProduct.style.left = productRect.left + 'px';
    flyingProduct.style.top = productRect.top + 'px';
    flyingProduct.style.setProperty('--x', (cartRect.left - productRect.left) + 'px');
    flyingProduct.style.setProperty('--y', (cartRect.top - productRect.top) + 'px');
    
    document.body.appendChild(flyingProduct);
    
    // Animate cart badge
    const cartBadge = document.getElementById('cartBadge');
    if (cartBadge) {
        cartBadge.classList.add('pulse');
        setTimeout(() => cartBadge.classList.remove('pulse'), 500);
    }
    
    // Remove flying product after animation
    setTimeout(() => {
        flyingProduct.remove();
    }, 800);
}

// Countdown timer for sale
function initCountdown() {
    const endTime = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours from now
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endTime - now;
        
        if (distance < 0) {
            return;
        }
        
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Close offer banner
function closeBanner() {
    const banner = document.getElementById('offerBanner');
    if (banner) {
        banner.style.transform = 'translateY(-100%)';
        setTimeout(() => banner.remove(), 300);
    }
}

// Initialize product sliders
function initProductSliders() {
    const scrollContainers = document.querySelectorAll('.product-scroll');
    
    scrollContainers.forEach(container => {
        // Add scroll arrow buttons
        const leftArrow = document.createElement('button');
        leftArrow.className = 'scroll-arrow left';
        leftArrow.innerHTML = '←';
        leftArrow.onclick = () => container.scrollBy({ left: -300, behavior: 'smooth' });
        
        const rightArrow = document.createElement('button');
        rightArrow.className = 'scroll-arrow right';
        rightArrow.innerHTML = '→';
        rightArrow.onclick = () => container.scrollBy({ left: 300, behavior: 'smooth' });
        
        container.parentElement.style.position = 'relative';
        container.parentElement.appendChild(leftArrow);
        container.parentElement.appendChild(rightArrow);
    });
}

// Fade in on scroll
function initFadeOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
    
    // Stagger animation for product cards
    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// ============================================
// NEW PREMIUM FEATURES
// ============================================

// Quick View Modal
function showQuickView(productId) {
    const product = getProductById(productId);
    if (!product) return;
    
    // Create modal if it doesn't exist
    let modal = document.getElementById('quickViewModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'quickViewModal';
        modal.className = 'quick-view-modal';
        document.body.appendChild(modal);
    }
    
    modal.innerHTML = `
        <div class="quick-view-content">
            <div class="quick-view-image" style="background-image: url('${product.image}')">
                <button class="quick-view-close" onclick="closeQuickView()">&times;</button>
            </div>
            <div class="quick-view-details">
                <h2 class="quick-view-title">${product.name}</h2>
                <div class="quick-view-rating">
                    <span class="stars">${'⭐'.repeat(Math.floor(product.rating))}</span>
                    <span class="rating-text">${product.rating}</span>
                    <span class="rating-count">(${product.reviews.toLocaleString()} reviews)</span>
                </div>
                <div class="quick-view-price">
                    <span class="quick-view-current-price">₹${product.price.toLocaleString()}</span>
                    <span class="quick-view-original-price">₹${product.originalPrice.toLocaleString()}</span>
                    <span class="quick-view-discount">${product.discount}% OFF</span>
                </div>
                <p class="quick-view-description">${product.description}</p>
                <div class="quick-view-actions">
                    <button class="btn btn-primary" onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')}); closeQuickView();">
                        🛒 Add to Cart
                    </button>
                    <button class="btn btn-accent" onclick="buyNow('${product.id}')">
                        ⚡ Buy Now
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    
    // Close on outside click
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeQuickView();
        }
    };
}

function closeQuickView() {
    const modal = document.getElementById('quickViewModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Buy Now Function
function buyNow(productId) {
    const product = getProductById(productId);
    if (!product) return;
    
    // Add to cart
    addToCart(product);
    
    // Redirect to checkout
    setTimeout(() => {
        window.location.href = 'checkout.html';
    }, 500);
}

// Share Product
function shareProduct(productId) {
    const product = getProductById(productId);
    if (!product) return;
    
    if (navigator.share) {
        navigator.share({
            title: product.name,
            text: `Check out ${product.name} at just ₹${product.price}!`,
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: Copy to clipboard
        const url = `${window.location.origin}/product.html?id=${productId}`;
        navigator.clipboard.writeText(url).then(() => {
            showToast('🔗 Link copied to clipboard!', 'success');
        });
    }
}

// Filter Products by Category
let currentFilter = 'all';
let currentSort = 'default';

function filterProducts(category) {
    currentFilter = category;
    applyFiltersAndSort();
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

function sortProducts(sortType) {
    currentSort = sortType;
    applyFiltersAndSort();
}

function applyFiltersAndSort() {
    let filteredProducts = currentFilter === 'all' 
        ? [...products] 
        : getProductsByCategory(currentFilter);
    
    // Apply sorting
    switch(currentSort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'popular':
            filteredProducts.sort((a, b) => b.reviews - a.reviews);
            break;
        case 'discount':
            filteredProducts.sort((a, b) => b.discount - a.discount);
            break;
    }
    
    // Update display
    const container = document.getElementById('topDeals');
    if (container) {
        container.innerHTML = filteredProducts.slice(0, 8).map(p => createProductCard(p)).join('');
    }
}

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
window.flyToCart = flyToCart;
window.closeBanner = closeBanner;
window.showQuickView = showQuickView;
window.closeQuickView = closeQuickView;
window.buyNow = buyNow;
window.shareProduct = shareProduct;
window.filterProducts = filterProducts;
window.sortProducts = sortProducts;
window.toggleWishlist = toggleWishlist;
window.isInWishlist = isInWishlist;
window.showToast = showToast;
window.closeModal = closeModal;
window.updateProfileName = updateProfileName;
window.viewProduct = viewProduct;
window.filterByCategory = filterByCategory;
window.flyToCart = flyToCart;
window.closeBanner = closeBanner;

// ============================================
// NOTIFICATION SYSTEM
// ============================================

// Dummy notifications data
const dummyNotifications = [
    {
        id: 1,
        type: 'order',
        icon: '📦',
        title: 'Order Placed Successfully',
        message: 'Your order #12345 has been placed successfully and is being processed. You will receive updates on your email.',
        time: '2 minutes ago',
        read: false
    },
    {
        id: 2,
        type: 'login',
        icon: '🔐',
        title: 'New Login Detected',
        message: 'We detected a new login to your account from Chrome on Windows. If this wasn\'t you, please secure your account immediately.',
        time: '1 hour ago',
        read: false
    },
    {
        id: 3,
        type: 'offer',
        icon: '🎉',
        title: 'Flash Sale Started',
        message: 'Limited time offer! Get up to 70% off on electronics, fashion, and home appliances. Hurry, sale ends in 6 hours!',
        time: '3 hours ago',
        read: false
    },
    {
        id: 4,
        type: 'payment',
        icon: '💳',
        title: 'Payment Received',
        message: 'We have successfully received your payment of $299.99 for order #12340. Your order is now confirmed.',
        time: '5 hours ago',
        read: true
    },
    {
        id: 5,
        type: 'delivery',
        icon: '🚚',
        title: 'Your Item Has Been Shipped',
        message: 'Great news! Your order #12338 has been shipped and is on its way. Expected delivery: Tomorrow by 6 PM.',
        time: '1 day ago',
        read: true
    },
    {
        id: 6,
        type: 'offer',
        icon: '🏷️',
        title: 'Exclusive Deal Just for You',
        message: 'As a valued customer, enjoy an extra 20% off on your next purchase. Use code SPECIAL20 at checkout.',
        time: '2 days ago',
        read: true
    },
    {
        id: 7,
        type: 'order',
        icon: '✅',
        title: 'Order Delivered Successfully',
        message: 'Your order #12335 has been delivered successfully. We hope you love your purchase! Please rate your experience.',
        time: '3 days ago',
        read: true
    },
    {
        id: 8,
        type: 'login',
        icon: '🔒',
        title: 'Security Alert',
        message: 'Your password was changed successfully. If you didn\'t make this change, contact our support team immediately.',
        time: '5 days ago',
        read: true
    }
];

// Load notifications from localStorage or use dummy data
let notifications = JSON.parse(localStorage.getItem('notifications')) || dummyNotifications;

// Initialize notification system
function initNotifications() {
    renderNotifications();
    updateNotificationBadge();
    
    // Toggle dropdown on bell click
    const bell = document.getElementById('notificationBell');
    const dropdown = document.getElementById('notificationDropdown');
    
    if (bell && dropdown) {
        bell.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!bell.contains(e.target)) {
                dropdown.classList.remove('show');
            }
        });
    }
    
    // Mark all as read button
    const markAllReadBtn = document.getElementById('markAllRead');
    if (markAllReadBtn) {
        markAllReadBtn.addEventListener('click', markAllAsRead);
    }
}

// Render notifications in the dropdown
function renderNotifications() {
    const notificationList = document.getElementById('notificationList');
    if (!notificationList) return;
    
    if (notifications.length === 0) {
        notificationList.innerHTML = `
            <div class="notification-empty">
                <div class="notification-empty-icon">🔔</div>
                <p>No notifications yet</p>
            </div>
        `;
        return;
    }
    
    notificationList.innerHTML = notifications.map(notification => `
        <div class="notification-card ${notification.read ? '' : 'unread'}" 
             onclick="markAsRead(${notification.id})" 
             data-id="${notification.id}">
            <div class="notification-icon-wrapper ${notification.type}">
                ${notification.icon}
            </div>
            <div class="notification-content">
                <h4 class="notification-title">${notification.title}</h4>
                <p class="notification-message">${notification.message}</p>
                <span class="notification-time">${notification.time}</span>
            </div>
        </div>
    `).join('');
}

// Update notification badge count
function updateNotificationBadge() {
    const badge = document.getElementById('notificationBadge');
    const bell = document.getElementById('notificationBell');
    
    if (!badge) return;
    
    const unreadCount = notifications.filter(n => !n.read).length;
    badge.textContent = unreadCount;
    
    if (unreadCount > 0) {
        badge.style.display = 'block';
        if (bell) bell.classList.add('has-new');
    } else {
        badge.style.display = 'none';
        if (bell) bell.classList.remove('has-new');
    }
}

// Mark notification as read
function markAsRead(notificationId) {
    const notification = notifications.find(n => n.id === notificationId);
    if (notification && !notification.read) {
        notification.read = true;
        localStorage.setItem('notifications', JSON.stringify(notifications));
        
        // Add ripple effect
        const card = document.querySelector(`[data-id="${notificationId}"]`);
        if (card) {
            card.classList.add('ripple');
            setTimeout(() => {
                card.classList.remove('ripple');
                card.classList.remove('unread');
            }, 600);
        }
        
        updateNotificationBadge();
    }
}

// Mark all notifications as read
function markAllAsRead() {
    notifications.forEach(n => n.read = true);
    localStorage.setItem('notifications', JSON.stringify(notifications));
    renderNotifications();
    updateNotificationBadge();
    showToast('✅ All notifications marked as read', 'success');
}

// Add new notification (simulate)
function addNotification(type, icon, title, message) {
    const newNotification = {
        id: Date.now(),
        type: type,
        icon: icon,
        title: title,
        message: message,
        time: 'Just now',
        read: false
    };
    
    notifications.unshift(newNotification);
    localStorage.setItem('notifications', JSON.stringify(notifications));
    
    renderNotifications();
    updateNotificationBadge();
    
    // Trigger bell ring animation
    const bell = document.getElementById('notificationBell');
    if (bell) {
        bell.classList.add('has-new');
        setTimeout(() => {
            bell.classList.remove('has-new');
        }, 1500);
    }
    
    showToast(`🔔 ${title}`, 'success');
}

// Simulate new notification (for demo)
function simulateNewNotification() {
    const notifications = [
        {
            type: 'order',
            icon: '📦',
            title: 'New Order Confirmed',
            message: 'Your order #' + Math.floor(Math.random() * 90000 + 10000) + ' has been confirmed and will be processed shortly.'
        },
        {
            type: 'offer',
            icon: '🎁',
            title: 'Special Offer',
            message: 'Limited time! Get 25% off on selected items. Use code SAVE25 at checkout.'
        },
        {
            type: 'delivery',
            icon: '🚚',
            title: 'Out for Delivery',
            message: 'Your package is out for delivery and will arrive today between 2-5 PM.'
        },
        {
            type: 'payment',
            icon: '💰',
            title: 'Payment Successful',
            message: 'Payment of $' + (Math.random() * 500 + 50).toFixed(2) + ' has been successfully processed.'
        }
    ];
    
    const random = notifications[Math.floor(Math.random() * notifications.length)];
    addNotification(random.type, random.icon, random.title, random.message);
}

// Initialize on page load
if (document.getElementById('notificationBell')) {
    initNotifications();
}

// Export functions to window
window.markAsRead = markAsRead;
window.markAllAsRead = markAllAsRead;
window.addNotification = addNotification;
window.simulateNewNotification = simulateNewNotification;
