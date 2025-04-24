import User from "../models/User.js"; // Import the User model

// Function to get a user's referral link
export const getReferralLink = async (req, res) => {
  try {
    const { userId } = req.params; // Get the userId from params or request

    // Find the user by their ID and return the referral link
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send the referral link as the response
    res.status(200).json({ referralLink: user.referralLink });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Function to set the referral link (if needed)
export const setReferralLink = async (req, res) => {
  try {
    const { userId } = req.params;
    const { referralLink } = req.body; // The referral link from the request body

    // Find the user and update their referral link
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.referralLink = referralLink; // Update the referral link

    await user.save(); // Save the updated user

    res.status(200).json({ message: "Referral link updated successfully", referralLink: user.referralLink });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
