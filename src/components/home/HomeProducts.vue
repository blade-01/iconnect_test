<template>
  <div class="py-16 clear-pattern scroll-mt-16" id="collections">
    <div class="container">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-commissioner font-semibold"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          Our collections
        </h2>
        <p
          class="max-w-[600px] leading-[25px] priText text-base my-4 mx-auto"
          data-aos="fade"
          data-aos-delay="500"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          placeat earum impedit neque rerum beatae corrupti, mollitia odio.
        </p>
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <ProductList
          v-for="product in filteredList"
          :key="product.id"
          :product="product"
          @show-product-details="showDetails"
          @add-to-cart="addItemToCart"
        />
      </div>
      <div class="flex justify-center mt-12">
        <button
          @click="showAllProducts"
          class="btn bg-white border border-priText text-black rounded-none"
        >
          View All Products
        </button>
      </div>
    </div>
  </div>
  <ProductDetail :item="item" />
</template>

<script setup lang="ts">
import ProductDetail from "./ProductDetail.vue";
import ProductList from "./ProductList.vue";
import { onMounted, computed, ref } from "vue";
import { useProductStore } from "@/stores/products";
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";
const { getProducts } = useProductStore();
const { newProducts } = storeToRefs(useProductStore());

// Open product details modal
const { toggleModal } = useProductStore();
// Adding items/products to cart
const { addProductToCart } = useCartStore();
const addItemToCart = (item: object): any => {
  addProductToCart(item);
};
const item = ref<object>({});
const showDetails = (product: any): void => {
  toggleModal(true);
  item.value = product;
};
// Filter Products
const limit = ref<number>(8);
const filteredList = computed(() => newProducts.value.slice(0, limit.value));
// Show All Products
const showAllProducts = () => {
  limit.value += newProducts.value.length;
};
// Get products on page load
onMounted(() => {
  getProducts();
});
</script>

<style scoped></style>
