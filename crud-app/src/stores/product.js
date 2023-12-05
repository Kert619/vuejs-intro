import { defineStore } from "pinia";
import { ref } from "vue";
import data from "@/data.json";

export const useProductStore = defineStore("product", function () {
  const products = ref([...data]);

  return { products };
});
