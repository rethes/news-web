<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/posts">News Articles</router-link> |
      <router-link to="/trash">Trash</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "../src/assets/scss/components/app.scss";
</style>
