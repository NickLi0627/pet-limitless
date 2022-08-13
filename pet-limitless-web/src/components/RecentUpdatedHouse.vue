<script setup lang="ts">
import type { House } from "@/model/house";
interface Props {
  house: House;
}

defineProps<Props>();
</script>

<template>
  <div class="container">
    <img class="img" :src="`${house.imgUrls[0]}`" alt="Recent updated image" />
    <div class="title">{{ house.title }}</div>
    <div class="description">{{ house.title }}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "RecentUpdatedHouse",
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0px;
  margin: 0px;
}

.container .img {
  width: 300px;
  height: auto;
  border-radius: 10px;
}
.container .title {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0px 2px;
}
.container .description {
  font-size: 1rem;
  margin: 0px 2px;
}
</style>
