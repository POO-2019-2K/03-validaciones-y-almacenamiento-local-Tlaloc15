import Consulta from "./Consulta";
import Paciente from "./Pacientes";

class Main {
    constructor() {
        let consulta = new Consulta(
            document.querySelector("#formulario"),
            document.querySelector("#info")
        );

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");

            if(form.checkValidity() === true) {
                let fConsulta = document.querySelector("#fConsulta").value;
                let hora = document.querySelector("#hora").value;
                let name = document.querySelector("#name").value;
                sfConsulta = sdfConsulta.split("-");

                let fConsulta = new Date(sfConsulta[0], sfConsulta[1] - 1, sfConsulta[2]);

                let objPaciente = {
                    fConsulta: fConsulta,
                    hora: hora,
                    name: name,
                };

                let paciente = new Paciente(objPaciente);

                consulta.addEmpleado(paciente);
            }
        });
    }
}

let m = new Main();