<script setup lang="ts">
import { ref } from "vue";
import RecentUpdatedHouse from "../components/RecentUpdatedHouse.vue";
import type { HouseModel } from "../model/interface";

const input = ref("");

// TODO(Nick): replace with the real API call.
function generateFakeRecentUpdatedHouse(): HouseModel[] {
  const fakeData: HouseModel[] = [];
  for (let i = 1; i < 10; ++i) {
    const item: HouseModel = {
      title: `Fake data ${i}`,
      description:
        "This is the fake description, use many words to test the ui add more text to make sure the UI still looks very good...",
      imgUrl: "../../src/assets/fake/fake-recent-updated-house.png",
      price: "",
    };
    fakeData.push(item);
  }
  return fakeData;
}
</script>

<template>
  <body>
    <div class="container">
      <img
        src="@/assets/img/homepage_background.png"
        alt="Home Page Background Image"
      />

      <div class="search-bar-container">
        <div class="title">開始替毛小孩們找個舒適的家吧！</div>
        <input type="text" v-model="input" placeholder="請輸入關鍵字" />
      </div>
    </div>

    <div class="recent-updated-container">
      <div class="title">近期更新</div>
      <div class="body">
        <div v-for="item in generateFakeRecentUpdatedHouse()" :key="item.title">
          <RecentUpdatedHouse :house="item"></RecentUpdatedHouse>
        </div>
      </div>
    </div>
  </body>
</template>

<script lang="ts">
export default {
  name: "HomeView",
  data() {
    return {};
  },
};
</script>

<style scoped>
input {
  width: 400px;
  margin: 20px auto;
  padding: 10px 45px;
  background: white url("@/assets/search-icon.svg") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.container {
  max-width: 100%;
  padding: 0;
  margin: 0;
}

.search-bar-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.search-bar-container .title {
  font-size: 2.5rem;
  font-weight: 700;
}

.recent-updated-container {
  display: flex;
  flex-direction: column;
  margin: 2rem 6rem;
  max-width: 100%;
}

.recent-updated-container .title {
  font-size: 1.5rem;
  font-weight: 700;
}

.recent-updated-container .body {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: space-between;
  /* grid-gap: 10px; */
  row-gap: 20px;
  margin-top: 12px;
}

img {
  width: 100%;
  height: auto;
  max-width: 100%;
}
</style>
