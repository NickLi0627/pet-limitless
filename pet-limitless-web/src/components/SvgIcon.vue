<template>
  <svg
    :class="['svg-icon', $attrs.class]"
    :style="{ width: iconSize + 'px', height: iconSize + 'px' }"
    aria-hidden="true"
  >
    <use :xlink:href="'#icon-' + iconName" :fill="color"></use>
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "SvgIcon",
  props: {
    iconName: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#000000",
    },
    iconSize: {
      type: [Number, String],
      default: 14,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scope>
.svg-icon {
  fill: currentColor;
  vertical-align: middle;
}
</style>
