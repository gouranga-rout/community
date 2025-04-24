import express from 'express';
import { getReferralLink, setReferralLink } from '../controllers/referralController.js';

const router = express.Router();

// Route to get the referral link of a user
router.get('/:userId/referral', getReferralLink);

// Route to set/update the referral link of a user
router.put('/:userId/referral', setReferralLink);

export default router;
