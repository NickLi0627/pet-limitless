<template>
  <div id="house-filters-modal">
    <div class="modal-container">
      <h1>範例 Modal</h1>
      <p>這是一個範例 Modal</p>
      <button class="button" @click="closeHouseFiltersModal">
        Close Modal
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { useUIStore } from "@/stores/ui";
export default {
  name: "HouseFiltersModal",
  setup() {
    const uiState = useUIStore();

    const closeHouseFiltersModal = () => {
      uiState.updateShowHouseFiltersModal(false);
    };

    return {
      closeHouseFiltersModal,
    };
  },
};
</script>

<style lang="scss">
#house-filters-modal {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}

// .button {
//   appearance: none;
//   outline: none;
//   border: none;
//   background: none;
//   cursor: pointer;

//   display: inline-block;
//   padding: 15px 25px;
//   background-image: linear-gradient(to right, #cc2e5d, #ff5858);
//   border-radius: 8px;

//   color: #fff;
//   font-size: 18px;
//   font-weight: 700;

//   box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
//   transition: 0.4s ease-out;

//   &:hover {
//     box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
//   }
// }

.modal-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 16px;
  padding: 25px;

  h1 {
    color: #222;
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 15px;
  }

  p {
    color: #666;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 15px;
  }
}
</style>
