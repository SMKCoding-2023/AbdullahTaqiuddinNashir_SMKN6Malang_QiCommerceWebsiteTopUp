<script setup lang="ts">
import type { Products } from '~/types/products';
import { transaksiStore } from "~/stores/transaksi";

const transaksiStores = transaksiStore();
const allTransaksi = ref([]);

transaksiStores.getAllTransaksi().then(() => {
allTransaksi.value = transaksiStores.products;
});

const products = ref<Products[]>([]);
const totalPrice = computed(() => {
  return products.value
    .filter((product) => product.price !== undefined)
    .reduce((accumulator, currentValue) => accumulator + currentValue.price!, 0);
});

const removeCart = (id: number) => {
  products.value = products.value.filter((item) => item.id !== id);
  localStorage.setItem("products", JSON.stringify(products.value));
};

onMounted(() => {
  let localStorageData = localStorage.getItem("products");
  if (localStorageData) {
    products.value = JSON.parse(localStorageData);
  }
});
</script>

<template>
    <section>
      <div class="container">
        <section class="py-1 bg-blueGray-50">
<div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">Riwayat Transaksi</h3>
        </div>
        <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
        </div>
      </div>
    </div>

    <div class="block w-full overflow-x-auto">
      <table class="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Category
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Nama Product
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Server
                        </th>
           <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Varian
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          pembayaran
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          nomor WhatsApp
                        </th>
          </tr>
        </thead>

        <tbody>
          <CardsHasiltransaksi
                v-for="(item, index) in allTransaksi"
                :key="index"
                :transaksi="item"
                class="w-[calc(100%/4-18px)]"
              />
        </tbody>

      </table>
    </div>
  </div>
</div>
</section>
<!--sampe sini dulu-->
        
      </div>
    </section>
  </template>
  
