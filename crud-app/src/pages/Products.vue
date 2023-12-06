<script setup>
import { ref } from "vue";
import { useProductStore } from "../stores/product";
import Swal from "sweetalert2";

const productStore = useProductStore();

const search = ref('')

function deleteProduct(index) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      productStore.deleteProduct(index);
      Swal.fire({
        title: "Deleted!",
        text: "Product has been deleted.",
        icon: "success",
      });
    }
  });
}
</script>

<template>
  <div class="p-3">
    <div class="input-group mb-3">
      <input @keypress.enter="productStore.filterProducts(search)" type="text" class="form-control"
        placeholder="Search product name here" v-model="search" />
      <button @click="productStore.filterProducts(search)" class="btn btn-outline-primary" type="button">Search</button>
      <RouterLink to="/products/create" class="btn btn-primary" type="button">Add Product</RouterLink>
    </div>

    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Available</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="productStore.filteredProducts.length > 0">
          <tr v-for="(product, index) in productStore.filteredProducts" :key="product.id">
            <td>{{ index + 1 }}</td>
            <td>{{ product.product_name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.quantity }}</td>
            <td>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" :checked="product.isAvailable" disabled />
              </div>
            </td>
            <td>
              <div class="d-flex gap-2">
                <button class="btn btn-sm btn-success">Edit</button>
                <button @click="deleteProduct(index)" class="btn btn-sm btn-danger">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </template>
        <tr v-else>
          <td colspan="6" class="text-center text-danger">No products found...</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
