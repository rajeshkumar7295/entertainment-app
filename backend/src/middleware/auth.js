const Jwt = require('jsonwebtoken')
const {User}=require("../models/user.models");
// middleware to check authentication 
const isAuthenticated = async (req, res, next) => {
 
    try {
		// Extract token from cookies
		
		const token =req.cookies.UserAuth || req.headers["authorization"].split("=")[1]
		
		
		// Check if token exists
		if (!token) {
			return res.status(401).json({
				success: false,
				message: "Please login to access user information",
			});
		}
		// Extract public key from environment variables
		const publicKey = process.env.TOKEN;
           console.log("public Keys...")
		// Check if public key exists
		if (!publicKey) {
			return res.status(500).json({
				success: false,
				message: "Server error: Public key not provided",
			});
		}
		// Verify token using the public key
		const decodedToken = Jwt.verify(token, publicKey);
       
		// Extract email from the decoded token and add it to request body
		req.user = await User.findById(decodedToken._id);
		req.body.email = decodedToken.email;

		// Proceed to the next middleware
		next();
	} catch (error) {
		console.log("Verification Token Error: " );
		// Return an error response if token verification fails
		return res.status(401).json({
			success: false,
			message: "Unauthorized: Invalid or expired token",
		});
	}
    
}


module.exports = { isAuthenticated }