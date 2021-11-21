import express from 'express';
import School from './School.js'
const router = express.Router();


router.get('/school', async (req, res) => {
   console.log(req.query)
   try {
    const result = await School.findOne({ Name: req.query.school })
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
}
catch(err) {
    console.log(err)
}
});

export default router

