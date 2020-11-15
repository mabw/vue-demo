<template>
  <div>
    <resource-dummy
      :value="value"
      :value2="value2"
      @toggle-component="toggleComponent"
    ></resource-dummy>
    <component
      :is="panelName"
      v-on="currentEvents"
      @close-panel="panelName = ''"
    ></component>
  </div>
</template>

<script>
import ResourceDummy from "./ResourceDummy";
import ResourcePanel from "./ResourcePanel";
import ResourcePanel2 from "./ResourcePanel2";

export default {
  componentName: "resource-wrapper",
  props: ["value", "value2", "update-value", "update-value2"],
  components: {
    ResourceDummy,
    ResourcePanel,
    ResourcePanel2,
  },
  data() {
    return {
      panelName: "",
    };
  },
  computed: {
    currentEvents() {
      if (this.panelName === "ResourcePanel") {
        return { "update-value": (val) => this.$emit("update-value", val) };
      }
      if (this.panelName === "ResourcePanel2") {
        return {
          "update-value": (val) => this.$emit("update-value2", val),
        };
      }

      return {};
    },
  },
  methods: {
    toggleComponent(componentName) {
      this.panelName = componentName;
    },
  },
};
</script>

<style></style>
