// ============================================
// LOGIN & REGISTER - BACKEND INTEGRATION
// ============================================

// This file integrates your login page with the backend API
// Include this in login.html after api.js

console.log('🔐 Login integration loaded');

// Override the sendOTP function to use backend
window.sendOTP = async function(type) {
  const inputField = type === 'login' ? document.getElementById('loginInput') : document.getElementById('signupMobile');
  const otpContainer = type === 'login' ? document.getElementById('loginOtpContainer') : document.getElementById('signupOtpContainer');
  
  const value = inputField.value.trim();
  
  if (!value) {
    showToast('Please enter email or mobile number', 'error');
    return;
  }
  
  // Check if it's a mobile number (10 digits)
  const isMobile = /^[0-9]{10}$/.test(value);
  
  if (isMobile) {
    // Send OTP to mobile
    try {
      showToast('Sending OTP...', 'info');
      const response = await window.sendOTPAPI(value);
      
      // Show OTP in console for testing (development only)
      if (response.otp) {
        console.log('🔑 OTP:', response.otp);
        showToast(`OTP sent! (Dev: ${response.otp})`, 'success');
      } else {
        showToast('OTP sent to your mobile!', 'success');
      }
      
      otpContainer.style.display = 'block';
      
    } catch (error) {
      showToast(error.message || 'Failed to send OTP', 'error');
    }
  } else {
    // Email login - use password authentication
    showToast('Please use password login for email', 'info');
    // Show password field instead
    showPasswordLogin(type, value);
  }
};

// Show password login form
function showPasswordLogin(type, email) {
  const form = type === 'login' ? document.getElementById('loginForm') : document.getElementById('signupForm');
  
  const passwordHTML = `
    <div class="form-group">
      <label>Password</label>
      <input type="password" id="${type}Password" placeholder="Enter password" required />
    </div>
    <button class="btn btn-primary" style="width: 100%" onclick="handlePasswordLogin('${type}', '${email}')">
      ${type === 'login' ? 'Login' : 'Sign Up'}
    </button>
  `;
  
  form.innerHTML = `
    <div class="form-group">
      <label>Email</label>
      <input type="email" value="${email}" readonly />
    </div>
    ${passwordHTML}
  `;
}

// Handle password login
window.handlePasswordLogin = async function(type, email) {
  const passwordField = document.getElementById(`${type}Password`);
  const password = passwordField.value;
  
  if (!password) {
    showToast('Please enter password', 'error');
    return;
  }
  
  try {
    showToast('Logging in...', 'info');
    
    const response = await loginUser(email, password);
    
    showToast('✅ Login successful!', 'success');
    
    // Redirect to home page
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
    
  } catch (error) {
    showToast(error.message || 'Login failed', 'error');
  }
};

// Override verifyOTP function to use backend
window.verifyOTP = async function(type) {
  const otpInputs = type === 'login' 
    ? document.querySelectorAll('#loginForm .otp-inputs input')
    : document.querySelectorAll('#signupForm .otp-inputs input');
  
  const otp = Array.from(otpInputs).map(input => input.value).join('');
  
  if (otp.length !== 6) {
    showToast('Please enter complete OTP', 'error');
    return;
  }
  
  const mobileField = type === 'login' ? document.getElementById('loginInput') : document.getElementById('signupMobile');
  const mobile = mobileField.value;
  
  try {
    showToast('Verifying OTP...', 'info');
    
    const response = await verifyOTP(mobile, otp);
    
    showToast('✅ Login successful!', 'success');
    
    // Redirect to home page
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
    
  } catch (error) {
    showToast(error.message || 'Invalid OTP', 'error');
  }
};

// Handle signup with backend
window.handleSignup = async function() {
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const mobile = document.getElementById('signupMobile').value;
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('signupConfirmPassword').value;
  
  // Validation
  if (!name || !email || !mobile || !password) {
    showToast('Please fill all fields', 'error');
    return;
  }
  
  if (!/^[0-9]{10}$/.test(mobile)) {
    showToast('Please enter valid 10-digit mobile number', 'error');
    return;
  }
  
  if (password.length < 6) {
    showToast('Password must be at least 6 characters', 'error');
    return;
  }
  
  if (password !== confirmPassword) {
    showToast('Passwords do not match', 'error');
    return;
  }
  
  try {
    showToast('Creating account...', 'info');
    
    const response = await registerUser(name, email, mobile, password);
    
    showToast('✅ Account created successfully!', 'success');
    
    // Redirect to home page
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
    
  } catch (error) {
    showToast(error.message || 'Registration failed', 'error');
  }
};

