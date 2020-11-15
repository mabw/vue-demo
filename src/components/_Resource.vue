<template>
  <div>
    <div>
      <button @click="togglePanel">
        {{ value === "" ? "please select a value" : value }}
      </button>
    </div>
    <hr />
    <div v-if="showPanel">
      <div :key="item.title" v-for="item in dataset">
        <button @click="$emit('update-value', item.title)">
          {{ item.title }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["value", "update-value"],
  data() {
    return {
      showPanel: false,
      dataset: [
        {
          title: "item1",
        },
        {
          title: "item2",
        },
        {
          title: "item3",
        },
      ],
    };
  },
  methods: {
    togglePanel() {
      this.showPanel = !this.showPanel;
    },
  },
  mounted() {
    console.log("mounted");
  },
  beforeDestroy() {
    console.log("destroyed");
  },
};
</script>

<style></style>
