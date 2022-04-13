window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
   const inputEmail = document.querySelector('#inputEmail');
   const inputPassword = document.querySelector("#inputPassword");
   const form = document.querySelector('form');
    
   const urlBase = 'https://ctd-todo-api.herokuapp.com/v1'


    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
       event.preventDefault();

       const usuario = {
            email: inputEmail.value,
            password: inputPassword.value
        }

        const settings = {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        realizarLogin(settings);

    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(settings) {
       fetch(`${urlBase}/users/login`, settings)
        .then(res => res.json())
        .then(data => {
            if(data.jwt){
                localStorage.setItem('jwt', JSON.stringify(data.jwt));

                location.replace('./mis-tareas.html');
            }
        })
    };


});