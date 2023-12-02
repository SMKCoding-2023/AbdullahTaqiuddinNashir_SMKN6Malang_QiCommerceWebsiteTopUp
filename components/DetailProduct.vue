<script setup lang="ts">
import { transaksiStore } from "~/stores/transaksi";
import { productsStore } from "~/stores/products";
import { ref } from 'vue';

const transaksiStores = transaksiStore();
const productStore = productsStore();
const allProducts = ref([]);

const isSuccess = ref(false);
const isShowAlert = ref(false);
const message = ref("");
const router = useRouter();
const isLoading = ref(false);

//form
const selectedServer = ref('');
const selectVarian = ref('');
const selectPembayaran = ref('');
const kodePromo = ref({
  promo: '',
});
const n_wa = ref({
  no_wa: '',
});
//create ptransaksi
const createTransaksi = () => {
    transaksiStores.createTransaksi({
      name: props.product.name,
      description: props.product.description,
      category: props.product.category,
      server: selectedServer.value,
      stok:props.product.stok-1,
      varian: selectVarian.value,
      pembayaran: selectPembayaran.value,
      nomor_wa:n_wa.value.no_wa,
      kodePromo:kodePromo.value.promo,
    });


    isShowAlert.value = true;
    setTimeout(() => {
      isShowAlert.value = false;
    }, 3000);
  };

const props = defineProps({
  product: {
    type: Object,
    default: {},
  }
})
const { baseStorageUrl } = useAppConfig();




productStore.getAllProducts().then(() => {
  allProducts.value = productStore.products;
});
</script>

