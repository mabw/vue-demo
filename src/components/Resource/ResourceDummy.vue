<template>
  <button>
    {{ value === "" ? "please select a value" : value }}
  </button>
</template>

<script>
export default {
  props: ["value"],
  mounted() {
    console.log("dummy mounted");
  },
  beforeDestroy() {
    console.log("dummy destroyed");
  },
};
</script>

<style></style>
