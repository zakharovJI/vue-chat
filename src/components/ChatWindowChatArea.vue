<template>
  <div class="chat-window-chat-area">
    <div class="chat-window-chat-area__chat-block">

    </div>
    <div class="chat-window-chat-area__text-block">
      <brand-input
        class="chat-window-chat-area__input"
        type="textarea"
        label="Введите сообщение..."
        name="message"
      />
      <div class="chat-window-chat-area__send">
        <svg class="chat-window-chat-area__icon">
          <use xlink:href="#send"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"

  import "@/assets/symbols/send.svg"
  import ChatWindowUserRow from "@/components/ChatWindowUserRow.vue"
  import BrandInput from "@/components/BrandInput.vue";
  import BrandButton from "@/components/BrandButton.vue";

  @Component({
    components: {
      BrandButton: BrandButton,
      BrandInput: BrandInput,
      ChatWindowUserRow: ChatWindowUserRow
    },
    computed: {
      user() {
        return this.$store.getters['getUser']
      }
    }
  })
  export default class ChatWindowChatArea extends Vue {

  }

</script>

<style lang="scss">
  .chat-window-chat-area {
    $self: &;

    width: calc(100% / 12 * 7);
    border-right: 1px solid $primary-border-color;
    display: flex;
    flex-direction: column;

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
  }
</style>