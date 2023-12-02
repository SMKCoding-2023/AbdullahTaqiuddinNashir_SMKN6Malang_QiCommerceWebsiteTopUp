<script lang="ts" setup>
import { productsStore } from "~/stores/products";
import MySlider from '~/components/swiper/SwiperContainer.vue';

const productStore = productsStore();
const allProducts = ref([]);

productStore.getAllProducts().then(() => {
allProducts.value = productStore.products;
});
const selectedCategory = ref("");
</script>

<template>
                
                <!-- component --><div class="container rounded-xl">
                  <center><img src="~/assets/banner.png" class="bg-pink-950 border-black flex justify-center items-center px-3 rounded-lg" style="margin: 50px; margin-left: 35px;height: 500px; width: auto;"  /></center>
                </div>
        <div style="margin-left: 13%;">
          <h1 class="block font-sans text-5xl font-semibold leading-tight tracking-normal text-inherit-white antialiased" style="color: white;">Qi Commerce</h1>
        <h2 style="color: white;">website penyedia Produk terbaik</h2>
        </div>  
        
        <div class="mb-6 flex justify-end gap-6 ">
            <NuxtLink to="/category/create" class="bg-red-500 text-white flex justify-center items-center px-3 rounded-lg">
              Buat Kategori
            </NuxtLink>
            <NuxtLink to="/product/create" class="bg-red-500 text-white flex justify-center items-center px-3 rounded-lg">
              Buat Product
            </NuxtLink>
            <!----><Dropdown @selected-category="selectedCategory = $event" />
          </div>
        

          <h1 class="block font-sans text-5xl font-semibold leading-tight tracking-normal text-inherit-white antialiased" style="color: white; margin-left: 3%;">Content</h1>
      <div class="container">
        <div class="py-10 px-10">
          
          <div class="flex gap-6 flex-wrap mx-auto">
            <template v-if="allProducts.length > 0">
              <CardsCardProduct
                v-for="(item, index) in allProducts"
                :key="index"
                :product="item"
                class="w-[calc(100%/4-18px)]"
              />


            </template>
            <template v-else>
              <p class="text-center text-lg font-light w-full">No products in this category.</p>
            </template>
          </div>
        </div>
      </div>
</template>