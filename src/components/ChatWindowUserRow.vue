<template>
  <div class="chat-window-user-row">
    <div class="chat-window-user-row__avatar-wrapper">
      <img
        class="chat-window-user-row__avatar"
        :src="user.avatar"
        :alt="user.login"
      />
    </div>
    <div class="chat-window-user-row__name-wrapper">
      <div class="chat-window-user-row__name"> {{ user.login }} </div>
      <div class="chat-window-user-row__message"> {{ message.message }} </div>
    </div>
    <div class="chat-window-user-row__time"> {{ message.time }} </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator"
  import User from "@/types/User";
  import { Message } from "@/types/types";

  @Component
  export default class ChatWindowUserRow extends Vue {
    @Prop({required: true}) private user!: User;
    @Prop({required: true}) private message!: Message;

  }
</script>

<style lang="scss">
  .chat-window-user-row {
    $self: &;

    padding: 10px;
    display: flex;
    justify-content: space-between;
    height: 80px;
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

    &__name-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding-left: 10px;
      text-align: left;
      flex: 1;
    }

    &__name {
      font-size: 14px;
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