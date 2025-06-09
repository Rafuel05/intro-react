let produtos = [
    {nome: 'camisa', price: 13.88, category: 'roupas'},
    {nome: 'cueca', price: 2.22, category: 'roupas'},
    {nome: 'ampola', price: 1.88, category: 'farmaco'},
    {nome: 'remedio', price: 132.00, category: 'farmaco'} ,
]

console.log("Produtos pre map: ")
console.log(produtos)

produtos.map((product)=>{
    if (product.category === 'farmaco'){
        product.onSale = false
    }else{
        product.onSale = true
    }
})
console.log("Produtos pre filtro: ")
console.log(produtos)

produtos = produtos.filter((produtos=> produtos.nome === 'ampola'))

console.log(produtos)