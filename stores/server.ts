export const useServerStore = defineStore("server", {
    state: () => ({
      servers: {} as any,
      status: false,
      message: "",
    }),
    actions: {
      async getAllServer() {
        const { baseUrl, apikey } = useAppConfig();
        const { data, error } = await useFetch("/rest/v1/servers", {
          baseURL: baseUrl,
          method: "GET",
          headers: {
            apikey: apikey,
          },
        });
  
        if (error.value) {
          this.status = false;
          this.message = "Get Products Failed !!!";
        } else if (data) {
          this.status = true;
          this.message = "Get Products successfully";
          this.servers = data.value;
        }
      },

      async createServer(payload: any) {
        const { baseUrl, apikey } = useAppConfig();
        const { data, error } = await useFetch("/rest/v1/servers", {
          baseURL: baseUrl,
          method: "POST",
          headers: {
            apikey: apikey,
          },
          body: payload,
        });
  
        if (error.value) {
          this.status = false;
          this.message = "Create Category Failed !!!";
        } else if (data) {
          this.status = true;
          this.message = "Create Category successfully";
        }
      },
    },
  });
  