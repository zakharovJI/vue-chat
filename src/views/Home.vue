<template>
  <div class="home">
    <div class="home__wrapper">
      <div class="home__inner">
        <chat-window
          class="home__chat-window"
          :sourceId="2"
        />
        <chat-window
          class="home__chat-window"
          :sourceId="1"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import ChatWindow from "@/components/ChatWindow.vue"
  export default {
    name: 'Home',
    components: {
      ChatWindow: ChatWindow
    }

  }
</script>

<style lang="scss">
  .home {
    $self: &;

    padding: 50px 20px 20px;
    flex: 1;
    display: flex;
    max-height: 100vh;

    @include xs-block() {
      padding-left: 0;
      padding-right: 0;
    }

    &__wrapper {
      @include container();
      display: flex;
      flex: 1;

      @include xs-block() {
        padding: 0;
      }
    }

    &__inner {
      background-color: $dark-white;
      display: flex;
      flex: 1;
      border-radius: 5px;
      border: 1px solid $primary-border-color;
      box-shadow: 0 5px 20px 0 $transparent-bg;

      @include to-md() {
        flex-direction: column;
      }
    }
  }
</style>