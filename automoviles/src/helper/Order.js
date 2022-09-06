export default function Ordenar(order){
    if(order === 'menMay')return (a,b)=>{
        if(a.price > b.price){return 1}
        if(b.price > a.price){return -1}
        return 0
    }
    if(order === 'mayMen')return (a,b)=>{
        if(a.price > b.price){return -1}
        if(b.price > a.price){return 1}
        return 0
    }
    if(order === 'nuevo')return (a,b)=>{
        if(a.year > b.year){return -1}
        if(b.year > a.year){return 1}
        return 0
    }
    if(order === 'viejo')return (a,b)=>{
        if(a.year > b.year){return 1}
        if(b.year > a.year){return -1}
        return 0
    }
}