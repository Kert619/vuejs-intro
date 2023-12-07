import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/pages/Dashboard.vue";
import Products from "@/pages/Products.vue";
import CreateProduct from "@/pages/CreateProduct.vue";
import UpdateProduct from "@/pages/UpdateProduct.vue";

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
        {
          path: ":id/update",
          component: UpdateProduct,
        },
      ],
    },
  ],
});

export default router;
