<script setup lang="ts">
import type { House } from "@/model/house";
interface Props {
  house: House;
}

defineProps<Props>();
</script>

<template>
  <div class="container">
    <div class="sub-container">
      <div class="left">
        <img
          class="img"
          :src="`${house.imgUrls[0]}`"
          alt="Recent updated image"
        />
      </div>

      <div class="right">
        <div class="title">{{ house.title }}</div>
        <div class="description">{{ house.title }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "HousePreview",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0px;
  margin: 0px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  color: blue;

  .sub-container {
    display: flex;
    flex-direction: row;
    margin: 10px 12px;

    .left {
      margin-right: 16px;
      .img {
        width: 150px;
        height: 150px;
        border-radius: 10px;
      }
    }

    .right {
      .title {
        font-size: 1.2rem;
        font-weight: 700;
        margin: 0px 2px;
      }

      .description {
        font-size: 1rem;
        margin: 0px 2px;
      }
    }
  }
}
</style>
