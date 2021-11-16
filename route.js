import express from 'express';
import School from './School.js'
const router = express.Router();


router.get('/school', async (req, res) => {
    const result = await School.findOne({ Schools: req.query.school })
    if (!result) {
        return res.status(400).json({
            message: "error"
        })
    } else {
        return res.status(200).json({
            success: true,
            data: result,
        })
    }
});

export default router

