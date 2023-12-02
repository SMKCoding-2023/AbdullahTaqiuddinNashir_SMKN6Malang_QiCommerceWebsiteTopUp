import { defineStore } from "pinia";

export const contentStore = defineStore("content", {
  state: () => ({
    content: {} as any,
    status: false,
    message: "",
    oneProduct: {} as any,
  }),
  actions: {
    async getAllcontent(){
      try{
        const { baseUrl, apikey, secretKey } = useAppConfig();
        const {data, error} = await useFetch("/rest/v1/content", {
          baseURL: baseUrl,
          method: "GET",
          headers: {
            apikey: apikey,
            Authorization: `Bearer ${secretKey}`
          },
        })
        
        if(error.value){
          this.status = false;
          this.message = "Get content Failed !!!";
        }else if(data){
          this.status = true;
          this.message = "Get content successfully";
          this.content = data.value;
        }
      }catch(error){
        console.error(error);
      }
    },
    async createProduct(payload: any){
      try{
        const { baseUrl, apikey, secretKey } = useAppConfig();
        const {data, error} = await useFetch("/rest/v1/content", {
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
          this.message = "Gagal Menambahkan content !!!";
        }else if(data){
          this.status = true;
          this.message = "Berhasil Menambahkan content";
          this.content = data.value;
        }
      }catch(error){
        console.error(error);
      }
    },
    async detailProduct(id: number){
      try{
        const { baseUrl, apikey, secretKey } = useAppConfig();
        const { data, error } = await useFetch(`rest/v1/content?id=eq.${id}`, {
          baseURL: baseUrl,
          method: "GET",
          headers: {
            apikey: apikey,
            Authorization: `Bearer ${secretKey}`
          },
        })

        if(error.value){
          this.status = false;
          this.message = "Gagal Menambahkan content !!!";
        }else if(data){
          this.status = true;
          this.message = "Berhasil Menambahkan content";
          this.oneProduct = data.value;
        }
      }catch(error){
        console.error(error);
      }
    },
    async updateProduct(payload: any, id: number){
      try{
        const { baseUrl, apikey, secretKey } = useAppConfig();
        const {data, error} = await useFetch(`rest/v1/content?id=eq.${id}`, {
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
          this.message = "Update content Failed !!!";
        }else if(data){
          this.status = true;
          this.message = "Update content successfully";
          this.oneProduct = data.value;
        }
      }catch(error){
        console.error(error);
      }
    },
    async filterByIsCart(state: boolean){
      try{
        const { baseUrl, apikey, secretKey } = useAppConfig();
        const { data, error } = await useFetch(`rest/v1/content?isCart=eq.${state}`, {
          baseURL: baseUrl,
          method: "GET",
          headers: {
            apikey: apikey,
            Authorization: `Bearer ${secretKey}`
          },
        })

        if(error.value){
          this.status = false;
          this.message = "Gagal Menambahkan content !!!";
        }else if(data){
          this.status = true;
          this.message = "Berhasil Menambahkan content";
          this.content = data.value;
        }
      }catch(error){
        console.error(error);
      }
    },
    async filterByCategory(category: string){
      try{
        const { baseUrl, apikey, secretKey } = useAppConfig();
        const { data, error } = await useFetch(`rest/v1/content?category=eq.${category}`, {
          baseURL: baseUrl,
          method: "GET",
          headers: {
            apikey: apikey,
            Authorization: `Bearer ${secretKey}`
          },
        })

        if(error.value){
          this.status = false;
          this.message = "Gagal Menambahkan content dari Genre !!!";
        }else if(data){
          this.status = true;
          this.message = "Get content By Category successfully";
          this.content = data.value;
        }
      }catch(error){
        console.error(error);
      }
    }
  }
})