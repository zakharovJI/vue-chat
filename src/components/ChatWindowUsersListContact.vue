<template>
  <div class="chat-window-users-list-contact"
    @click="onClick"
  >
    <div class="chat-window-users-list-contact__avatar-wrapper">
      <img
        class="chat-window-users-list-contact__avatar"
        :src="user.avatar"
        :alt="user.login"
      />
    </div>
    <div class="chat-window-users-list-contact__name"> {{ user.login }} </div>
  </div>
</template>

<script>
  export default {
    name: 'ChatWindowUsersListContact',
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    methods: {
      onClick(e) {
        this.$emit('click', e);
      }
    }
  }
</script>

<style lang="scss">
  .chat-window-users-list-contact {
    $self: &;

    padding: 10px;
    display: flex;
    justify-content: space-between;
    height: 70px;
    background-color: $dark-white;
    border-bottom: 1px solid $primary-border-color;
    cursor: pointer;
    transition: all $base-interval linear;

    &:active {
      background-color: darken($dark-white, 5%);
    }

    &__avatar-wrapper {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
    }

    &__avatar {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__name {
      font-size: 14px;
      line-height: 20px;
      font-weight: bold;
      padding-bottom: 5px;
      padding-left: 10px;
      text-align: left;
      flex: 1;

      @include xs-block() {
        display: none;

      }
    }
  }
</style>