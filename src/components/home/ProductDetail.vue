<template>
  <Teleport to="body">
    <Transition name="zoom">
      <div
        class="fixed top-0 left-0 w-screen h-screen bg-[rgb(0,0,0,0.1)] flex justify-center items-center z-50"
        @click.self="toggleModal(false)"
        v-if="activeModal"
      >
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl bg-white pb-8 w-11/12 md:max-w-[500px] max-h-[400px] overflow-y-scroll rounded-lg"
        >
          <div
            class="flex justify-between items-center py-4 sticky top-0 w-inherit bg-white shadow-sm px-6"
          >
            <p class="font-semibold line-clamp-1">
              {{ truncateText(item.title, 20) }}
            </p>
            <button
              class="icon mdi mdi-close edit rounded-full"
              @click="toggleModal(false)"
            ></button>
          </div>
          <div class="flex items-center text-center flex-col gap-5 pt-5 px-6">
            <img
              v-lazy="item.image"
              :alt="item.title"
              class="w-full h-[200px] object-contain"
            />
            <div class="text-center">
              <p class="font-semibold line-clamp-1">{{ item.title }}</p>
              <p class="capitalize text-sm">({{ item.category }})</p>
              <p class="pt-4">{{ item.description }}</p>
            </div>
            <div class="flex items-center gap-5">
              <div class="flex items-center gap-1">
                <span>{{ item.rating }}</span
                ><span class="mdi mdi-star text-yellow-300 text-lg"></span>
              </div>
              <p class="text-priText font-semibold text-sm">
                {{ item.price }}
              </p>
            </div>
            <button class="btn mdi mdi-cart" @click="addItemToCart(item)">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useProductStore } from "@/stores/products";
import { storeToRefs } from "pinia";
import { useTruncate } from "../../composables/useTruncate";
import { useCartStore } from "@/stores/cart";
const { truncateText } = useTruncate();
const { activeModal } = storeToRefs(useProductStore());
const { toggleModal } = useProductStore();
defineProps(["item"]);
// Adding items/products to cart
const { addProductToCart } = useCartStore();
const addItemToCart = (item: object): any => {
  addProductToCart(item);
};
</script>

<style scoped>
.zoom-enter-active,
.zoom-leave-active {
  transition: transform ease-in-out 0.3s;
}
.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0);
}
</style>
