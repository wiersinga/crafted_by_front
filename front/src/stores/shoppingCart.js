import { defineStore } from 'pinia';

export const useCartStore = defineStore('cartStore', {
    state: () => ({
        items: JSON.parse(localStorage.getItem('items')) || [],
    }),
    getters: {
        countCartItems(state) {
            return state.items.length;
        },
        totalPrice(state){
                return state.items.reduce((accumulator, current) => {
                  accumulator += current.price
                  return accumulator
                }, 0);
              
        }      
    }, 
    actions: {
        saveCartTolocalStorage(){
            localStorage.setItem('items', JSON.stringify(this.items));
            console.log('saved to local Storage')
        },
        addToCart(item) {
        //    let existingItemIndex = this.items.findIndex(product => product && product.id === item.id);
        //     if (existingItemIndex !== -1){
        //        this.items[existingItemIndex].quantity++;
        //     } else {
        //        this.items.push({...item, quantity:1});
        //     }
        
            this.items.push(item);
            console.log(this.items);
            this.saveCartTolocalStorage();
        
        },
        removeItem(item){
            const index = this.items.indexOf(item);
            this.items.splice(index, 1);
            this.saveCartTolocalStorage();
        }, 
        updateItemQuantity(itemId, newQuantity){
            const itemToUpdate = this.items.find(item=>item.id === itemId);
            if (itemToUpdate.quantity) {
                if (itemToUpdate){
                    itemToUpdate.quantity = newQuantity;
                    this.saveCartTolocalStorage();
                }
            }
        }, 
        clearCart(){
            this.items= [];
            this.saveCartTolocalStorage();
        },    
    

    }
})