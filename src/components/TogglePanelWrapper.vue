<template>
  <div>
    <div @click="togglePanelVisiable">
      <slot name="dummyComponent"></slot>
    </div>
    <hr />
    <div v-if="isShowPanel">
      <slot name="componentPanel"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowPanel: false,
    };
  },
  methods: {
    togglePanelVisiable() {
      this.isShowPanel = !this.isShowPanel;
    },
  },
};
</script>

<style></style>
