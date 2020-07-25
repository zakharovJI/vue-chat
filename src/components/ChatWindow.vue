<template>
  <div class="chat-window">
    <chat-window-users-list
      class="chat-window__chat-window-users-list"
      :userList="userList"
      @contact-selected="changeDestinationId"
    />
    <chat-window-chat-area
      class="chat-window__chat-window-chat-area"
      :sourceId="sourceId"
      :destinationId="destinationId"
    />
  </div>
</template>

<script>
  import "@/assets/symbols/send.svg"
  import ChatWindowUsersList from "@/components/ChatWindowUsersList.vue";
  import ChatWindowChatArea from "@/components/ChatWindowChatArea.vue";
  import {createNamespacedHelpers} from "vuex"

  const {mapState} = createNamespacedHelpers('user');

  export default {
    name: 'ChatWindow',
    components: {
      ChatWindowChatArea,
      ChatWindowUsersList,
    },
    props: {
      sourceId: {
        type: Number,
        required: true
      },
    },
    data() {
      return {
        user: null,
        destinationId: null
      }
    },
    computed: {
      ...mapState([
        'userList'
      ])
    },
    mounted() {
      this.user = this.$store.getters['user/getUserById'](this.sourceId);
    },
    methods: {
      changeDestinationId(destinationId) {
        this.destinationId = +destinationId;
      }
    }
  }

</script>

<style lang="scss">
  .chat-window {
    $self: &;

    width: 50%;
    display: flex;

    @include to-md() {
      width: 100%;
      min-height: 100%;
    }

    &:last-child {
      .chat-window-chat-area {
        border-right: none;
      }
    }

    &:first-child {
      @include to-md() {
        border-bottom: 1px solid $primary-border-color;
      }
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
  }
</style>