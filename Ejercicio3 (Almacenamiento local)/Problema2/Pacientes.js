export default class Empleado {
    constructor(paciente) {
        this._fConsulta = paciente.fConsulta;
        this._hora = paciente.hora;
        this._name = paciente.name;
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

    get fConsulta() {
        return this._fConsulta;
    }

    get hora() {
        return this._hora;
    }

    get name() {
        return this.name;
    }


    getConsultaAsString() {
        let date = this._fConsulta.getDate() + 
        "/" +
        this._months[this._fConsulta.getMonth()] +
        "/" +
        this.fConsulta.getFullYear();
        
        return date;
    }


    getDate() {
        let oneDay = 24 * 60 * 60 *1000;
        let differenceMs = new Date() - this._fConsulta;
        let dias = Math.trunc(differenceMs / oneDay);

        return dias;
    }

}