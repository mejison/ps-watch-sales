const express = require('express')
const port = 3000
var cors = require('cors')
var app = express()
 
const request = require('request');

app.use(cors())

app.get('/api/get-all-games',  (req, response) => {
  request('https://web.np.playstation.com/api/graphql/v1//op?operationName=categoryGridRetrieve&variables=%7B%22id%22%3A%2244d8bb20-653e-431e-8ad0-c0a365f68d2f%22%2C%22pageArgs%22%3A%7B%22size%22%3A24%2C%22offset%22%3A0%7D%2C%22sortBy%22%3A%7B%22name%22%3A%22productReleaseDate%22%2C%22isAscending%22%3Afalse%7D%2C%22filterBy%22%3A%5B%5D%2C%22facetOptions%22%3A%5B%5D%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%224ce7d410a4db2c8b635a48c1dcec375906ff63b19dadd87e073f8fd0c0481d35%22%7D%7D', { json: true, headers: {
    'x-psn-store-locale-override': 'ru-UA'
  } }, (err, res, body) => {
    response.send(body.data)
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})