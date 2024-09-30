const express = require('express');
const router = express.Router();
const User = require('../models/details');

router.get('/getDetails', async (req, res) => {
    try {
        const id = req.body.id; 
        const user = await User.findById({email : id});

        if (!id || !user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({
            message: 'User details retrieved successfully',
            user, 
        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

module.exports = router;