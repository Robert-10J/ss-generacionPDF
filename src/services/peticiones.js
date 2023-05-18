import axios from 'axios'

axios.get(import.meta.env.VITE_URL_API)
  .then((response) => {
    console.log(response)
  })