const {response, request} = require('express');

const viewDeporte = async (req = request, res = response) => {
    res.json({
        'msg':'exito'
    })
};

const deporteGet = (req = request, res = response) => {

    //Ejemplo de desestructuración de variables por parte del query
    const { nombre = 'No name', numero = 1, } = req.query;

    //ejemplo de respuesta tipo json
    res.json({
        msg: 'get API - controlador',
        nombre,
        numero,
    });
}

const deportePost = (req, res = response) => {

    //ejemplo de desestructuración de datos del body
    const { nombre, numero } = req.body;

    //ejemplo de respuesta del body
    res.status(201).json({
        msg: 'post API - deportePost',
        nombre, 
        numero
    });
}

const deportePut = (req, res = response) => {

    //ejemplo de desestructuracion de datos que viajan por los params
    const { id } = req.params;

    //ejemplo de respuesta del body
    res.status(201).json({
        msg: 'put API - deportePut',
        id
    });
}

const deportePatch = (req, res = response) => {
    res.json({
        msg: 'patch API - deportePatch'
    });
}

const deporteDelete = (req, res = response) => {
    res.status(410).json({
        msg: 'delete API - deporteDelete'
    });
}


module.exports = {
    deporteGet,
    deportePost,
    deportePut,
    deportePatch,
    deporteDelete,
    viewDeporte,
}