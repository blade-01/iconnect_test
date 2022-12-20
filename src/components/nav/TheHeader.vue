<template>
  <div
    class="bg-white flex items-center fixed w-full h-[78px] top-0 left-0 z-50 shadow-sm"
  >
    <div class="container">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl md:text-4xl font-semibold font-commissioner">
          Brand<span class="text-priText">.</span>
        </h1>
        <span
          class="mdi mdi-cart-outline text-xl relative mx-2 my-2 cursor-pointer"
          @click="toggleCart(true)"
        >
          <span
            class="counter rounded-full bg-red-400 h-4 w-4 text-[10px] font-bold text-white flex justify-center items-center absolute -top-1 -right-1"
            >{{ counter }}</span
          >
        </span>
      </div>
    </div>
  </div>
  <ProductCart />
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";
import ProductCart from "../cart/ProductCart.vue";
const { counter } = storeToRefs(useCartStore());
const { toggleCart } = useCartStore();
</script>

<style scoped></style>
