<template>
  <div class="flex routes py-8 lg:p-0 h-[calc(100vh-78px)] bg-primary">
    <div class="container">
      <div class="flex justify-between items-center flex-col md:flex-row">
        <div class="mb-8 md:mb-0">
          <h1
            class="font-bold text-[54px] lg:text-[63px] 2xl:text-7xl leading-[60px] sm:max-w-2xl xl:w-[35rem] font-commissioner text-priText"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            New Arrivals
          </h1>
          <p
            class="max-w-md leading-[25px] priText text-base my-4"
            data-aos="fade"
            data-aos-delay="500"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            placeat earum impedit neque rerum beatae corrupti, mollitia odio.
          </p>
          <a
            href="#collections"
            class="flex items-center gap-2 text-priText font-medium transition-all ease-in-out duration-200 hover:scale-95"
            ><span>View Collection</span>
            <span class="mdi mdi-arrow-right"></span
          ></a>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-anchor-placement="top-center"
        >
          <figure>
            <img
              src="/img/illus-01.png"
              alt="illustration_01"
              class="w-full h-full drop-shadow-md lg:w-[350px]"
            />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
