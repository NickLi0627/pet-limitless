<script setup lang="ts">
import type { RoommateModel } from "@/model/interface";
interface Props {
  roommate: RoommateModel;
}

defineProps<Props>();
</script>

<template>
  <div class="container">
    <img class="img" :src="`${roommate.photoUrl}`" alt="Recent updated image" />
    <div class="title">{{ roommate.name }}</div>
    <div class="description">{{ roommate.gender }}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "RoommatePreview",
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
  border: 1px solid #e0e0e0;
  border-radius: 8px;
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
