import pool from "../database/connect/mariadb";
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/select', async function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
    const conn = await pool.getConnection();
  const rows = await conn.query('SELECT dataTime, pm10value, pm25value FROM FINE_DUST where dataTime >= date_add(now(), interval-1 day) ');
  res.send(rows);
  await conn.release();
});

router.get('/api/get/demo', function(req, res) {
  res.status(200).json({
      "message" : "call get api demo"
  });
});

router.post('/api/post/demo', function(req, res) {
  res.status(200).json({
      "message" : "call post api demo"
  });
});

module.exports = router;
