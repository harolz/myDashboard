
const mysql = require('mysql')
const express = require('express')
const app = express()
app.use(express.static('../dist'))
var server = require('http').createServer(app)
var io = require('socket.io')(server)
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  port: '3306',
  database: 'db'})
conn.connect()
io.on('connection', function (socket) {
  console.log('a user connected')

  socket.on('disconnect', function () {
    console.log('a user go out')
  })

  socket.on('message', function (obj) {
    let sql = 'select day_low, day_high, volume, date from stock_summary'
    let resultStr, resultjson
    conn.query(sql, function (err, result) {
      if (err) {
        console.log(err)
      }
      if (result) {
        resultjson = JSON.stringify(result)
        resultStr = resultjson
        io.emit('message', resultjson)
      }
    })
    //fresh every 10 seconds
    setInterval(function () {
      conn.query(sql, function (err, result) {
        if (err) {
          console.log(err)
        }
        if (result) {
          resultjson = JSON.stringify(result)
          if (resultStr !== resultjson) {
            resultStr = resultjson
            io.emit('message', resultStr)
          }
        }
      })
    }, 10000)
  })
})


server.listen(3000)
console.log('success listen at port:3000......')