<template>
  <div v-if="isShowAlert" :class="`p-4 mb-4 text-sm rounded-lg ${isSuccess ? 'bg-green-100 text-green-800' : 'text-red-800 bg-red-100'}`" role="alert">
        {{ message }}
      </div>
  <form @submit.prevent="createTransaksi">
  <section class="py-10">
    <!--<div class="container">-->
    <NuxtLink to="/"
      class="bg-white border border-slate-300 w-max flex items-center gap-1 py-2 px-5 rounded-full mb-7 cursor-pointer">
      <i class="ri-arrow-left-s-line text-base font-medium"></i>
      <span class="text-base font-medium">Kembali</span>
    </NuxtLink>


    <div class="flex items-center">
      <div class="w-1/2  mr-5 rounded-3xl flex justify-left items-center p-5 h-[500px]">
        <div className="grid grid-cols-1 grid-rows-2 gap-1">
          <div className="col-start-1 row-start-2">
            <h1 class="text-4xl font-bold mb-3 text-center text-white" style="text-align: center; transform: translateY(-300px);">{{ props.product.name }}</h1>
            <h1 class="text-1xl text-center text-white" style="text-align: justify; transform: translateY(-300px);">{{ props.product.description }}</h1>
          </div>
          <div className="col-start-1 row-start-1">
            <img class="relative inline-block h-80 w-80 rounded-2xl object-cover object-center"
              style="margin-bottom: 350px; transform: translateX(130px);" alt="Image placeholder" :src="baseStorageUrl + props.product.image" />
          </div>
        </div>
      </div>


      <div class="w-1/2 pl-5">
        
        <div class="bg-purple-700 shadow-lg rounded-lg p-6 space-y-4" style="margin-right: 100px;">
          <p class="text-xl font-light mb-3">
          <h5 class="text-white">
            <div class="bg-white shadow-lg rounded-lg p-4 w-12 h-12" style="margin-right: 100px;">
              <h5 class="text-black">1</h5>
            </div> Lengkapi Data
          </h5>
          <div class="card">
            <div class="card-body">
              <div class="flex space-x-4">
                <input type="number" class="border border-gray-300 rounded-md p-2" id="id" placeholder="User ID" name="id"
                  required="true">
                  <select class="border border-gray-300 rounded-md p-2" id="other_id" name="other_id" required v-model="selectedServer">
              <option selected="false" disabled>Pilih Server</option>
                  <option value="America">America</option>
                  <option value="Europe">Europe</option>
                  <option value="Asia">Asia</option>
                  <option value="TW_HK_MO">TW_HK_MO</option>
                </select>
              </div>
            </div>
          </div>
          </p>
        </div>

        <div class="bg-purple-700 shadow-lg rounded-lg p-6 space-y-4" style="margin-right: 100px; margin-top: 20px;">
          <p class="text-xl  mb-3">
          <h5 class="text-white">
            <div class="bg-white shadow-lg rounded-lg p-4 w-12 h-12" style="margin-right: 100px;">
              <h5 class="text-black">2</h5>
            </div> pilih nominal
          </h5>
          <div class="card">
            <div class="card-body">
              <div class="flex space-x-4">
                <!--content dari sini-->
          <ul class="grid w-full gap-2 md:grid-cols-3" style="margin-top: 20px;">
            <li>
              <input type="radio" id="product-1" name="varian" value="varian 1" v-model="selectVarian" class="hidden peer" required>
              <label for="product-1"
                class="inline-flex items-center justify-between w-full p-1 text-lg text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-red-500 peer-checked:border-red-600 peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="block">
                  <div class="w-full">
                    {{ props.product.varian1 }}
                  </div>
                </div>

              </label>
            </li>
            <li>
              <input type="radio" id="product-2" name="varian" value="varian 2" v-model="selectVarian" class="hidden peer" required>
              <label for="product-2"
                class="inline-flex items-center justify-between w-full p-1 text-lg text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-red-500 peer-checked:border-red-600 peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="block">
                  <div class="w-full">
                    {{ props.product.varian2 }}
                  </div>
                </div>

              </label>
            </li>
            <li>
              <input type="radio" id="product-3" name="varian" value="varian 3" v-model="selectVarian" class="hidden peer" required>
              <label for="product-3"
                class="inline-flex items-center justify-between w-full p-1 text-lg text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-red-500 peer-checked:border-red-600 peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="block">
                  <div class="w-full">
                    {{ props.product.varian3 }}
                  </div>
                </div>

              </label>
            </li>
            <li>
              <input type="radio" id="product-4" name="varian" value="varian 4" v-model="selectVarian" class="hidden peer" required>
              <label for="product-4"
                class="inline-flex items-center justify-between w-full p-1 text-lg text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-red-500 peer-checked:border-red-600 peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="block">
                  <div class="w-full">
                    {{ props.product.varian4 }}
                  </div>
                </div>

              </label>
            </li>
            <li>
              <input type="radio" id="product-5" name="varian" value="varian 5" v-model="selectVarian" class="hidden peer" required>
              <label for="product-5"
                class="inline-flex items-center justify-between w-full p-1 text-lg text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-red-500 peer-checked:border-red-600 peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="block">
                  <div class="w-full">
                    {{ props.product.varian5 }}
                  </div>
                </div>

              </label>
            </li>
            <li>
              <input type="radio" id="product-6" name="varian" value="varian 6" v-model="selectVarian" class="hidden peer" required>
              <label for="product-6"
                class="inline-flex items-center justify-between w-full p-1 text-lg text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-red-500 peer-checked:border-red-600 peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="block">
                  <div class="w-full">
                    {{ props.product.varian6 }}
                  </div>
                </div>
              </label>
            </li>
          </ul>
          <!--sampai sini-->
              </div>
            </div>
          </div>
          </p>
        </div>
        
        <div class="bg-purple-700 shadow-lg rounded-lg p-6 space-y-4" style="margin-right: 100px; margin-top: 20px;">
          <p class="text-xl font-light mb-3">
          <h5 class="text-white">
            <div class="bg-white shadow-lg rounded-lg p-4 w-12 h-12" style="margin-right: 100px;">
              <h5 class="text-black">3</h5>
            </div> Pilih Pembayaran
          </h5>
          <div class="card">
            <div class="card-body">
              <div class="flex space-x-4">
                <!--content disini-->
                <ul class="grid w-full gap-2 md:grid-cols-3" style="margin-top: 20px;">
                  <li>
                    <input type="radio" id="bank-1" name="pembayaran" value="Gopay" v-model="selectPembayaran" class="hidden peer" required>
                    <label for="bank-1"
                      class="inline-flex items-center justify-between w-full p-1 text-lg text-gray-500 bg-white shadow-lg border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-red-500 peer-checked:bg-red-500 peer-checked:border-red-600 peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div class="block">
                        <div class="w-full">
                          <img src="~/assets/gopay-inv.png" style="width: 150px; height:35px;" />
                        </div>
                      </div>

                    </label>
                  </li>
                  <li>
                    <input type="radio" id="bank-2" name="pembayaran" value="OVO"  v-model="selectPembayaran" class="hidden peer" required>
                    <label for="bank-2"
                      class="inline-flex items-center justify-between w-full p-1 text-lg text-gray-500 bg-white shadow-lg border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-red-500 peer-checked:bg-red-500 peer-checked:border-red-600 peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div class="block">
                        <div class="w-full">
                          <img src="~/assets/ovo.png" style="width: 150px; height:35px;" />
                        </div>
                      </div>

                    </label>
                  </li>
                  <li>
                    <input type="radio" id="bank-3" name="pembayaran" value="DANA"  v-model="selectPembayaran" class="hidden peer" required>
                    <label for="bank-3"
                      class="inline-flex items-center justify-between w-full p-1 text-lg text-gray-500 bg-white shadow-lg border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-red-500 peer-checked:bg-red-500 peer-checked:border-red-600 peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div class="block">
                        <div class="w-full">
                          <img src="~/assets/dana.png" style="width: 150px; height:35px;" />
                        </div>
                      </div>
                    </label>
                  </li>
                </ul>
                <!--sampai disini-->
              </div>
            </div>
          </div>
          </p>
        </div>

        <div class="bg-purple-700 shadow-lg rounded-lg p-6 space-y-4" style="margin-right: 100px; margin-top: 20px;">
          <p class="text-xl font-light mb-3">
          <h5 class="text-white">
            <div class="bg-white shadow-lg rounded-lg p-4 w-12 h-12" style="margin-right: 100px;">
              <h5 class="text-black">4</h5>
            </div> Kode Promo
          </h5>
          <div class="card">
            <div class="card-body">
              <div class="flex space-x-4">
                <!--content disini-->
                <div class="mb-6">
                <label for="promo" class="block mb-2 text-sm font-medium text-gray-900">Masukkan Kode Promo</label>
                <input
                  type="text"
                  id="promo"
                  v-model="kodePromo.promo"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Masukan Kode Promo *Jika ada"
                  style="width: 500px;"
                  required
                />
              </div>
                <!--sampai sini-->
              </div>
            </div>
          </div>
          </p>
        </div>
        <div class="bg-purple-700 shadow-lg rounded-lg p-6 space-y-4" style="margin-right: 100px; margin-top: 20px;">
          <p class="text-xl font-light mb-3">
          <h5 class="text-white">
            <div class="bg-white shadow-lg rounded-lg p-4 w-12 h-12" style="margin-right: 100px;">
              <h5 class="text-black">5</h5>
            </div> Beli
          </h5>
          <div class="card">
            <div class="card-body">
              <div class="flex space-x-4">
                <!--content disini-->
                <div class="mb-6">
                <label for="no_wa" class="block mb-2 text-sm font-medium text-gray-900">Masukkan Nomor WhatsApp</label>
                <input
                  type="text"
                  id="no_wa"
                  v-model="n_wa.no_wa"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="62898-XXXX-XXXX"
                  style="width: 500px;"
                  required
                />
              </div>
                <!--sampai sini-->
              </div>
            </div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl" type="submit">
                Beli Sekarang!!
              </button>
          </div>
          </p>
        </div>

      </div>
    </div>
    <!--</div>-->
  </section>
</form>
</template>
