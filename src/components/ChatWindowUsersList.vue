<template>
  <div class="chat-window-user-list">
    <chat-window-user-row
      v-for="contact in userList"
      :key="contact.id"
      :message="contact.message"
      :user="contact.user"
    ></chat-window-user-row>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator"

  import "@/assets/symbols/send.svg"
  import ChatWindowUserRow from "@/components/ChatWindowUserRow.vue"
  import User from "@/types/User";

  @Component({
    components: {
      ChatWindowUserRow: ChatWindowUserRow
    },
  })
  export default class ChatWindowUsersList extends Vue {
    @Prop({required: true}) private userList!: Array<User>;

  }

</script>

<style lang="scss">
  .chat-window-user-list  {
      display: flex;
      flex-direction: column;
      width: calc(100% / 12 * 5);
      border-right: 1px solid $primary-border-color;
  }
</style>