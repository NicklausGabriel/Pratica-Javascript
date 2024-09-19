class ShoppingBag {
    constructor() {
        this.items = [];      
        this.totalValue = 0;  
        this.totalPrice = 0; 
    }

    
    addShopping(item, value, price) {
        this.items.push(item);      
        this.totalValue += value;   
        this.totalPrice += price * value;  
    }

   
    removeShopping(item, value, price) {
        const index = this.items.indexOf(item);  
        if (index !== -1) {  
            this.items.splice(index, 1);        
            this.totalValue -= value;            
            this.totalPrice -= price * value;   
        } else {
            console.log("Item não encontrado na sacola.");
        }
    }
}

const myBag = new ShoppingBag();

myBag.addShopping("Blusa", 5, 30.00);  
myBag.addShopping("Meia", 5, 10.00);  

console.log(myBag.items);      
console.log(myBag.totalValue);   
console.log(myBag.totalPrice);   


myBag.removeShopping("Blusa", 5, 30.00);  

console.log(myBag.items);        
console.log(myBag.totalValue);   
console.log(myBag.totalPrice);   
