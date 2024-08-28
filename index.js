// ESM (ES6 Module, Ecoma Script Module) import, export
// commonJS Module : require, module.export 또는 ewports

// const express = require('express')
import express from "express";

const app = express()

app.get('/', function (req, res) {
    res.send('GET 요청!')
  });

app.post('/', function (req, res) {
  res.send('POST 요청!')
});

app.put('/', function (req, res) {
    res.send('POST 요청!')
  });

  app.patch('/', function (req, res) {
    res.send('Patch 요청!')
  });

app.listen(3000)