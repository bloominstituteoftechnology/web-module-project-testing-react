const helpers = require('./helpers')
const { setupServer } = require('msw/node')
const { http, HttpResponse } = require('msw')

function getEpisodes() {
  return HttpResponse.json(helpers.getEpisodes())
}

const handlers = [
  http.get('http://localhost:9009/api/stranger-things/episodes', getEpisodes),
]

module.exports = setupServer(...handlers)
