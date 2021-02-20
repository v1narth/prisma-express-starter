import express from 'express'
import ErrorHandler from 'utils/ErrorHandler'

const router = express.Router()

router.get('/ping', (req, res, next) => {
    res.send({
        message: "pong"
    })
})

router.get('/error', (req, res) => {
    throw new ErrorHandler("Oops, something went wrong!")
})

export default router;