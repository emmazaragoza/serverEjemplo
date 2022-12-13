// por el momento no tenemos base de datos conectada, sino aca van la inportacion de los modelos que se necesitarian.

const productos = [
    {id:1,title:"arroz",description:"dosHermano",price:300,thumbnail:"N/A",code:"3123",stock:15},{id:2,title:"leche",description:"La Serenisima",price:380,thumbnail:"N/A",code:"4456",stock:10},
    {id:3,title:"harina",description:"000",price:160,thumbnail:"N/A",code:"7869",stock:15}
]

export const getProducts = () => {
    const prod = productos
    return prod
} 