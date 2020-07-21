<template>
  <header class="the-header">

  </header>
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Authorization extends Vue {

  }
</script>
<style lang="scss">
  .the-header {
    background-color: $primary-blue;
    width: 100%;
    height: 100px;
    position: absolute;
    z-index: -1;
  }
</style>
