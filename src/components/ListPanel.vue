<template>
  <div class="hello">
    <div>The value is {{ value === "" ? "none" : value }}</div>
    <div>The value is {{ value2 === "" ? "none" : value2 }}</div>
    <resource
      :value="value"
      :value2="value2"
      @update-value="updateValue"
      @update-value2="updateValue2"
    ></resource>
  </div>
</template>

<script>
import Resource from "./Resource/";

export default {
  components: { Resource },
  name: "Home",
  data() {
    return {
      value: "",
      value2: "",
    };
  },
  methods: {
    updateValue(value) {
      this.value = value;
    },
    updateValue2(value) {
      this.value2 = value;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
