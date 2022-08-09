import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FindPartnerView from "../views/FindPartnerView.vue";
import HouseListingView from "../views/HouseListingView.vue";
import LoginView from "../views/LoginView.vue";
import RegistrationView from "../views/RegistrationView.vue";
import PostingView from "../views/PostingView.vue";
import TenantListingView from "../views/TenantListingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/partners",
      name: "partners",
      component: FindPartnerView,
    },
    {
      path: "/houses",
      name: "houses",
      component: HouseListingView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },

    {
      path: "/registration",
      name: "registration",
      component: RegistrationView,
    },
    {
      path: "/posting",
      name: "posting",
      component: PostingView,
    },
    {
      path: "/tenants",
      name: "tenants",
      component: TenantListingView,
    },
  ],
});

export default router;
