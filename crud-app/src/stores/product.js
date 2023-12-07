import { defineStore } from "pinia";
import { computed, ref } from "vue";
import data from "@/data.json";

export const useProductStore = defineStore("product", function () {
  const products = ref([...data]);

  const searchInput = ref("");

  function filterProducts(search) {
    searchInput.value = search;
  }

  const filteredProducts = computed(function () {
    return products.value.filter((product) =>
      product.product_name
        .toLowerCase()
        .includes(searchInput.value.toLowerCase())
    );
  });

  function getProductById(id) {
    return products.value.find(function (product) {
      return product.id == id;
    });
  }

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

  function deleteProduct(id) {
    const index = products.value.findIndex(function (product) {
      return product.id == id;
    });

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

  function updateProduct(id, payload) {
    const product = getProductById(id);

    product.product_name = payload.product_name;
    product.quantity = payload.quantity;
    product.price = payload.price;
    product.isAvailable = payload.isAvailable;
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
    getProductById,
    updateProduct,
  };
});
