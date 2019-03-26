import Paciente from "./Pacientes.js";

export default class Consulta {
    constructor(tableForm, tableInfo) {
        this._tableForm = tableForm;
        this._tableInfo = tableInfo;
        this._numCitas = 0;
        this._empleados = [];

        this._initTables();
    }

    _initTables() {
        let pacientes = JSON.parse(localStorage.getItem("pacientes"));

        pacientes.forEach( (paciente, index) => {
            pacientes.fConsulta = new Date(paciente.fConsulta);
            this._ShowInTable(new Paciente(paciente));
        });
    }

    _ShowInTable(paciente) {
        let row = this._tableForm.insertRow(-1);

        let cellfConsulta = row.inserCell(0);
        let cellHora = row.inserCell(1);
        let cellName = row.inserCell(2);

        cellfConsulta.innertHTML = paciente.getConsultaAsString();
        cellHora.innertHTML = paciente.hora;
        cellName.innertHTML = paciente.name;
        cellAge.innertHTML = empleado.getDate();

        this._numCitas++;
        this._sumCitas += paciente.getDate();

        this._tableInfo.row[0].cells[1].innertHTML = this._numCitas;


        let objPaciente = {
            fConsulta : paciente.fConsulta,
            hora : paciente.name,
            name : paciente.name,
        };

        this._pacientes.push(objPaciente);
    }

    addEmpleado(paciente) {
        this._ShowInTable(paciente);
        this._pacientes.push(paciente);
        localStorage.setItem("pacientes", JSON.stringify(this._pacientes));
        console.log(localStorage.getItem("pacientes"));
    }
}