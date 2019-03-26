import Gasto from ".Gasto.js";

export default class Formulario{
    constructor(tableList, tableInfo){
        this._tableList = tableList;
        this._tableInfo = tableInfo;
        this._caso1 = 0;
        this._caso2 = 0;
        this._caso3 = 0;
        this._caso4 = 0;
        this._gastos = [];

        this._initTables();
    }

    _initTables(){
        let gastos = JSON.parse(localStorage.getItem("gastos"));
        gastos.forEach((gasto, index) => {
            gasto.fecha = new Date(gasto.fecha);
            this._showinTable(new Gasto(gasto));
        });
    }

    _showInTable(gasto){
        let row = this._tableList.insertRow(-1);

        let cellFecha = row.insertCell(0);
        let cellTipo = row.insertCell(1);
        let cellConcepto = row.insertCell(2);
        let cellMonto = row.insertCell(3);

        cellFecha.innerHTML = gasto.getFechaAsString();
        cellTipo.innerHTML = gasto.tipo;
        cellConcepto.innerHTML = gasto.concepto;
        cellMonto.innerHTML = gasto.concepto;

        if(gasto.opc === "1"){
            cellTipo.innerHTML = gasto.tipo;
            this._tipo1++;
            this._tableInfo.rows[1].cells[1].innerHTML = this._tipo1;
            }
            if(gasto.opc === "2"){
                cellTipo.innerHTML = gasto.tipo;
            this._tipo2++;
            this._tableInfo.rows[2].cells[1].innerHTML = this._tipo2;    
            }
            if(gasto.opc === "3"){
                cellTipo.innerHTML = gasto.tipo;
            this._tipo3++;
            this._tableInfo.rows[3].cells[1].innerHTML = this._tipo3;    
            }
            if(gasto.opc === "4"){
                cellTipo.innerHTML = gasto.tipo;
            this._tipo4++;
            this._tableInfo.rows[4].cells[1].innerHTML = this._type4;    
            }

            let objGasto = {
                fecha : gasto.fecha,
                tipo : gasto.tipo,
                concepto : gasto.concepto,
                monto : gasto.monto
            };
            this._gastos.push(objGasto);
    }

    addExpense(gasto){
        this._showInTable(gasto);
        this._expenses.push(gasto);
        localStorage.setItem("expenses", JSON.stringify(this._gastos));
        console.log(localStorage.getItem("expenses"));
    }
}