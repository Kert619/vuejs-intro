<template>
    <div class="p-3">
        <div class="mb-3">
            <label class="form-label">Product Name</label>
            <input type="text" class="form-control" v-model="form.product_name"
                :class="{ 'border-danger': formError.product_name_error }">
            <div v-if="formError.product_name_error" class="form-text text-danger">{{ formError.product_name_error }}</div>
        </div>
        <div class="mb-3">
            <label class="form-label">Price</label>
            <input type="number" class="form-control" v-model="form.price"
                :class="{ 'border-danger': formError.price_error }">
            <div v-if="formError.price_error" class="form-text text-danger">{{ formError.price_error }}</div>
        </div>
        <div class="mb-3">
            <label class="form-label">Quantity</label>
            <input type="number" class="form-control" v-model="form.quantity"
                :class="{ 'border-danger': formError.quantity_error }">
            <div v-if="formError.quantity_error" class="form-text text-danger">{{ formError.quantity_error }}</div>
        </div>
        <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" v-model="form.isAvailable">
            <label class="form-check-label">
                Is Available
            </label>
        </div>

        <button @click="submitForm" type="button" class="btn btn-primary">Submit</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'

import { useProductStore } from "../stores/product"
import { useRouter } from 'vue-router';

const productStore = useProductStore();

const router = useRouter()

const form = ref({
    id: productStore.getLatestId(),
    product_name: '',
    price: '',
    quantity: '',
    isAvailable: true,
})

const formError = ref({
    product_name_error: '',
    price_error: '',
    quantity_error: '',
})

function submitForm() {
    const hasError = ref(false)

    if (form.value.product_name == "") {
        hasError.value = true;
        formError.value.product_name_error = "Product name is required!"
    } else {
        hasError.value = false;
        formError.value.product_name_error = ""
    }

    if (form.value.price == "") {
        hasError.value = true;
        formError.value.price_error = "Price is required!"
    } else {
        hasError.value = false;
        formError.value.price_error = ""
    }

    if (form.value.quantity == "") {
        hasError.value = true;
        formError.value.quantity_error = "Quantity is required!"
    } else {
        hasError.value = false;
        formError.value.quantity_error = ""
    }
    if (!hasError.value) {
        Swal.fire({
            title: "Are you sure?",
            text: "Add new product",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                productStore.addProduct(form.value)
                Swal.fire({
                    title: "Added!",
                    text: "New product has been added",
                    icon: "success"
                }).then(() => {
                    router.push({ path: "/products", replace: true })
                });
            }
        });
    }
}
</script>

<style  scoped></style>