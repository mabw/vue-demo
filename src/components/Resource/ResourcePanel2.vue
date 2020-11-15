<template>
  <div>
    <hr />
    <div>This is panel 2</div>
    <div :key="item.title" v-for="item in dataset">
      <button @click="$emit('update-value', item.title)">
        {{ item.title }}
      </button>
    </div>
    <button style="color: red" @click="$emit('close-panel')">
      close panel 2
    </button>
  </div>
</template>

<script>
export default {
  props: ["update-value"],
  data() {
    return {
      dataset: [
        {
          title: "item1 in panel 2",
        },
        {
          title: "item2 in panel 2",
        },
        {
          title: "item3 in panel 2",
        },
      ],
    };
  },
  mounted() {
    console.log("panel2 mounted");
  },
  beforeDestroy() {
    console.log("panel2 destroyed");
  },
};
</script>

<style></style>
