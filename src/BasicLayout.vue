<template>
  <div>
    <div>
      <center>Header</center>
      <div>
        <router-link to="/">
          <a>List panel</a>
        </router-link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="/demo">
          <a>Blank page</a>
        </router-link>
      </div>
      <button @click="removeKey">remove</button>
      <button @click="reset">reset</button>
    </div>
    <transition>
      <keep-alive>
        <router-view :nameKey="name" @saveKey="saveKey"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "a",
      componentKey: "",
    };
  },
  methods: {
    removeKey() {
      this.name = "";
    },
    reset() {
      this.name = Math.random(0, 100) + "";
    },
    saveKey(val) {
      this.componentKey = val;
    },
  },
};
</script>
