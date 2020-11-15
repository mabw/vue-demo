<template>
  <div>
    <div :key="item.title" v-for="item in dataset">
      <button @click="$emit('update-value', item.title)">
        {{ item.title }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["update-value"],
  data() {
    return {
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
  mounted() {
    console.log("panel mounted");
  },
  beforeDestroy() {
    console.log("panel destroyed");
  },
};
</script>

<style></style>
