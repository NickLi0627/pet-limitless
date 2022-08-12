<script setup lang="ts">
import { ref } from "vue";
import RoommatePreview from "../components/RoommatePreview.vue";
import type { RoommateModel } from "../model/interface";

const input = ref("");

// TODO(Nick): replace with the real API call.
function generateFakeRoommates(): RoommateModel[] {
  const fakeData: RoommateModel[] = [];
  for (let i = 1; i < 10; ++i) {
    const item: RoommateModel = {
      name: `Fake data ${i}`,
      age: "This is the fake description, use many words to test the ui add more text to make sure the UI still looks very good...",
      photoUrl: "../../src/assets/fake/fake-roommate.png",
      city: "fake city",
      gender: "Female",
    };
    fakeData.push(item);
  }
  return fakeData;
}
</script>
<template>
  <div class="roommate-container">
    <div class="header">
      <div class="title">尋找位於台北市的室友</div>

      <div class="filter-section">
        <div class="filters">
          <div class="tag">縣市</div>
          <div class="tag">性別</div>
          <div class="tag">年紀</div>
          <div class="tag">我想尋找</div>
          <div class="tag">最後上線時間</div>
          <div class="tag">更多選項</div>
        </div>
      </div>
    </div>
    <hr class="hr-solid" />

    <div class="body">
      <div class="info">
        <div class="search-count">共有 123 筆結果</div>
        <div class="sorting">排序方式</div>
      </div>
      <div class="roommates">
        <div v-for="item in generateFakeRoommates()" :key="item.name">
          <RoommatePreview :roommate="item"></RoommatePreview>
        </div>
      </div>
    </div>

    <!-- <div class="body-rest"></div> -->
  </div>
</template>

<style scoped lang="scss">
.roommate-container {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  padding: 0;
  max-width: 100%;
  flex-grow: 1;

  .header {
    margin: 0 20px;
    .title {
      font-size: 2rem;
      font-weight: 700;
    }

    .filter-section {
      display: flex;
      flex-direction: column;
      .filters {
        display: flex;
        flex-direction: row;
        padding: 0;
        margin: 30px 20px;
        .tag {
          display: flex;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 20px;
          height: 40px;
          justify-content: center;
          font-weight: 700;
          align-items: center;
          margin-right: 10px;
        }
      }
    }
  }

  .hr-solid {
    border: 0;
    height: 1px;
    border-top: 1px solid #696969;
    margin: 0 40px;
  }
  .body {
    .info {
      display: flex;
      flex-direction: row;
      margin-left: 60px;
      margin: 20px 0 20px 60px;
      // margin: 0 20px;
      .search-count {
        margin-right: 70px;
      }
    }

    .roommates {
      display: grid;
      grid-template-columns: repeat(auto-fill, 300px);
      justify-content: space-between;
      margin-left: 60px;
      margin-right: 60px;
      row-gap: 40px;
    }
  }
}
</style>
