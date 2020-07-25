<template>
  <div class="home">
    <div class="home__wrapper">
      <div class="home__inner">
        <chat-window
          :sourceId="2"
        />
        <chat-window
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