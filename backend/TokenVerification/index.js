const jwt = require('jsonwebtoken')

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null)
        return res.sendStatus(401).json({error : 'Auth header missing'})

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, {user_name, id})=>{
        if(err) return res.sendStatus(403).json(err)
        console.log(`user name : ${JSON.stringify(user_name)}`)
        req.user_name = user_name
        req.id = id
        next( )
    })
    
}

module.exports = {authenticateToken}