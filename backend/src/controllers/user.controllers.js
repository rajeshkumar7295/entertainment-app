const bcrypt = require('bcrypt')
const { User } = require('../models/user.models.js')
const jwt=require("jsonwebtoken");


// user register 
const userRegister = async (req, res) => {
   
    try {
		const { email, password } = req.body;

		// Check if email or password is missing
		if (!email || !password) {
			return res.status(400).json({
				success: false,
				message: "Provide your email address and password",
			});
		}

		// Check if user already exists with the provided email
		const user = await User.findOne({ email });
		if (user) {
			return res.status(409).json({
				success: false,
				message: "User already exists with your email address",
			});
		}

		// Hash the password before saving
		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = new User({
			email: email,
			password: hashedPassword,
		});
		await newUser.save();
		res
			.status(201)
			.json({ success: true, message: "User Registration successfully" });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}

   

    
};


// user login 
const userLogin = async (req, res) => {

    try {
		console.log("backend login before")
		const { email, password } = req.body;

		// Check if email or password is missing
		if (!email || !password) {
			return res.status(400).json({
				success: false,
				message: "Provide your email address and password",
			});
		}

		// Find user by email
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({
				success: false,
				message: "Please register user with this email address",
			});
		}

		// Compare hashed passwords
		const hasEqualPassword = await bcrypt.compare(password, user.password);
		if (!hasEqualPassword) {
			return res.status(401).json({
				success: false,
				message: "Invalid password or email address provided",
			});
		}

		// Generate JWT token
		const jwkToken = jwt.sign({ email: email,_id:user._id }, process.env.TOKEN);
		console.log(jwkToken,"jwktoken")
		res.cookie("UserAuth", jwkToken).status(200).json({
			success: true,
			message: "User Login successfully",
			loginToken: jwkToken,
		});

	} catch (error) {
		console.log(error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}

    

   
    

   
};



// user logout 
const userLogout = (req, res) => {
    try {
		// Clear user authentication cookie
		res
			.clearCookie("UserAuth")
			.status(200)
			.json({ success: true, message: "User Logout Successfully" });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}







// exporting 
module.exports = {
    userRegister, userLogin, userLogout
}