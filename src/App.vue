<template>
  <div id="app">
    <the-header />
    <router-view />
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import TheHeader from "@/components/TheHeader.vue";

  @Component({
    components: {
      TheHeader
    }
  })
  export default class Authorization extends Vue {

  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
