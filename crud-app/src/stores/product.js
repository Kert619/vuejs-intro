import { defineStore } from "pinia";
import { computed, ref } from "vue";
import data from "@/data.json";

export const useProductStore = defineStore("product", function () {
  const products = ref([...data]);

  const searchInput = ref("");

  const filteredProducts = computed(function () {
    return products.value.filter((product) =>
      product.product_name
        .toLowerCase()
        .includes(searchInput.value.toLowerCase())
    );
  });

  const availableProducts = computed(function () {
    return products.value.filter(function (product) {
      return product.isAvailable;
    }).length;
  });

  const unAvailableProducts = computed(function () {
    return products.value.filter(function (product) {
      return !product.isAvailable;
    }).length;
  });

  const criticalStocks = computed(function () {
    return products.value.filter(function (product) {
      return product.quantity < 100;
    }).length;
  });

  function filterProducts(search) {
    searchInput.value = search;
  }

  function deleteProduct(index) {
    products.value.splice(index, 1);
  }

  function addProduct(product) {
    products.value.push(product);
  }

  function getLatestId() {
    const ids = products.value.map(function (product) {
      return product.id;
    });

    const max = Math.max(...ids);
    return max + 1;
  }

  return {
    products,
    deleteProduct,
    filterProducts,
    filteredProducts,
    availableProducts,
    unAvailableProducts,
    criticalStocks,
    addProduct,
    getLatestId,
  };
});