// Add simple email/password login form handler
document.addEventListener('DOMContentLoaded', () => {
  // Add a simple login button for email/password
  const loginForm = document.getElementById('loginForm');
  
  if (loginForm) {
    // Create a simpler login form
    loginForm.innerHTML = `
      <div class="form-group">
        <label>Email or Mobile</label>
        <input type="text" id="loginEmailOrMobile" placeholder="Enter email or mobile number" required />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" id="loginPassword" placeholder="Enter password" required />
      </div>
      <button type="button" class="btn btn-primary" style="width: 100%" onclick="handleSimpleLogin()">
        Login
      </button>
      <div style="text-align: center; margin-top: 15px;">
        <a href="#" onclick="showOTPLogin(); return false;" style="color: var(--primary-blue); font-size: 14px;">
          Login with OTP instead
        </a>
      </div>
    `;
  }
  
  // Simplify signup form
  const signupForm = document.getElementById('signupForm');
  
  if (signupForm) {
    signupForm.innerHTML = `
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" id="signupName" placeholder="Enter your full name" required />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" id="signupEmail" placeholder="Enter your email" required />
      </div>
      <div class="form-group">
        <label>Mobile Number</label>
        <input type="tel" id="signupMobile" placeholder="Enter 10-digit mobile number" maxlength="10" required />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" id="signupPassword" placeholder="At least 6 characters" required />
      </div>
      <div class="form-group">
        <label>Confirm Password</label>
        <input type="password" id="signupConfirmPassword" placeholder="Re-enter password" required />
      </div>
      <button type="button" class="btn btn-primary" style="width: 100%" onclick="handleSignup()">
        Create Account
      </button>
    `;
  }
});

// Simple login handler
window.handleSimpleLogin = async function() {
  const emailOrMobile = document.getElementById('loginEmailOrMobile').value;
  const password = document.getElementById('loginPassword').value;
  
  if (!emailOrMobile || !password) {
    showToast('Please enter email/mobile and password', 'error');
    return;
  }
  
  try {
    showToast('Logging in...', 'info');
    
    const response = await loginUser(emailOrMobile, password);
    
    showToast('✅ Login successful!', 'success');
    
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
    
  } catch (error) {
    showToast(error.message || 'Login failed', 'error');
  }
};

// Show OTP login option
window.showOTPLogin = function() {
  const loginForm = document.getElementById('loginForm');
  loginForm.innerHTML = `
    <div class="form-group">
      <label>Mobile Number</label>
      <input type="tel" id="otpMobile" placeholder="Enter 10-digit mobile number" maxlength="10" required />
    </div>
    <button type="button" class="btn btn-primary" style="width: 100%" onclick="sendOTPForLogin()">
      Send OTP
    </button>
    <div id="otpInputSection" style="display: none; margin-top: 20px;">
      <div class="form-group">
        <label>Enter OTP</label>
        <input type="text" id="otpCode" placeholder="Enter 6-digit OTP" maxlength="6" required />
      </div>
      <button type="button" class="btn btn-primary" style="width: 100%" onclick="verifyOTPLogin()">
        Verify OTP
      </button>
    </div>
    <div style="text-align: center; margin-top: 15px;">
      <a href="#" onclick="location.reload(); return false;" style="color: var(--primary-blue); font-size: 14px;">
        Back to password login
      </a>
    </div>
  `;
};

// Send OTP for login
window.sendOTPForLogin = async function() {
  const mobile = document.getElementById('otpMobile').value;
  
  if (!/^[0-9]{10}$/.test(mobile)) {
    showToast('Please enter valid 10-digit mobile number', 'error');
    return;
  }
  
  try {
    showToast('Sending OTP...', 'info');
    
    const response = await window.sendOTPAPI(mobile);
    
    if (response.otp) {
      console.log('🔑 OTP:', response.otp);
      showToast(`OTP sent! Check console for development OTP`, 'success');
    } else {
      showToast('OTP sent to your mobile!', 'success');
    }
    
    document.getElementById('otpInputSection').style.display = 'block';
    
  } catch (error) {
    showToast(error.message || 'Failed to send OTP', 'error');
  }
};

// Verify OTP for login
window.verifyOTPLogin = async function() {
  const mobile = document.getElementById('otpMobile').value;
  const otp = document.getElementById('otpCode').value;
  
  if (!/^[0-9]{6}$/.test(otp)) {
    showToast('Please enter valid 6-digit OTP', 'error');
    return;
  }
  
  try {
    showToast('Verifying OTP...', 'info');
    
    const response = await window.verifyOTPAPI(mobile, otp);
    
    showToast('✅ Login successful!', 'success');
    
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
    
  } catch (error) {
    showToast(error.message || 'Invalid OTP', 'error');
  }
};

// Toast function (if not already defined)
if (typeof showToast !== 'function') {
  window.showToast = function(message, type = 'info') {
    const toast = document.querySelector('.toast');
    if (toast) {
      const icon = type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ';
      toast.querySelector('.toast-icon').textContent = icon;
      toast.querySelector('.toast-message').textContent = message;
      toast.className = `toast ${type} show`;
      
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    } else {
      alert(message);
    }
  };
}

console.log('✅ Login integration ready');
