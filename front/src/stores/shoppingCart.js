import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: JSON.parse(localStorage.getItem('cart')) || [],
    }),
    getters: {
        countCartItems(state) {
            return state.items.length;
        },
        totalPrice(state){
            return state.items.reduce((total, item)=> total+item.price*item.quantity,0);
        }
       
    }, 
    actions: {
        addToCart(item) {
            let existingItemIndex = this.items.findIndex(product=>product.id);
            if (existingItemIndex !== -1){
                this.items[existingItemIndex].quantity++;
            } else {
                this.items.push({...item, quantity:1});
            }
            this.saveCartTolocalStorage();
        },
        removeItem(itemId){
            this.items= this.items.filter(item=>item.id !== itemId);
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
        }, 
        saveCartTolocalStorage(){
            localStorage.setItem('cart', JSON.stringify(this.items));
        }


    }
})