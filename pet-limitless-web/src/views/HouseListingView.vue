<template>
  <div class="houses-container">
    <div class="container-left">
      <div class="wrapper">
        <div class="scroll-body">
          <div class="fixed-header">
            <div class="filter-section">
              <div class="filters">
                <div class="filter" style="width: calc(14%)">
                  <Multiselect
                    v-model="countyValue"
                    :caret="countyValue === null"
                    :groups="true"
                    :options="groupedCountyOptions"
                    placeholder="縣市"
                  />
                </div>
                <div class="filter" style="width: calc(14%)">
                  <Multiselect
                    v-model="townshipValue"
                    :options="townshipOptions"
                    :caret="townshipValue === null"
                    placeholder="鄉鎮"
                  />
                </div>
                <div class="filter" style="width: calc(16%)">
                  <Multiselect
                    v-model="houseTypeValue"
                    :caret="houseTypeValue === null"
                    :options="houseTypeOptions"
                    placeholder="類型"
                  />
                </div>
                <div class="filter" style="width: calc(12%)">
                  <Multiselect
                    v-model="roomNumberValue"
                    :options="roomNumberOptions"
                    :caret="roomNumberValue === null"
                    placeholder="格局"
                  />
                </div>
                <div class="filter" style="width: calc(22%)">
                  <Multiselect
                    v-model="rentValue"
                    :options="rentOptions"
                    :caret="rentValue === null"
                    placeholder="租金"
                  />
                </div>
                <div class="tag">
                  <button class="button" @click="showMoreHouseFiltersModal()">
                    更多選項
                  </button>
                </div>
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

          <ol-tile-layer>
            <ol-source-osm />
          </ol-tile-layer>

          <ol-zoom-control
            v-if="zoomcontrol"
            style="position: absolute; left: 50%"
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
import { ref, reactive, computed } from "vue";
import Multiselect from "@vueform/multiselect";
import { useUIStore } from "../stores/ui";
import HousePreview from "../components/HousePreview.vue";
import { generateFakeHouses } from "../model/house";
import { useMetadataStore } from "@/stores/metadata";

export default {
  name: "HouseListingView",
  components: {
    HousePreview,
    Multiselect,
  },
  setup() {
    const uiStore = useUIStore();
    const showMoreHouseFiltersModal = () => {
      uiStore.updateShowHouseFiltersModal(true);
    };

    const metadataStore = useMetadataStore();

    const groupedCountyOptions = metadataStore.groupedCountyOptions.map(
      (item) => ({
        label: item.regionName,
        options: item.counties.map((county) => ({
          label: county.name,
          value: county.id,
        })),
      })
    );
    const countyValue = ref(groupedCountyOptions.at(0)?.options.at(0)?.value);

    const townshipOptions = computed(() => {
      return metadataStore.townshipOptions
        .filter((item) => item.countryId === countyValue.value)
        .map((item) => ({ label: item.name, value: item.id }));
    });

    const houseTypeOptions = metadataStore.houseTypeOptions.map((item) => ({
      label: item.name,
      value: item.id,
    }));
    const roomNumberOptions = metadataStore.roomNumberOptions.map((item) => ({
      label: item.name,
      value: item.id,
    }));
    const rentOptions = metadataStore.rentOptions.map((item) => ({
      label: item.name,
      value: item.id,
    }));

    const center = reactive([120.9605, 23.6978]);
    const projection = ref("EPSG:4326");
    const zoom = ref(8);
    const rotation = ref(0);

    return {
      generateFakeHouses,
      center,
      projection,
      zoom,
      rotation,
      showMoreHouseFiltersModal,
      countyValue,
      groupedCountyOptions,
      townshipValue: null,
      townshipOptions,
      houseTypeValue: null,
      houseTypeOptions,
      roomNumberValue: null,
      roomNumberOptions,
      rentValue: null,
      rentOptions,
    };
  },
};
</script>

<style src="../assets/multiselect.scss"></style>

<style scoped lang="scss">
.houses-container {
  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 198;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
  }
  display: flex;
  height: 100vh;
  margin: 0;
  padding: 0;

  .container-left {
    position: relative;
    // display: flex;
    // flex-direction: column;
    width: calc(55%);

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

              .filter {
                display: flex;
                margin-right: 10px;
              }
              .tag {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 40px;
                width: 100px;
              }
              .multiselect {
                border: 1px solid #e0e0e0;
                border-radius: 8px;
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
    width: calc(45%);
  }
}
</style>
