const tarjetasClases = document.querySelectorAll("#reservas article");

tarjetasClases.forEach(function (tarjeta) {
    const boton = tarjeta.querySelector(".btn-reservar");
    const cupos = tarjeta.querySelector(".cupos");
    let reservada = false;

    boton.addEventListener("click", function () {
        let disponibles = Number(cupos.textContent);

        if (!reservada && disponibles > 0) {
            // Reservar
            disponibles--;
            reservada = true;
            boton.textContent = "Reservada ✔ (clic para cancelar)";
            boton.classList.add("reservada");
        } else if (reservada) {
            // Cancelar la reserva
            disponibles++;
            reservada = false;
            boton.textContent = "Reservar";
            boton.classList.remove("reservada");
        }

        cupos.textContent = disponibles;


        if (disponibles === 0 && !reservada) {
            boton.textContent = "Agotado";
            boton.disabled = true;
        } else {
            boton.disabled = false;
        }
    });


    if (Number(cupos.textContent) === 0) {
        boton.textContent = "Agotado";
        boton.disabled = true;
    }
});


const enlacesPlan = document.querySelectorAll("#planes a[data-plan]");
const selectPlan = document.getElementById("plan");

enlacesPlan.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        selectPlan.value = enlace.dataset.plan;
    });
});


const formulario = document.getElementById("form-inscripcion");
const mensaje = document.getElementById("mensaje-form");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); 

    const nombre = document.getElementById("nombre").value.trim();
    const textoPlan = selectPlan.options[selectPlan.selectedIndex].text;

    mensaje.textContent =
        "¡Gracias, " + nombre + "! Recibimos tu solicitud para el " +
        textoPlan + ". Te contactaremos pronto.";
    mensaje.classList.add("mensaje-exito");

    formulario.reset();
});