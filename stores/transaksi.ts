import { defineStore } from "pinia";

export const transaksiStore = defineStore("transaksi", {
  state: () => ({
    products: {} as any,
    status: false,
    message: "",
    oneProduct: {} as any,
  }),
  actions: {
    async getAllTransaksi(){
      try{
        const { baseUrl, apikey, secretKey } = useAppConfig();
        const {data, error} = await useFetch("/rest/v1/transaksi", {
          baseURL: baseUrl,
          method: "GET",
          headers: {
            apikey: apikey,
            Authorization: `Bearer ${secretKey}`
          },
        })
        
        if(error.value){
          this.status = false;
          this.message = "Get Products Failed !!!";
        }else if(data){
          this.status = true;
          this.message = "Get Products successfully";
          this.products = data.value;
        }
      }catch(error){
        console.error(error);
      }
    },
    async createTransaksi(payload: any){
      try{
        const { baseUrl, apikey, secretKey } = useAppConfig();
        const {data, error} = await useFetch("/rest/v1/transaksi", {
          baseURL: baseUrl,
          method: "POST",
          headers: {
            apikey: apikey,
            Authorization: `Bearer ${secretKey}`
          },
          body: payload,
        })
        
        if(error.value){
          this.status = false;
          this.message = "Gagal Menambahkan products !!!";
        }else if(data){
          this.status = true;
          this.message = "Berhasil Menambahkan products";
          this.products = data.value;
        }
      }catch(error){
        console.error(error);
      }
    },
    async detailProduct(id: number){
      try{
        const { baseUrl, apikey, secretKey } = useAppConfig();
        const { data, error } = await useFetch(`rest/v1/transaksi?id=eq.${id}`, {
          baseURL: baseUrl,
          method: "GET",
          headers: {
            apikey: apikey,
            Authorization: `Bearer ${secretKey}`
          },
        })

        if(error.value){
          this.status = false;
          this.message = "Gagal Menambahkan products !!!";
        }else if(data){
          this.status = true;
          this.message = "Berhasil Menambahkan products";
          this.oneProduct = data.value;
        }
      }catch(error){
        console.error(error);
      }
    },
    async updateProduct(payload: any, id: number){
      try{
        const { baseUrl, apikey, secretKey } = useAppConfig();
        const {data, error} = await useFetch(`rest/v1/transaksi?id=eq.${id}`, {
          baseURL: baseUrl,
          method: "PATCH",
          headers: {
            apikey: apikey,
            Authorization: `Bearer ${secretKey}`,
            "Content-Type": "application/json"
          },
          body: payload,
        })
        
        if(error.value){
          this.status = false;
          this.message = "Update Products Failed !!!";
        }else if(data){
          this.status = true;
          this.message = "Update Products successfully";
          this.oneProduct = data.value;
        }
      }catch(error){
        console.error(error);
      }
    },
    async filterByIsCart(state: boolean){
      try{
        const { baseUrl, apikey, secretKey } = useAppConfig();
        const { data, error } = await useFetch(`rest/v1/transaksi?isCart=eq.${state}`, {
          baseURL: baseUrl,
          method: "GET",
          headers: {
            apikey: apikey,
            Authorization: `Bearer ${secretKey}`
          },
        })

        if(error.value){
          this.status = false;
          this.message = "Gagal Menambahkan products !!!";
        }else if(data){
          this.status = true;
          this.message = "Berhasil Menambahkan products";
          this.products = data.value;
        }
      }catch(error){
        console.error(error);
      }
    },
    async filterByCategory(category: string){
      try{
        const { baseUrl, apikey, secretKey } = useAppConfig();
        const { data, error } = await useFetch(`rest/v1/transaksi?category=eq.${category}`, {
          baseURL: baseUrl,
          method: "GET",
          headers: {
            apikey: apikey,
            Authorization: `Bearer ${secretKey}`
          },
        })

        if(error.value){
          this.status = false;
          this.message = "Gagal Menambahkan products dari Genre !!!";
        }else if(data){
          this.status = true;
          this.message = "Get Products By Category successfully";
          this.products = data.value;
        }
      }catch(error){
        console.error(error);
      }
    }
  }
})