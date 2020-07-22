<template>
  <div class="chat-window">
    <chat-window-users-list
      :userList="userListToShow"
    />
    <chat-window-chat-area />
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator"

  import "@/assets/symbols/send.svg"
  import { Message } from "@/types/types"
  import ChatWindowUsersList from "@/components/ChatWindowUsersList.vue";
  import ChatWindowChatArea from "@/components/ChatWindowChatArea.vue";
  import Contact from "@/types/Contact";

  @Component({
    components: {
      ChatWindowChatArea: ChatWindowChatArea,
      ChatWindowUsersList: ChatWindowUsersList,
    },
    computed: {
      userList() {
        return this.$store.getters['getUserList']
      },
      userListToShow() {
        const list: Array<Contact> = [];
        // @ts-ignore
        this.userList.forEach(user => {
          list.push(new Contact(user, <Message> {
            message: 'Да, было здорово!',
            time: '17:37'
          }))
        });

        return list;
      }
    }
  })
  export default class ChatWindow extends Vue {
    @Prop({required: true}) private user
  }

</script>

<style lang="scss">
  .chat-window {
    $self: &;

    display: flex;

    &__start {
      display: flex;
      flex-direction: column;
      width: calc(100% / 12 * 5);
      border-right: 1px solid $primary-border-color;
    }

    &__end {
      width: calc(100% / 12 * 7);
      border-right: 1px solid $primary-border-color;
      display: flex;
      flex-direction: column;
    }

    &__chat-block {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    &__text-block {
      height: 60px;
      margin-top: auto;
      display: flex;
      align-items: center;
      border-top: 1px solid $primary-border-color;

      & #{$self}__input {
        flex: 1;
        background-color: $dark-white;
      }
    }

    &__send {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      & #{$self}__icon {
        width: 25px;
        height: 25px;
        color: $primary-blue;
      }
    }

    &:last-child {
      & #{$self}__end {
        border-right: none;
      }
    }
  }
</style>