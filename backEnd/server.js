const express = require('express');
const mysql = require('mysql');

//sukuriama express aplikacija
const app = express();
const PORT = proces.env.PORT || 3000; //Aplinkos kintamasis
app.use(express.json());
const db = mysql.createConnection({
  host: 'localhost',
  use: '',
});
