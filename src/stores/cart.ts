import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
const toast = useToast();
const cart: {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: number;
  title: string;
}[] = JSON.parse(localStorage.getItem("cart") || "[]");
export const useCartStore = defineStore("cart", {
  state: () => ({ showCart: false, cart: cart ? cart : [] }),
  getters: {
    counter: (state) => state.cart.length,
    // Summing up the total price of items in the cart
    totalPrice: (state) =>
      state.cart.reduce<number>((accumulator: number, obj: any): number => {
        const price = obj.price.substring(1); // this was done because the price has already been formatted, thereby turning it into a string and prepending to it a $ sign.
        return accumulator + parseFloat(price);
      }, 0),
  },
  actions: {
    toggleCart(value: boolean): void {
      this.showCart = value;
    },
    addProductToCart(item: any): void {
      const single_product = this.cart.find((cart: any) => cart.id === item.id);
      if (single_product) {
        toast.warning("Product already exists inside the cart.");
      } else if (!single_product) {
        this.cart.push(item);
        toast.success("Product added to cart");
      } else {
        toast.info(
          "Sorry, an error occurs from our side while adding your product to the cart, we are currently working on it, Kindly try again."
        );
      }
      this.updateCart();
    },
    updateCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    removeFromCart(id: any): void {
      this.cart = this.cart.filter((item: any) => item.id !== id);
      this.updateCart();
    },
    clearCart() {
      this.cart = [];
      localStorage.removeItem("cart");
    },
  },
});
