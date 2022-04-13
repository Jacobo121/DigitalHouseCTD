const url = "https://ctd-todo-api.herokuapp.com/v1/users";
let token;

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email");
const contrasenia = document.querySelector("#contrasenia");
const crearCuenta = document.querySelector(".crearCuenta");


let data = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  contrasenia.addEventListener("blur", () => {
      data.firstName = nombre.value
      data.lastName = apellido.value
      data.email = email.value
      data.password = contrasenia.value
  })

//payload
const options = {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-type": "application/json",
  },
};

crearCuenta.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(url, options)
    .then((response) => response.json())
    .then((json) => {
        //Aqui obtenemos la respuesta de la API.
        console.log("Usuario:", json);
        token = json;
    });
});



  

//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pbEBtYWlsLmNvbSIsImlkIjoyMzQxLCJpYXQiOjE2NDk0MzcxMTN9.9z746_gsxqe3s_i70saSwQTkBvkQBhNqJods74GwdsE"