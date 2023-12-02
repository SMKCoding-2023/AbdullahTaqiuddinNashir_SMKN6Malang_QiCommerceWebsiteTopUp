<script setup lang="ts">
const props = defineProps({
  product: {
    type: Object,
    default: {},
  }
})
const { baseStorageUrl } = useAppConfig();
const useProductsStore = productsStore();

const addCart = async () => {
  const payload = props.product;
  payload.isCart = !payload.isCart;
  await useProductsStore.updateProduct(payload, payload.id);
}

const productStore = productsStore();
const allProducts = ref([]);

productStore.getAllProducts().then(() => {
allProducts.value = productStore.products;
});
</script>

<template>
  <section class="py-10">
    <!--<div class="container">-->
      <NuxtLink to="/product" class="bg-white border border-slate-300 w-max flex items-center gap-1 py-2 px-5 rounded-full mb-7 cursor-pointer">
        <i class="ri-arrow-left-s-line text-base font-medium"></i>
        <span class="text-base font-medium">Kembali</span>
      </NuxtLink>
      <div class="flex items-center">
        <div class="w-1/2 bg-gray-300 mr-5 rounded-3xl flex justify-center items-center p-5 h-[500px]">
          <img :src="baseStorageUrl + props.product.image" class="w-full h-full object-contain"/>
        </div>
        <div class="w-1/2 pl-5">
          <p class="text-xl font-light mb-3">{{ props.product.category }}</p>
          <h1 class="text-4xl font-bold mb-3">{{ props.product.name }}</h1>
          <h3 class="text-4xl font-light mb-3">${{ props.product.price }}</h3>
          <p class="mb-10">{{ props.product.description }}</p>
          <div class="flex flex-col gap-4">
            <div class="w-full flex items-center gap-2 bg-blue-600 text-white py-3 justify-center rounded-lg cursor-pointer hover:bg-blue-600/80 transition duration-300 relative">
              <i class="ri-shopping-cart-2-line"></i>
              <span>Add to Cart</span>
              
            </div>
            <CardsCardProduct
                v-for="(item, index) in allProducts"
                :key="index"
                :product="item"
                class="w-[calc(100%/4-18px)]"
              />
          </div>
        </div>
      </div>
    <!--</div>-->
  </section>
</template>
