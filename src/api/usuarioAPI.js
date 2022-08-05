const usuarioModel = require('../models/usuarioModel');
const bcrypt = require('bcrypt');

exports.registrarUsuario = async (username, email, password) => {
    const user = {username,email,password};
    //Verificar usuario o email no existentes
    const usuarioBuscadoUsername = await usuarioModel.findOne({username:username});
    const usuarioBuscadoEmail = await usuarioModel.findOne({email:email});
    if(usuarioBuscadoUsername){
        return ({error: `El username "${username}" ya esta en uso`})
    }
    if(usuarioBuscadoEmail){
        return ({error: `El email "${email}" ya esta en uso`})
    }
    user.password = await bcrypt.hash(user.password,10);
    const usuarioCreado = await usuarioModel.create(user)
    if(usuarioCreado){
        return {resultado: "Creado", data: usuarioCreado};
    }else{
        return {error: "No creado"};
    }
}

exports.logearUsuario = async (username,email,password) => {
    //Buscar por username
    const usuarioPorUsername = await usuarioModel.findOne({username:username});
    if(usuarioPorUsername){
        if (await bcrypt.compare(password,usuarioPorUsername.password)){
            return {resultado: "Logeado"}
        }else{
            return {error: "Contraseña invalida"}
        }
    }
    const usuarioPorEmail = await usuarioModel.findOne({email:email});
    if(usuarioPorEmail){
        if (await bcrypt.compare(password,usuarioPorEmail.password)){
            return {resultado: "Logeado"}
        }else{
            return {error: "Contraseña invalida"}
        }
    }
    return {error: "No se encontro una cuenta con esos datos"}
    
}