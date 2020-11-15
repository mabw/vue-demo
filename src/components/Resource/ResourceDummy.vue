<template>
  <div>
    <button @click="$emit('toggle-component', 'ResourcePanel')">
      {{ value === "" ? "please select a value" : value }}
    </button>
    <button @click="$emit('toggle-component', 'ResourcePanel2')">
      {{ value2 === "" ? "please select another value" : value2 }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["value", "value2", "toggle-component"],
  mounted() {
    console.log("dummy mounted");
  },
  beforeDestroy() {
    console.log("dummy destroyed");
  },
};
</script>

<style></style>
