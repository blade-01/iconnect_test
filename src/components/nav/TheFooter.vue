<template>
  <footer class="py-16 bg-primary">
    <div class="container">
      <div class="md:grid grid-cols-3 lg:flex justify-between">
        <h3 class="text-3xl md:text-4xl font-semibold font-commissioner">
          Brand<span class="text-priText">.</span>
        </h3>
        <ul class="mb-8 md:mb-0">
          <div class="text-priText font-semibold mb-4">Company</div>
          <li v-for="route in routes" :key="route" class="mb-4">
            <a href="#" class="capitalize">{{ route }}</a>
          </li>
        </ul>
        <ul class="mb-8 md:mb-0">
          <div class="text-priText font-semibold mb-4">Resources</div>
          <li v-for="resource in resources" :key="resource" class="mb-4">
            <a href="#" class="capitalize">{{ resource }}</a>
          </li>
        </ul>
        <ul>
          <div class="text-priText font-semibold mb-4">Contact Us</div>
          <li class="flex items-center gap-1 mb-3">
            <a
              v-for="(social, index) in socials"
              :key="index"
              :href="social.link"
              class="p-3 bg-secondary rounded-xl h-8 w-8 text-base bg-priText text-white flex justify-center items-center transition-all ease-in-out duration-500 hover:scale-[0.8] hover:border-primary border border-white"
              :class="social.icon"
              target="_blank"
            ></a>
          </li>
          <li class="mb-3">
            <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const contact: {
  email: string;
} = {
  email: "admin@iconnect.io",
};

const socials: {
  icon: string;
  link: string;
}[] = [
  {
    icon: "mdi mdi-facebook-messenger",
    link: "https://facebook.com/blade_web",
  },
  {
    icon: "mdi mdi-instagram",
    link: "https://instagram.com/blade_web",
  },
  {
    icon: "mdi mdi-twitter",
    link: "https://twitter.com/blade_vue",
  },
];

const routes: string[] = ["Home", "About", "contact"];

const resources: string[] = ["Privacy Policy", "Terms of Use", "FAQ"];
</script>

<style scoped></style>
