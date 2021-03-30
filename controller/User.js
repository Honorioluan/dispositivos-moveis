const User = require('../model/User')
//CRUDE-Create - Read - Update - DELETE

module.exports = {

    async index(req,res){
        let users = await User.find()
        return res.json(users)
    },
    
    
    
    async store(req,res){
        const {name, email, age, password} = req.body;
        const user = await User.create({name, email, age, password})
        return res.json(user)
    },
    async update(req, res){
        var id = req.query.id;
        
        let user = await User.findById(id);
        user.name = req.body.name;
        user.email = req.body.email;
        user.age = req.body.age;
        user.password = req.body.password;
        user = await User.updateOne(user);
        return res.json({mensagem : 'Atualizar o user ' + id + ' com os dados do post ' + user.nome })
    
    },
        
    
    delete(req,res){
    var id = req.querry.id;
    return res.json({mensagem :'deleta o produto' + id })


    }
}