export const ORDER="ORDER"
export const LOAD_AUTOS = "LOAD_AUTOS"
export const FILTER = "FILTER"

export function order (payload){
    return {
        type: 'ORDER',
        payload
    }
}
export function filterAuto (payload){
    return {
        type: 'FILTER',
        payload
    }
}
export function loadAutos (payload){
    return {
        type: 'LOAD_AUTOS',
        payload
    }
}