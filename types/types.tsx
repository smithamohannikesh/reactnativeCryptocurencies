interface currency{
    id:any,
    symbol:any,
    name:String

}
export interface userCurenciesState{
currencies:currency[]
}
export const ADD_DATA="ADD_DATA";
export interface addingCurrencyAction{
    type:typeof ADD_DATA,
    payload:currency
}





