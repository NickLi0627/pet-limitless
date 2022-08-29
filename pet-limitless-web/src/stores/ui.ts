import { defineStore } from "pinia";

export type UIState = {
  showHouseFiltersModal: boolean;
};

export const useUIStore = defineStore({
  id: "ui",
  state: () =>
    ({
      showHouseFiltersModal: false,
    } as UIState),
  actions: {
    updateShowHouseFiltersModal(value: boolean) {
      this.showHouseFiltersModal = value;
    },
  },
});
