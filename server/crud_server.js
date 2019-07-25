const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const mysql = require('mysql')

// eslint-disable-next-line no-path-concat
app.use(express.static(path.join(__dirname + '/app')))

app.set('port', (process.env.PORT || 5000))
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    port: '3306',
    database: 'db'})
conn.connect()
//INSERT INTO `stock_summary` (`stock_symbol`,`date`,`day_low`,`day_high`,`volume`) VALUES ('AAPL','2019-7-12','19.54', '22.66','11092878');


app.post('/summary/aapl', (req, res) => {
  let low = Number(req.body.low)
  let high = Number(req.body.high)
  let volume = Number(req.body.volume)
  let date = req.body.date
  let query = "INSERT INTO `stock_summary` (`stock_symbol`,`date`,`day_low`,`day_high`,`volume`) VALUES ('AAPL'," + "'"+date+"','"+low+"','"+high+"','"+volume+"')";
  console.log(query)
    conn.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send({
            result: result,
            success: true,
          })

    });
})
app.put('/summary/aapl', (req, res) => {
  let low = Number(req.body.low)
  let high = Number(req.body.high)
  let volume = Number(req.body.volume)
  let date = req.body.date
  let query = "UPDATE `stock_summary` SET day_low = '"+ low+"', day_high = '"+high+"', volume = '"+volume+"' WHERE date = '" + date + "' ";
    conn.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send({
            result: result,
            success: true,
          })

    });
})

app.delete('/summary/aapl', (req, res) => {
  let low = Number(req.body.low)
  let high = Number(req.body.high)
  let volume = Number(req.body.volume)
  let date = req.body.date
  console.log(req.body)
  let query = "DELETE FROM `stock_summary` WHERE date = '" + date + "' ";
    conn.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send({
            result: result,
            success: true,
          })

    });
})

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})
