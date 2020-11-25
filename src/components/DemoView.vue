<template>
  <div>This is demo view</div>
</template>

<script>
export default {
  props: ["nameKey", "saveKey"],
  mounted() {
    if (this.$vnode && this.$vnode.data.keepAlive) {
      if (
        this.$vnode.parent &&
        this.$vnode.parent.componentInstance &&
        this.$vnode.parent.componentInstance.cache
      ) {
        if (this.$vnode.componentOptions) {
          const key =
            this.$vnode.key == null
              ? this.$vnode.componentOptions.Ctor.cid +
                (this.$vnode.componentOptions.tag
                  ? `::${this.$vnode.componentOptions.tag}`
                  : "")
              : this.$vnode.key;
          // const cache = this.$vnode.parent.componentInstance.cache;
          // const keys = this.$vnode.parent.componentInstance.keys;
          this.$emit("saveKey", key);
        }
      }
    }
  },
  watch: {
    $route: {
      handler() {
        console.log("123");
        if (this.nameKey === "") {
          if (this.$vnode && this.$vnode.data.keepAlive) {
            if (
              this.$vnode.parent &&
              this.$vnode.parent.componentInstance &&
              this.$vnode.parent.componentInstance.cache
            ) {
              if (this.$vnode.componentOptions) {
                const key =
                  this.$vnode.key == null
                    ? this.$vnode.componentOptions.Ctor.cid +
                      (this.$vnode.componentOptions.tag
                        ? `::${this.$vnode.componentOptions.tag}`
                        : "")
                    : this.$vnode.key;
                const cache = this.$vnode.parent.componentInstance.cache;
                const keys = this.$vnode.parent.componentInstance.keys;

                if (cache[key]) {
                  if (keys.length) {
                    const index = keys.indexOf(key);
                    if (index > -1) {
                      keys.splice(index, 1);
                    }
                  }
                  delete cache[key];
                  console.log(12);
                }
              }
            }
          }
          this.$destroy(true);
        }

        // this.$el.parentNode.removeChild(this.$el);
      },
      deep: true,
    },
  },
};
</script>
