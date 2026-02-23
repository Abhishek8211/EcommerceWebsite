// Authentication Controller - Handle auth logic
const User = require('../models/User');
const Notification = require('../models/Notification');

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res) => {
    try {
        const { name, email, mobile, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ 
            $or: [{ email }, { mobile }] 
        });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User with this email or mobile already exists'
            });
        }

        // Create user
        const user = await User.create({
            name,
            email,
            mobile,
            password
        });

        // Create welcome notification
        await Notification.create({
            user: user._id,
            type: 'security',
            icon: '🎉',
            title: 'Welcome to ShopSphere!',
            message: `Hi ${name}, your account has been created successfully. Start shopping now!`,
            read: false
        });

        // Generate token
        const token = user.generateToken();

        res.status(201).json({
            success: true,
            message: 'Registration successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                mobile: user.mobile,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res) => {
    try {
        const { emailOrMobile, password } = req.body;

        // Validate input
        if (!emailOrMobile || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide email/mobile and password'
            });
        }

        // Find user (email or mobile)
        const user = await User.findOne({
            $or: [
                { email: emailOrMobile },
                { mobile: emailOrMobile }
            ]
        }).select('+password');

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Check password
        const isPasswordCorrect = await user.comparePassword(password);

        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Create login notification
        await Notification.create({
            user: user._id,
            type: 'login',
            icon: '🔐',
            title: 'New Login Detected',
            message: `Login successful from your device. If this wasn't you, please secure your account.`,
            read: false
        });

        // Generate token
        const token = user.generateToken();

        res.status(200).json({
            success: true,
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                mobile: user.mobile,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Send OTP to mobile
// @route   POST /api/auth/send-otp
// @access  Public
exports.sendOTP = async (req, res) => {
    try {
        const { mobile } = req.body;

        if (!mobile) {
            return res.status(400).json({
                success: false,
                message: 'Please provide mobile number'
            });
        }

        // Find user
        const user = await User.findOne({ mobile });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found with this mobile number'
            });
        }

        // Generate and save OTP
        const otp = user.generateOTP();
        await user.save();

        // In production, send actual SMS here
        console.log(`📱 OTP for ${mobile}: ${otp}`);

        res.status(200).json({
            success: true,
            message: 'OTP sent successfully',
            // Remove this in production (only for testing)
            otp: process.env.NODE_ENV === 'development' ? otp : undefined
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Verify OTP and login
// @route   POST /api/auth/verify-otp
// @access  Public
exports.verifyOTP = async (req, res) => {
    try {
        const { mobile, otp } = req.body;

        if (!mobile || !otp) {
            return res.status(400).json({
                success: false,
                message: 'Please provide mobile number and OTP'
            });
        }

        // Find user with OTP
        const user = await User.findOne({ mobile }).select('+otp +otpExpiry');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Check if OTP exists and is not expired
        if (!user.otp || user.otpExpiry < Date.now()) {
            return res.status(400).json({
                success: false,
                message: 'OTP expired or invalid'
            });
        }

        // Verify OTP
        if (user.otp !== otp) {
            return res.status(400).json({
                success: false,
                message: 'Invalid OTP'
            });
        }

        // Clear OTP
        user.otp = undefined;
        user.otpExpiry = undefined;
        await user.save();

        // Generate token
        const token = user.generateToken();

        res.status(200).json({
            success: true,
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                mobile: user.mobile,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        res.status(200).json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                mobile: user.mobile,
                role: user.role,
                createdAt: user.createdAt
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
