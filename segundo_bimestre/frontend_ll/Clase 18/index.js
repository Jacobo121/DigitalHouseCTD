const user = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY29ib0BtYWlsLmNvbSIsImlkIjoyMzQyLCJpYXQiOjE2NDk0MzgwNzZ9.lhkeYQuLjFXVeCTqaclmMokEpgVx9J2lZ5sTaOzeT2k"
const userLogueado = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY29ib0BtYWlsLmNvbSIsImlkIjoyMzQyLCJpYXQiOjE2NDk0MzkwOTV9.1Qv9EiU7VjpUhPxuNLCAfXBfC6zq-RacQO6vd-Nfmug"
const url = `https://ctd-todo-api.herokuapp.com/v1/users/getMe`

const data = {
  email:"jacobo@mail.com",
  password: "1222"
}

//payload
const options = {
  method: "GET",
  headers: {
    "Content-type": "application/json",
    "authorization": userLogueado
  }
}

fetch(url, options)
  .then((response) => response.json())
  .then((json) => {
      //Aqui obtenemos la respuesta de la API.
      console.log(json);
    })


    //TOKEN usuario logueado:
    //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY29ib0BtYWlsLmNvbSIsImlkIjoyMzQyLCJpYXQiOjE2NDk0MzkwOTV9.1Qv9EiU7VjpUhPxuNLCAfXBfC6zq-RacQO6vd-Nfmug"


    //TOKEN usuario creado:
    //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY29ib0BtYWlsLmNvbSIsImlkIjoyMzQyLCJpYXQiOjE2NDk0MzgwNzZ9.lhkeYQuLjFXVeCTqaclmMokEpgVx9J2lZ5sTaOzeT2k"




 












