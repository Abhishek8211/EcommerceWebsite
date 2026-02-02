# 🛍️ ShopSphere - Modern E-Commerce Website

A fully responsive, animated e-commerce website built with **HTML, CSS, and JavaScript** (no frameworks). Features a complete shopping experience with authentication, product browsing, cart management, and checkout flow.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🔐 Authentication System
- **Login/Signup** with OTP simulation
- Support for email and mobile number login
- Auto-focus OTP input with validation
- Session management using localStorage
- Smooth form transitions with animations

### 🏠 Homepage
- **Sticky Navigation Bar** with search, cart, wishlist, and notifications
- **Auto-sliding Hero Banner** with smooth transitions
- **Product Sections**: Top Deals, Best Sellers, Trending
- **Category Filtering** for easy browsing
- **Dark/Light Mode Toggle** with theme persistence
- **Skeleton Loading** animations for better UX

### 🛍️ Product Features
- **18+ Sample Products** with real images from Unsplash
- **Interactive Product Cards** with hover effects
- **Wishlist Functionality** with heart icon toggle
- **Live Search** with instant suggestions
- **Rating & Reviews** display
- **Discount Badges** on products
- **Add to Cart** with flying animation effect

### 📦 Product Details Page
- Large product images with **zoom effect**
- **Quantity Selector** with +/- buttons
- Detailed product descriptions
- **Similar Products** section
- Animated "Add to Cart" with visual feedback
- **Buy Now** quick checkout option

### 🛒 Shopping Cart
- View all cart items with product details
- **Increase/Decrease quantity** controls
- **Remove items** with smooth animation
- **Auto price calculation** (Subtotal, Delivery, Total)
- **Free delivery** on orders above ₹500
- **Persistent cart** using localStorage

### 💳 Checkout Process
- **Delivery Address Form** with validation
- **Order Summary** with itemized list
- **Multiple Payment Options**:
  - UPI (Google Pay, PhonePe, Paytm)
  - Credit/Debit Card
  - Net Banking
  - Cash on Delivery (COD)
- **Order Success Animation** with SVG checkmark
- **Order ID Generation** and confirmation

### 🎨 UI/UX Highlights
- **Glassmorphism** design elements
- **Smooth Animations**: Fade-in on scroll, hover effects, modal transitions
- **Responsive Design**: Mobile, Tablet, and Desktop optimized
- **Premium Color Scheme**: Blue primary with Yellow/Orange accents
- **Soft Shadows** and rounded corners throughout
- **Toast Notifications** for user feedback
- **Loading States** with shimmer effects
- **Accessibility Features** for better usability

## 🚀 Live Demo

Open `index.html` in your browser to see the live demo!

**Quick Start:**
1. Start with `login.html` to create an account
2. Browse products on the homepage
3. Add items to cart and checkout

## 📁 Project Structure

```
Ecommerce-Website/
│
├── index.html          # Homepage with product listings
├── login.html          # Login/Signup page with OTP
├── product.html        # Product details page
├── cart.html           # Shopping cart page
├── checkout.html       # Checkout and payment page
│
├── css/
│   └── style.css       # Complete styling with animations
│
└── js/
    └── script.js       # All JavaScript functionality
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
  - Flexbox & Grid layouts
  - CSS Variables for theming
  - Keyframe animations
  - Media queries for responsiveness
- **JavaScript (ES6+)** - Interactive functionality
  - LocalStorage for data persistence
  - Dynamic DOM manipulation
  - Event handling
  - Form validation

## 💡 Key Functionalities

### Data Persistence
All data is stored in browser's **localStorage**:
- User authentication state
- Shopping cart items
- Wishlist products
- Theme preference (Dark/Light mode)
- Order history

### Animations Implemented
- ✅ Button ripple effects on click
- ✅ Product card lift on hover
- ✅ Flying animation when adding to cart
- ✅ Fade-in sections on scroll
- ✅ Smooth modal transitions
- ✅ Shimmer loading effect
- ✅ Auto-slider transitions
- ✅ SVG success checkmark animation
- ✅ Toast notification slide-in

### Responsive Breakpoints
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🎯 How to Use

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhishek8211/Ecommerce_Website.git
   cd Ecommerce_Website
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server (recommended)
   ```

3. **Using Live Server (VS Code)**
   - Install Live Server extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

## 📱 Pages Overview

### 1. Login/Signup (`login.html`)
- Tab-based interface for Login and Signup
- OTP generation and validation
- Form validation with error messages
- Smooth transitions between states

### 2. Homepage (`index.html`)
- Dynamic product loading
- Category-wise product sections
- Search functionality with live suggestions
- Dark mode toggle

### 3. Product Details (`product.html`)
- Dynamic product information loading
- Quantity selection
- Add to cart/Buy now options
- Related products display

### 4. Shopping Cart (`cart.html`)
- Cart items management
- Quantity adjustment
- Price calculation with delivery charges
- Empty cart state

### 5. Checkout (`checkout.html`)
- Address form with validation
- Payment method selection
- Order summary
- Success confirmation

## 🌟 Highlights

- **No Backend Required** - Fully functional frontend-only application
- **Clean Code** - Well-commented and organized
- **Beginner Friendly** - Easy to understand and modify
- **Portfolio Ready** - Professional design and features
- **Mobile First** - Responsive on all devices

## 🔧 Customization

### Change Color Theme
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-blue: #2874f0;
    --accent-yellow: #ff9f00;
    --accent-orange: #ff6b35;
    /* Add your colors */
}
```

### Add More Products
Edit the products array in `js/script.js`:
```javascript
const products = [
    {
        id: 'prod1',
        name: 'Your Product',
        category: 'electronics',
        price: 2499,
        // Add more details
    }
];
```

## 📝 Future Enhancements

- [ ] User profile page with order history
- [ ] Product filtering and sorting
- [ ] Product reviews and ratings system
- [ ] Compare products feature
- [ ] Coupon code functionality
- [ ] Backend integration with API
- [ ] Payment gateway integration
- [ ] Email notifications

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Abhishek**
- GitHub: [@Abhishek8211](https://github.com/Abhishek8211)

## 🙏 Acknowledgments

- Product images from [Unsplash](https://unsplash.com)
- Icons and emojis for UI elements
- Inspiration from major e-commerce platforms

## 📞 Support

If you like this project, please ⭐ star the repository!

For questions or feedback, feel free to open an issue.

---

**Made with ❤️ and JavaScript** 
