<script setup lang="ts">
import HousePreview from "../components/HousePreview.vue";
import type { House } from "../model/house";
import { generateFakeHouses } from "../model/house";

const center = ref([120.9605, 23.6978]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
const rotation = ref(0);
</script>
<template>
  <div class="houses-container">
    <div class="container-left">
      <div class="wrapper">
        <div class="scroll-body">
          <div class="fixed-header">
            <div class="filter-section">
              <div class="filters">
                <div class="tag">縣市</div>
                <div class="tag">價錢</div>
                <div class="tag">類型</div>
                <div class="tag">格局</div>
                <div class="tag">特色</div>
                <div class="tag">更多選項</div>
              </div>
              <div class="info">
                <div class="search-count">共有 123 筆待租物件</div>
                <div class="sorting">排序方式</div>
              </div>
            </div>
          </div>
          <hr class="hr-solid" />
          <div class="houses">
            <div
              class="house-row"
              v-for="item in generateFakeHouses()"
              :key="item.title"
            >
              <HousePreview :house="item"></HousePreview>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-right">
      <div class="map">
        <!-- <input
        type="checkbox"
        id="fullscreencontrol"
        v-model="fullscreencontrol"
      /> -->
        <!-- <label for="fullscreencontrol">fullscreencontrol</label> -->
        <!-- <input type="checkbox" id="attribution" v-model="attributioncontrol" /> -->
        <!-- <label for="attribution">attributioncontrol</label>
      <input type="checkbox" id="zoom" v-model="zoomcontrol" />
      <label for="zoom">zoomcontrol</label>
      <input type="checkbox" id="zoomtoextent" v-model="zoomtoextentcontrol" />
      <label for="zoomtoextent">zoomtoextentcontrol</label>
      <input type="checkbox" id="zoomslider" v-model="zoomslidercontrol" />
      <label for="zoomslider">zoomslidercontrol</label>
      <input type="checkbox" id="scaleline" v-model="scalelinecontrol" />
      <label for="scaleline">scalelinecontrol</label>
      <input type="checkbox" id="overviewmap" v-model="overviewmapcontrol" />
      <label for="overviewmap">overviewmapcontrol</label>
      <input
        type="checkbox"
        id="mousepositioncontrol"
        v-model="mousepositioncontrol"
      />
      <label for="mousepositioncontrol">mousepositioncontrol</label> -->
        <!-- <input type="checkbox" id="rotatecontrol" v-model="rotatecontrol" />
      <label for="rotatecontrol">rotatecontrol</label> -->

        <ol-map
          ref="map"
          :loadTilesWhileAnimating="true"
          :loadTilesWhileInteracting="true"
          style="height: 100vh"
        >
          <ol-view
            ref="view"
            :center="center"
            :rotation="rotation"
            :zoom="zoom"
            :projection="projection"
          />

          <ol-fullscreen-control v-if="fullscreencontrol" />
          <ol-mouseposition-control v-if="mousepositioncontrol" />
          <ol-attribution-control v-if="attributioncontrol" />

          <ol-overviewmap-control v-if="overviewmapcontrol">
            <ol-tile-layer>
              <ol-source-osm />
            </ol-tile-layer>
          </ol-overviewmap-control>

          <ol-scaleline-control v-if="scalelinecontrol" />
          <ol-rotate-control v-if="rotatecontrol" />
          <ol-zoom-control
            v-if="zoomcontrol"
            style="position: absolute; left: 50%"
          />
          <ol-zoomslider-control v-if="zoomslidercontrol" />
          <ol-zoomtoextent-control
            v-if="zoomtoextentcontrol"
            :extent="[23.906, 42.812, 46.934, 34.597]"
            tipLabel="Fit to Turkey"
          />

          <ol-tile-layer>
            <ol-source-osm />
          </ol-tile-layer>
        </ol-map>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  data() {
    return {
      fullscreencontrol: false,
      attributioncontrol: false,
      zoomcontrol: true,
      zoomslidercontrol: true,
      zoomtoextentcontrol: true,
      scalelinecontrol: true,
      overviewmapcontrol: true,
      mousepositioncontrol: true,
      rotatecontrol: true,
    };
  },
};
</script>

<style scoped lang="scss">
.houses-container {
  display: flex;
  height: 100vh;
  margin: 0;
  padding: 0;

  .container-left {
    position: relative;
    // display: flex;
    // flex-direction: column;
    width: calc(50%);

    .wrapper {
      display: flex;
      flex-flow: row wrap;
      flex-direction: column;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      .scroll-body {
        .fixed-header {
          flex: 1;
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

            .info {
              display: flex;
              flex-direction: row;
              margin: 0 20px;
              .search-count {
                margin-right: auto;
              }
            }
          }
        }
        flex: 6;
        overflow-y: auto;
        overflow-x: hidden;
        .hr-solid {
          border: 0;
          height: 1px;
          border-top: 1px solid #696969;
          margin: 16px 10px;
          margin: 16px 10px 0px 10px;
        }
        .houses {
          color: blue;
          margin: 0 20px;

          .house-row {
            margin-top: 20px;
          }
        }
      }
    }
  }

  .container-right {
    width: calc(50%);
  }
}
</style>
