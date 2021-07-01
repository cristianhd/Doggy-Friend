require('dotenv').config();

const {
    API_KEY
  } = process.env;



const BASE_URL= 'https://api.thedogapi.com/v1/breeds'
const BASE_ID = 'https://api.thedogapi.com/v1/images/search?breed_ids='
const BASE_SEARCH_URL= 'https://api.thedogapi.com/v1/breeds/search?q='
const HEADERS = {'x-api-key': API_KEY}


module.exports = {
  BASE_URL,
  BASE_ID,
  BASE_SEARCH_URL,
  HEADERS
}