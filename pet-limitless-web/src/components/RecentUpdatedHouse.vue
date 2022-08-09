<script setup lang="ts">
import type RecentUpdatedHouseModel from "@/model/interface";
interface Props {
  house: RecentUpdatedHouseModel;
}

defineProps<Props>();
</script>

<template>
  <div class="container">
    <img class="img" :src="`${house.imgUrl}`" alt="Recent updated image" />
    <div class="title">{{ house.title }}</div>
    <div class="description">{{ house.description }}</div>
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
