<template>
  <div class="relative product cursor-pointer">
    <div class="flex flex-col justify-center items-center gap-y-1 py-8">
      <img
        v-lazy="product.image"
        :alt="product.title"
        class="w-[120px] h-[120px] object-contain"
      />
      <div class="text-center">
        <p class="font-semibold line-clamp-1">{{ product.title }}</p>
        <p class="capitalize text-sm">({{ product.category }})</p>
      </div>
      <p class="text-priText font-semibold text-sm">
        {{ product.price }}
      </p>
      <div class="flex gap-0.5">
        <span
          v-for="i in parseInt(product.rating.toFixed(0))"
          :key="i"
          class="mdi mdi-star text-yellow-300 text-xl"
        ></span>
      </div>
    </div>
    <div class="overlay">
      <span
        class="mdi mdi-eye-outline icon"
        @click="$emit('showProductDetails', product)"
      ></span>
      <span
        class="mdi mdi-shopping-outline icon"
        @click="$emit('addToCart', product)"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(["product"]);
defineEmits(["showProductDetails", "addToCart"]);
</script>

<style scoped>
:deep(.vue-star-rating-rating-text) {
  @apply hidden;
}
:deep(.vue-star-rating > span > svg) {
  @apply w-[22px] h-[22px];
}
</style>
