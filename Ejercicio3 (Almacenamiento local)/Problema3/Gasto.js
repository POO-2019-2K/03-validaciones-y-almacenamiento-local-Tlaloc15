export default class Gasto {
    constructor(gasto) {
        this._fecha = gasto.fecha;
        this._hora = gasto.hora;
        this._seleccionar = gasto.seleccionar;
        this._concepto = gasto.concepto;
        this._monto = gasto.monto;
    }

    get fecha() {
        return this._fecha;
    }

    get hora() {
        return this._hora;
    }

    get seleccionar() {
        return this._seleccionar;
    }

    get concepto() {
        return this._concepto;
    }

    get monto() {
        return this.monto;
    }


    getFechaAsString() {
        let date = this._fecha.getDate() + 
        "/" +
        this._months[this._fecha.getMonth()] +
        "/" +
        this.fecha.getFullYear();
        
        return date;
    }


}