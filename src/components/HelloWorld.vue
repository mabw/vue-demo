<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>the value is {{ value === "" ? "none" : value }}</div>
    <resource :value="value" @update-value="updateValue"></resource>
  </div>
</template>

<script>
import Resource from "./Resource/";

export default {
  components: { Resource },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    updateValue(value) {
      this.value = value;
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
