const url = "https://ctd-todo-api.herokuapp.com/v1/users"

const data = {
    firstName: "luisa",
    lastName: "wagner",
    email:"luisa@luisa.com",
    password: "1222"
}


const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    }
}

fetch(url, options )
  .then((response) => response.json())
  .then((json) => {
      // Aqui obtenemos la respuesta de la API.
      console.log("Usuario:", json);
    })

//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY29ib0BtYWlsLmNvbSIsImlkIjoyMzQyLCJpYXQiOjE2NDk0MzgwNzZ9.lhkeYQuLjFXVeCTqaclmMokEpgVx9J2lZ5sTaOzeT2k"