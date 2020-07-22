<template>
  <div class="home">
    <div class="home__wrapper">
      <div class="home__inner">
        <chat-window/>
        <chat-window/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"
  import ChatWindow from "@/components/ChatWindow.vue"

  @Component({
    components: {
      ChatWindow: ChatWindow
    },
  })
  export default class Home extends Vue {

  }
</script>

<style lang="scss">
  .home {
    $self: &;

    padding: 50px 20px 20px;
    flex: 1;
    display: flex;

    &__wrapper {
      @include container();
      display: flex;
      flex: 1;
    }

    &__inner {
      background-color: $dark-white;
      display: flex;
      flex: 1;
      border: 1px solid $primary-border-color;
    }

    .chat-window {
      width: 50%;
    }
  }
</style>