import { defineStore } from "pinia";
import axios from "@/plugins/axios.js"
const useCartStore = defineStore("cart", {
  state: () => ({
    items: 0,
  }),
//   getters: {
//     doubleCount: (state) => state.count * 2 ,
//   },
  actions: {
    async getItems() {
     response = await axios.get('/api/v1/frontend/cart/site');
    },
    async removeItems() {
        response = await axios.post('/');
    },
    async addItems(id) {
        response = await axios.post('/', {
            id: id
        });
    },
    async payment() {
        response = await axios.post('/');
    },
    changeItems(value){
      this.items = value
    }
  },
});


export default useCartStore;