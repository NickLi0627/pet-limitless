import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HouseListingView from "../views/HouseListingView.vue";
import LoginView from "../views/LoginView.vue";
import RegistrationView from "../views/RegistrationView.vue";
import PostingView from "../views/PostingView.vue";
import RoommateListingView from "../views/RoommateListingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
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
      path: "/roommates",
      name: "roommates",
      component: RoommateListingView,
    },
  ],
});

export default router;
