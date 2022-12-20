import axios from "axios";
import { defineStore } from "pinia";
import { useFormatter } from "@/composables/useFormatter";
import { usePercentageIncrease } from "@/composables/usePercentageIncrease";
const { increasePercentage } = usePercentageIncrease();
const { formatCurrency } = useFormatter();
export const useProductStore = defineStore("product", {
  state: () => ({ products: [], product: "", activeModal: false }),
  getters: {
    newProducts: (state) => {
      return state.products.map((product: any) => {
        const newProduct = {
          id: product.id,
          title: product.title,
          rating: product.rating.rate,
          price: formatCurrency(increasePercentage(product.price, 2.2)), // Formatted currency and added percentage increase
          category: product.category,
          image: product.image,
          description: product.description,
        };
        return newProduct;
      });
    },
  },
  actions: {
    async getProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        this.products = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    toggleModal(value: boolean): void {
      this.activeModal = value;
    },
  },
});
