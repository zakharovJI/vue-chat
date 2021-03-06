<template>
  <div class="chat-window-chat-area">
    <div class="chat-window-chat-area__chat-block" ref="chatBlock">
      <template v-if="destinationId">
        <chat-window-chat-area-message
          v-for="message in messageList"
          :key="message.message"
          :userMessage="{
            user: $store.getters['user/getUserById'](message.sourceId),
            message
          }"
          ref="message"
        />
      </template>
      <span
        v-else
        class="chat-window-chat-area__text-empty"
      >Здесь появится чат, когда Вы выберите контакт</span>
    </div>
    <div
      v-show="destinationId"
      class="chat-window-chat-area__text-block"
    >
      <brand-input
        class="chat-window-chat-area__input"
        type="textarea"
        label="Введите сообщение..."
        name="message"
        @input-submit="sendMessage()"
        ref="messageInput"
      />
      <div class="chat-window-chat-area__send"
           @click="sendMessage()"
      >
        <svg class="chat-window-chat-area__icon">
          <use xlink:href="#send"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
  import "@/assets/symbols/send.svg"
  import ChatWindowUserRow from "@/components/ChatWindowChatAreaMessage.vue"
  import ChatWindowChatAreaMessage from "@/components/ChatWindowChatAreaMessage.vue";

  import {mapState} from "vuex"

  export default {
    components: {
      ChatWindowChatAreaMessage,
      ChatWindowUserRow
    },
    props: {
      sourceId: {
        type: Number,
        required: true
      },
      destinationId: {
        required: true
      }
    },
    computed: {
      ...mapState({
        chatMessages: 'messages/chatMessages',
        userList: 'user/userList'
      }),
      messageList() {
        const params = {sourceId: this.sourceId, destinationId: this.destinationId};
        return this.$store.getters['messages/getMessageList'](params) || [];
      }
    },
    watch: {
      messageList: function () {
        this.$nextTick(() => {
          const el = this.$refs.chatBlock;

          el.scrollTo({
            top: el.scrollHeight,
            // behavior: 'smooth'
          });
        })
      }
    },
    methods: {
      sendMessage() {
        const message = this.$refs.messageInput.selfValue;

        const params = {
          ownerIds: [this.sourceId, this.destinationId],
          message: {
            sourceId: this.sourceId,
            text: message,
            time: Date.now()
          }
        }

        this.$store.dispatch('messages/addToChatMessages', params)
          .then(() => {
            this.$refs.messageInput.selfValue = '';
          })
      }
    }
  }

</script>

<style lang="scss">
  .chat-window-chat-area {
    $self: &;

    width: calc(100% / 12 * 8);
    border-right: 1px solid $primary-border-color;
    display: flex;
    flex-direction: column;

    @include xs-block() {
      width: auto;
      flex: 1;
    }

    &__chat-block {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      overflow: auto;
      padding-bottom: 15px;

      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    &__text-empty {
      font-size: 14px;
      color: $secondary-font-color;
      margin: auto;
    }

    &__text-block {
      flex: 0 1 60px;
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
  }
</style>