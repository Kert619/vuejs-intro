import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/pages/Dashboard.vue";
import Products from "@/pages/Products.vue";
import CreateProduct from "@/pages/CreateProduct.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
    },
    {
      path: "/dashboard",
      component: Dashboard,
    },
    {
      path: "/products",
      children: [
        {
          path: "",
          component: Products,
        },
        {
          path: "create",
          component: CreateProduct,
        },
      ],
    },
  ],
});

export default router;
