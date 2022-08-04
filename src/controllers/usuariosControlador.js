const usuarioAPI = require('../api/usuarioAPI');

exports.registrarUsuario = async(req,res) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password){
        res.status(400).json({error: "Faltan datos"});
    }
        
    const status = await usuarioAPI.registrarUsuario(username,email,password);
    if(status.resultado){
        res.status(201).json({usuario:status.data});
    }else{
        res.status(400).json({error: status.error});
    }
};

exports.logearUsuario = async(req,res) => {
    const {username, email, password} = req.body;
    const status = await usuarioAPI.logearUsuario(username,email,password);
    if(status.resultado){
        res.status(200).json({status:status.resultado});
    }else{
        res.status(400).json({error: status.error});
    }
}