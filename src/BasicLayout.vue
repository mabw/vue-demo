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
    </div>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
