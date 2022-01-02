class CalcController{

    constructor(){

        this._displayCalcEl = document.querySelector("#display");
        
    }
    
    initialize(){
        
        this._displayCalcEl.innerHTML = "4567";
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }
}