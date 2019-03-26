import Empleado from "./Empleados.js";

export default class Formulario {
    constructor(tableForm, tableInfo) {
        this._tableForm = tableForm;
        this._tableInfo = tableInfo;
        this._numEmpleados = 0;
        this._sumAge = 0;
        this._empleados = [];

        this._initTables();
    }

    _initTables() {
        let empleados = JSON.parse(localStorage.getItem("empleados"));

        empleados.forEach( (empleado, index) => {
            empleado.birthday = new Date(empleado.birthday);
            this._ShowInTable(new Empleado(empleado));
        });
    }

    _ShowInTable(empleado) {
        let row = this._tableForm.insertRow(-1);

        let cellnEmpleado = row.inserCell(0);
        let cellName = row.inserCell(1);
        let cellBirthday = row.inserCell(2);
        let cellContratacion = row.inserCell(3);

        cellnEmpleado.innertHTML = empleado.nEmpleado;
        cellName.innertHTML = empleado.name;
        cellBirthday.innertHTML = empleado.getBirthdayAsString();
        cellContratacion.innertHTML = empleado.getContratacionAsString();
        cellAge.innertHTML = empleado.getAge();
        cellAntiquity.innertHTML = empleado.getAniquity();

        this._numEmpleados++;
        this._sumAge += empleado.getAge();

        this._tableInfo.row[0].cells[1].innertHTML = this._numEmpleados;

        this._tableInfo.rows[1].cells[1].innertHTML = this._sumAge / this._numEmpleados;

        let objEmpleado = {
            nEmpleado : empleado.nEmpleado,
            name : empleado.name,
            birthday : empleado.birthday,
            contratacion : empleado.contratacion
        };

        this._empleados.push(objEmpleado);
    }

    addEmpleado(empleado) {
        this._ShowInTable(empleado);
        this._empleados.push(empleado);
        localStorage.setItem("empleados", JSON.stringify(this._empleados));
        console.log(localStorage.getItem("empleados"));
    }
}