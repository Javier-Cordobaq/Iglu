require('dotenv').config()


async function adminLogin(req, res){
    const {user, password} = req.body
    try{
        if(user === process.env.USER_ADMIN && password === process.env.PASSWORD_ADMIN){
            res.status(200).json({
                message:'Admin verifiqued'
            })
        }else{
            res.status(400).json({
                message:'Error credentials'
            })
        }
    }catch(err){
        res.status(500).json({
            message: 'error',
            error: err.message
        })
    }
}
module.exports = {
    adminLogin,
}