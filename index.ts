const express = require('express');
import router from "./src/network";

const serve = express();
router(serve);

//traspilar
//EcmaScript ES modules
//import express from 'express';
//CommonJS const express = require('express');
const app = express();

const example = function () {
    console.log('estoy a la escucha');
}
router(app);

app.listen(
    9000,
    example
)