<template>
  <div>
    <div @click="togglePanelVisiable">
      <slot name="dummyComponent"></slot>
    </div>
    <div v-if="isShowPanel">
      <slot :name="slotName"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      isShowPanel: false,
      slotName: "",
    };
  },
  mounted() {
    console.log(123123, this.$slots);
    console.log("value", this.value);
  },
  methods: {
    togglePanelVisiable() {
      this.isShowPanel = !this.isShowPanel;
      this.slotName = "componentPanel";
    },
    showConsole() {
      console.log("show console");
    },
  },
};
</script>
