class Cart{
    constructor (){
        this.products=[]
        this.total=0
    }

    addProduct(product){
        this.products.push(product)
        this.total+=product.price
    }
    removeProduct(index){
        const removedproduct = this.products.splice(index,1)[0]
        this.total-=removedproduct.price
    }
}
module.exports = Cart