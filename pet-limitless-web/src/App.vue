<template>
  <header>
    <h1 id="nav-title">
      <RouterLink to="/">Pet Limitless</RouterLink>
    </h1>
    <nav>
      <ul>
        <li><RouterLink to="/houses">租屋</RouterLink></li>
        <li><RouterLink to="/roommates">找室友</RouterLink></li>
        <li><RouterLink to="/posting">我要刊登</RouterLink></li>
      </ul>
    </nav>
    <nav>
      <ul>
        <li><RouterLink to="/login">登入</RouterLink></li>
        <li><RouterLink to="/registration">註冊</RouterLink></li>
      </ul>
    </nav>
  </header>

  <RouterView></RouterView>

  <div class="modal-overlay" v-if="showHouseFiltersModal"></div>
  <div class="dynamic-modal" v-if="showHouseFiltersModal">
    <HouseFiltersModal></HouseFiltersModal>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HouseFiltersModal from "../src/components/HouseFiltersModal.vue";

import { useUIStore } from "./stores/ui";

export default {
  components: {
    RouterLink,
    RouterView,
    HouseFiltersModal,
  },
  setup() {
    const uiStore = useUIStore();
    const showHouseFiltersModal = computed(() => uiStore.showHouseFiltersModal);

    return { showHouseFiltersModal };
  },
};
</script>

<style scoped lang="scss">
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2.5rem;
  box-shadow: 0 1px 8px #ddd;
  background-color: #ffffff;

  li {
    list-style: none;
    display: flex;
    display: inline-block;
    padding: 0 20px;
  }
  ul {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #555;
    transition: all 0.3s ease 0s;
  }

  a:hover {
    color: #b2dfdb;
  }
}

#nav-title {
  display: flex;
  padding: 0;
  margin: 0;

  a {
    font-size: 1.5rem;
    font-weight: 700;
    color: black;
  }
}
.dynamic-modal {
  position: absolute;
  width: 100%;
  height: 100%;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}

@media (min-width: 1024px) {
  nav {
    margin: 0;
    padding: 0;
    font-size: 1rem;
  }
}
</style>
