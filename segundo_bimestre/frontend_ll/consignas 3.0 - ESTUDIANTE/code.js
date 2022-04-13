/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Escribe tu nombre");
  datosPersona.edad = prompt("Escribe tu año de nacimiento")
  datosPersona.ciudad = prompt("Escribe tu ciudad")
  datosPersona.interesPorJs = confirm("Te interesa javascript")
  
  datosPersona.interesPorJs == true ? datosPersona.interesPorJs = "Si" : datosPersona.interesPorJs = "No"
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let formNombre = document.querySelector("#nombre");
  let formEdad = document.querySelector("#edad");
  let formCiudad = document.querySelector("#ciudad");
  let formJavascript = document.querySelector("#javascript");

  formNombre.innerHTML += datosPersona.nombre;
  formEdad.innerHTML += 2022 - datosPersona.edad;
  formCiudad.innerHTML += datosPersona.ciudad;
  formJavascript.innerHTML += datosPersona.interesPorJs;

}

let control = false;
function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const divListado = document.querySelector("#fila")
  if(control == false) {
    listado.map((item) => {
      divListado.innerHTML += `
        <div class="caja">
          <img src="${item.imgUrl}" alt="" />
          <p class="lenguajes">${item.lenguajes}</p>
          <p class="bimestres">${item.bimestre}</p>
        </div>
      `
    })
    control = true;
  } 
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 let sitio = document.querySelector("#sitio");
 sitio.classList.toggle("dark")
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

document.addEventListener("keydown", (event) => {
  if(event.keyCode == '70') {
    let mi = document.querySelector("#sobre-mi");
    mi.classList.remove("oculto")
  }
})