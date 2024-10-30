const express = require('express');

const transaction = require('../models/transactionModel');

exports.addTransaction= (req, res)=>{
    const data ={
        amount : req.body.amount,
        type : req.body.type,
        description : req.body.description
    }


    transaction.create(data, (err, result)=>{
        if(err){
            return res.status(500).json({error: err});
        }
        res.status(201).json({message: 'transaction add successfully'})
    })
}


exports.getAllTransaction = (req, res)=>{
    transaction.getAllTransaction((err, result)=>{
        if(err){
            return res.status(500).json({error: err});
        };

        res.json(result);
    })
}
