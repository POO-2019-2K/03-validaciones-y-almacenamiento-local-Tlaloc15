export default class Empleado {
    constructor(empleado) {
        this._nEmpleado = empleado.nEmpleado;
        this._name = empleado.name;
        this._birthday = empleado.birthday;
        this._contratacion = empleado.contratacion;
        this._months = [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic"
          ];
    }

    get nEmpleado() {
        return this._nEmpleado;
    }

    get name() {
        return this._name;
    }

    get birthday() {
        return this.birthday;
    }

    get contratacion() {
        return this.contratacion;
    }

    getBirthdayAsString() {
        let date = this._birthday.getDate() + 
        "/" +
        this._months[this._birthday.getMonth()] +
        "/" +
        this.birthday.getFullYear();
        
        return date;
    }

    getContratacionAsString() {
        let date = this._contratacion.getDate() + 
        "/" +
        this._months[this._contratacion.getMonth()] +
        "/" +
        this.contratacion.getFullYear();
        
        return date;
    }

    getAge() {
        let oneDay = 24 * 60 * 60 *1000;
        let oneYear = oneDay * 365;
        let differenceMs = new Date() - this._birthday;
        let age = Math.trunc(differenceMs / oneYear);

        return age;
    }

    getAntiquity() {
        let oneDay = 24 * 60 * 60 *1000;
        let oneYear = oneDay * 365;
        let differenceMs = new Date() - this._contratacion;
        let antiquity = Math.trunc(differenceMs / oneYear);

        return antiquity;
    }
}