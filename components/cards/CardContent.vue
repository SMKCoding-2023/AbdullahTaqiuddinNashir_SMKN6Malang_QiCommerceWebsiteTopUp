<script lang="ts" setup>
const props = defineProps({
product: {
type: Object,
default: {},
}
});

const { baseStorageUrl } = useAppConfig();
</script>

<template>
    {{ props.product.nama }}
    <!--<h1 class="font-serif text-2xl font-bold text-white shadow-xl">{{ props.product.category }}</h1>
    <div class="container">
    <div class="da relative flex-col justify-top overflow-hidden">
      <div class="group relative m-0 flex h-40 w-50 rounded-xl shadow-xl  sm:mx-auto sm:max-w-lg">
        <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
          <img
            :src="baseStorageUrl + props.product.image"
            class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
            alt=""
          />
        </div>
        <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 w-full transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
          <NuxtLink :to="`/product/content/${props.product.id}`">
            <h3 class="text-white font-bold mb-4 text-limit limit-2">{{ props.product.nama }}</h3>
          </NuxtLink>
          <h1 class="font-serif text-2xl font-bold text-white shadow-xl">{{ props.product.category }}</h1>
          <h1 class="text-sm font-light text-gray-200 shadow-xl">Rp.{{ props.product.harga }}</h1>
        </div>
      </div>
    </div>
  </div>-->
   <!--<section class="bg-white shadow-xl rounded-xl overflow-hidden">
   <div :class="`w-full h-[200px] p-5 bg-gray-300`">
      <img :src="baseStorageUrl + props.product.image" class="w-full h-full object-contain"/>
      
    </div>
    <div class="px-5 pb-5 pt-9 relative">
      <NuxtLink :to="`/product/${props.product.id}`">
        <h3 class="text-lg font-bold mb-4 text-limit limit-2">{{ props.product.name }}</h3>
      </NuxtLink>
      <div class="flex justify-between items-center">
        <span class="text-sm font-normal">{{ props.product.category }}</span>
        <span class="text-sm font-normal">${{ props.product.price }}</span>
      </div>
      <div 
      :class="`cursor-pointer absolute -top-5 right-7 w-[50px] h-[50px]
              ${props.product.isCart ? 'bg-blue-600 text-white' : 'bg-white'} 
              shadow-xl rounded-full flex justify-center items-center 
              hover:bg-blue-600 hover:text-white transition duration-300`">
        <i class="ri-shopping-cart-2-line"></i>
      </div>
    </div>


   
  </section>-->
</template>


