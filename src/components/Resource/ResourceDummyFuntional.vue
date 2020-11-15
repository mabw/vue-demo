<template functional>
  <div>
    <button @click="parent.toggleComponent('ResourcePanel')">
      {{ props.value === "" ? "please select a value" : props.value }}
    </button>
    <button @click="parent.toggleComponent('ResourcePanel2')">
      {{ props.value2 === "" ? "please select another value" : props.value2 }}
    </button>
  </div>
</template>
