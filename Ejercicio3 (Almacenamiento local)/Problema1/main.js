import Formulario from "./Formulario.js";
import Empleado from "./Empleados.js";

class Main {
    constructor() {
        let formulario = new Formulario(
            document.querySelector("#formulario"),
            document.querySelector("#info")
        );

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");

            if(form.checkValidity() === true) {
                let nEmpleado = document.querySelector("#nEmpleado").value;
                let name = document.querySelector("#name").value;
                let sBirthday = document.querySelector("#birthday").value;
                sBirthday = sBirthday.split("-");

                let birthday = new Date(sBirthday[0], sBirthday[1] - 1, sBirthday[2]);

                let objEmpleado = {
                    nEmpleado: nEmpleado,
                    name: name,
                    birthday : birthday,
                    contratacion: contratacion
                };

                let empleado = new Empleado(objEmpleado);

                formulario.addEmpleado(empleado);
            }
        });
    }
}

let m = new Main();