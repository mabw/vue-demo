<template>
  <toggle-panel-wrapper>
    <template slot="dummyComponent">
      <resource-dummy :value="value"></resource-dummy>
    </template>
    <template slot="componentPanel">
      <resource-panel @update-value="handlePropsEvent"></resource-panel>
    </template>
  </toggle-panel-wrapper>
</template>

<script>
import TogglePanelWrapper from "../TogglePanelWrapper";
import ResourceDummy from "./ResourceDummy";
import ResourcePanel from "./ResourcePanel";
export default {
  componentName: "resource-wrapper",
  props: ["value", "update-value"],
  components: {
    TogglePanelWrapper,
    ResourceDummy,
    ResourcePanel,
  },
  methods: {
    handlePropsEvent(val) {
      this.$emit("update-value", val);
    },
  },
};
</script>

<style></style>
