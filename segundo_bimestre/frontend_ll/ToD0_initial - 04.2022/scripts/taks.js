// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.

if (!localStorage.jwt) {
  location.replace('./index.html');
}

/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {

  /* ---------------- variables globales y llamado a funciones ---------------- */
  const formCrearTarea = document.querySelector('form');
  const nuevaTarea = document.querySelector('#nuevaTarea');
  const btnCerrarSesion = document.querySelector("#closeApp");

  const urlBase = 'https://ctd-todo-api.herokuapp.com/v1/tasks';
  const urlUsuario = 'https://ctd-todo-api.herokuapp.com/v1/users/getMe';

  const token = JSON.parse(localStorage.jwt);
  obtenerNombreUsuario();
  consultarTareas();

  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener('click', function () {
    const confirma = confirm("Estas seguro de cerrar sesión?");

    if(confirma) {
      localStorage.clear();
      location.replace('./index.html');
    }
  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
    const settings = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          authorization: token
      }
    }

    fetch(urlUsuario, settings) 
      .then(res => res.json())
      .then(data => {
        const userInfo = document.querySelector('.user-info p');
        userInfo.innerHTML = data.firstName;
      })
      .catch(err => console.log(err));

  };


  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */
  function consultarTareas() {
    const settings = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          authorization: token
      }
    }

    fetch(urlBase, settings) 
      .then(res => res.json())
      .then(data => {
        console.log(data);
        renderizarTareas(data);
        botonBorrarTarea();
        botonesCambioEstado(data);
      })
      .catch(err => console.log(err));
    



  };


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCrearTarea.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const tarea = {
      description: nuevaTarea.value.trim()
    }

    const settings = {
      method: 'POST',
      body: JSON.stringify(tarea),
      headers: {
          'Content-Type': 'application/json',
          authorization: token
      }
    }

    fetch(urlBase, settings)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        consultarTareas()
      })
      .catch(err => console.log(err))




  });


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {
    const tareasPendientes = document.querySelector('.tareas-pendientes');
    const tareaTerminada = document.querySelector('.tareas-terminadas');

    tareasPendientes.innerHTML = "";
    tareaTerminada.innerHTML = "";

    listado.forEach(tarea => {
      if(tarea.completed) {
        tareaTerminada.innerHTML += `
        <li class="tarea">
          <div class="tareas-hechas">
          </div>
          <div class="descripcion">
            <p class="nombre-tarea">${tarea.description}</p>
            <div class="cambios-estados">
              <button class="change " id="${tarea.id}" >Tarea finalizada</button>
              <button class="borrar" id="${tarea.id}">Eliminar</button>
            </div>
          </div>
        </li>
        `;
      } else {
        tareasPendientes.innerHTML += `
        <li class="tarea">
            <div class="tareas-hechas">
            </div>
            <div class="descripcion">
              <p class="nombre">${tarea.description}</p>
              <div class="cambios-estados">
                <button class="change " id="${tarea.id}" >Tarea finalizada</button>
                <button class="borrar" id="${tarea.id}">Eliminar</button>
              </div>
            </div>
          </li>
        `;
      }
    })
  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado(tarea) {
    const cambiarEstado = document.querySelector('.cambios-estados');
    console.log(cambiarEstado);

    cambiarEstado.addEventListener('click', (event) => {
      tarea.map((tarea) => {
        console.log(tarea.id)
      })
    })



  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {
    
    

    

  };

});