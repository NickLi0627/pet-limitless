<script setup lang="ts">
import type { House } from "@/model/house";
import type { Location } from "@/model/location";
import { computed } from "vue";
import SvgIcon from "@/components/SvgIcon.vue";

interface Props {
  house: House;
}

const props = defineProps<Props>();

const displayAddress = computed(() => {
  const location: Location = props.house.location;
  let str = `${location.township.name} ${location.street.name}`;

  if (location.lane !== undefined) {
    str = str.concat(`${location.lane}巷`);
  }

  if (location.alley !== undefined) {
    str = str.concat(`${location.alley}弄`);
  }

  if (location.minorNumber == undefined) {
    str = str.concat(`${location.number}號`);
  } else {
    str = str.concat(`${location.number}-${location.minorNumber}號`);
  }

  return str;
});
</script>

<template>
  <div class="container">
    <div class="sub-container">
      <div class="left">
        <img class="img" :src="`${house.imgUrls[0]}`" alt="House preview" />
      </div>

      <div class="right">
        <div class="first">
          <div class="title">{{ house.title }}</div>
          <SvgIcon
            icon-name="heart-empty"
            color="#000000"
            icon-size="20"
            class="heart"
          ></SvgIcon>
        </div>

        <div class="second">
          <div class="address">{{ displayAddress }}</div>
          <div class="sub-info">
            <div class="block">
              <SvgIcon icon-name="house" color="#000000"></SvgIcon>
              <div class="text">{{ house.buildingType.name }}</div>
            </div>

            <div class="block">
              <SvgIcon icon-name="area" color="#000000"></SvgIcon>
              <div class="text">{{ `${house.size}坪` }}</div>
            </div>
            <div class="block">
              <SvgIcon icon-name="floor" color="#000000"></SvgIcon>
              <div class="text">
                {{ `${house.location.floor}F/${house.location.totalFloor}F` }}
              </div>
            </div>
          </div>
        </div>

        <div class="third">
          <div class="price">{{ house.rent }}</div>
          <div class="unit">元/月</div>

          <div class="modified">5分前更新</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0px;
  margin: 0px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;

  .sub-container {
    display: flex;
    flex-direction: row;
    margin: 8px;

    .left {
      margin-right: 16px;
      .img {
        width: 130px;
        height: 130px;
        border-radius: 4px;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      width: 100%;

      .first {
        display: flex;
        align-items: center;
        .title {
          font-size: 20px;
          font-weight: 700;
          color: black;
        }

        .heart {
          margin-left: auto;
        }
      }

      .second {
        .address {
          font-size: 14px;
          color: #9c9c9c;
        }

        .sub-info {
          display: flex;
          font-size: 14px;
          color: black;
          margin-top: 8px;
          align-items: center;
          .block {
            display: flex;
            align-items: center;
            margin-left: 12px;
            .text {
              margin-left: 6px;
            }
          }

          .block:first-child {
            margin-left: 0px;
          }
        }
      }

      .third {
        display: flex;
        margin-top: auto;
        align-items: center;
        color: black;
        width: 100%;
        .price {
          font-size: 18px;
          text-align: justify;
          color: red;
          font-weight: 700;
        }

        .unit {
          margin-left: 4px;
          font-size: 12px;
        }

        .modified {
          margin-left: auto;
          font-size: 14px;
          color: #9c9c9c;
        }
      }
    }
  }
}
</style>
