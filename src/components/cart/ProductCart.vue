<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        class="fixed top-0 right-0 w-screen h-screen bg-[rgb(0,0,0,0.1)] flex justify-center items-center z-50"
        @click.self="toggleCart(false)"
        v-if="showCart"
      >
        <div
          class="fixed top-0 right-0 shadow-xl bg-white pb-8 w-11/12 md:max-w-[300px] h-screen overflow-y-scroll overflow-x-hidden"
        >
          <div
            class="flex justify-between items-center py-4 sticky top-0 w-inherit bg-white shadow-sm px-6"
          >
            <p class="text-xl md:text-4xl font-semibold font-commissioner">
              Cart<span class="text-priText">.</span>
            </p>
            <button
              class="icon mdi mdi-close edit rounded-full"
              @click="toggleCart(false)"
            ></button>
          </div>
          <div class="flex flex-col gap-3 p-5" v-if="cart.length">
            <div v-for="item in cart" :key="item.id">
              <div
                class="bg-white shadow-sm rounded-sm flex justify-between items-center p-2"
              >
                <div class="flex items-center gap-2">
                  <img
                    v-lazy="item.image"
                    alt="image"
                    class="w-[40px] h-[40px] object-contain"
                  />
                  <div class="flex flex-col gap-0.5">
                    <p class="font-semibold line-clamp-1 text-sm">
                      {{ truncateText(item.title, 15) }}
                    </p>
                    <p class="capitalize text-xs">{{ item.category }}</p>
                    <p class="font-semibold text-xs text-priText">
                      {{ item.price }}
                    </p>
                  </div>
                </div>
                <span
                  class="mdi mdi-trash-can text-red-500 cursor-pointer"
                  @click="removeFromCart(item.id)"
                ></span>
              </div>
            </div>
            <hr />
            <div class="flex justify-between">
              <p class="font-semibold">Total</p>
              <p class="font-medium">{{ formatCurrency(totalPrice) }}</p>
            </div>
          </div>
          <div v-else class="text-center pt-12">
            <span class="mdi mdi-cart-off text-3xl"></span>
            <p class="mt-4 text-xl">Oops!, your cart is empty.</p>
          </div>
        </div>
      </div>
    </Transition></Teleport
  >
</template>

<script setup lang="ts">
import { useFormatter } from "@/composables/useFormatter";
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";
import { useTruncate } from "../../composables/useTruncate";
const { truncateText } = useTruncate();
const { formatCurrency } = useFormatter();
const { showCart, cart, totalPrice } = storeToRefs(useCartStore());
const { toggleCart, removeFromCart } = useCartStore();
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity ease-in-out 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
