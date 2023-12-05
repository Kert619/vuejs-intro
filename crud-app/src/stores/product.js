import { defineStore } from "pinia";
import { ref } from "vue";
import data from "@/data.json";

export const useProductStore = defineStore("product", function () {
  const products = ref([...data]);

  function filterProducts(search) {
    products.value = products.value.filter(function (product) {
      return product.product_name.startsWith(search);
    });
  }

  function deleteProduct(index) {
    products.value.splice(index, 1);
  }

  return { products, deleteProduct, filterProducts };
});
