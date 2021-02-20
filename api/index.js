const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./Schema/User');

mongoose.connect('mongodb+srv://thomas:thomas123456@cluster0.jtccx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=> console.log('vous etes connecter'))
.catch(()=> console.log('vous n\'êtes pas connecter'))

