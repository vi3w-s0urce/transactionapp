import LoginView from "@/views/auth/LoginView.vue";
import RegisterView from "@/views/auth/RegisterView.vue";
import DashboardView from "@/views/DashboardView.vue";
import ProductCreate from "@/views/product/ProductCreate.vue";
import ProductIndex from "@/views/product/ProductIndex.vue";
import TransactionCreate from "@/views/transaction/TransactionCreate.vue";
import TransactionIndex from "@/views/transaction/TransactionIndex.vue";
import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/login",
            name: "login",
            component: LoginView,
            meta: { title: "Login" },
        },
        {
            path: "/register",
            name: "register",
            component: RegisterView,
            meta: { title: "Register" },
        },
        {
            path: "/",
            name: "dashboard",
            component: DashboardView,
            meta: { title: "Dashboard" },
        },
        {
            path: "/product",
            name: "product",
            component: ProductIndex,
            meta: { title: "Products" },
        },
        {
            path: "/product/create",
            name: "createProduct",
            component: ProductCreate,
            meta: { title: "Create Product" },
        },
        {
            path: "/transaction",
            name: "transaction",
            component: TransactionIndex,
            meta: { title: "Transactions" },
        },
        {
            path: "/transaction/create",
            name: "transactionCreate",
            component: TransactionCreate,
            meta: { title: "Create Transaction" },
        },
    ],
});

router.afterEach((to) => {
    nextTick(() => {
        document.title = (to.meta.title as string) || "TransactionApp";
    });
});

export default router;
