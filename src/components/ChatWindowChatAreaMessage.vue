<template>
  <div class="chat-window-chat-area-message">
    <div class="chat-window-chat-area-message__avatar-wrapper">
      <img
        class="chat-window-chat-area-message__avatar"
        :src="userMessage.user.avatar"
        :alt="userMessage.user.login"
      />
    </div>
    <div class="chat-window-chat-area-message__name-wrapper">
      <div class="chat-window-chat-area-message__name"> {{ userMessage.user.login }} </div>
      <div class="chat-window-chat-area-message__message"> {{ userMessage.message.text }} </div>
    </div>
    <div class="chat-window-chat-area-message__time"> {{ _getTimeFromDate(userMessage.message.time) }} </div>
  </div>
</template>

<script>
  export default {
    name: 'ChatWindowChatAreaMessage',
    props: {
      userMessage: {
        type: Object,
        required: true
      }
    },
  }
</script>

<style lang="scss">
  .chat-window-chat-area-message {
    $self: &;

    padding: 10px;
    display: flex;
    justify-content: space-between;
    height: 50px;
    background-color: $dark-white;
    transition: all $base-interval linear;

    &__avatar-wrapper {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;
    }

    &__avatar {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__name-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding-left: 10px;
      text-align: left;
      flex: 1;
    }

    &__name {
      font-size: 12px;
      line-height: 20px;
      font-weight: bold;
      padding-bottom: 5px;
    }

    &__message {
      font-size: 12px;
      line-height: 16px;
    }

    &__time {
      font-size: 12px;
    }
  }
</style>