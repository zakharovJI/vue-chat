<template>
  <div class="chat-window-user-list">
    <chat-window-users-list-contact
      v-for="user in userList"
      :key="user.id"
      :user="user"
      @click="contactSelected(user.id)"
    ></chat-window-users-list-contact>
  </div>
</template>

<script>
  import "@/assets/symbols/send.svg"
  import ChatWindowUsersListContact from "@/components/ChatWindowUsersListContact.vue";

  export default {
    name: 'ChatWindowUsersList',
    components: {
      ChatWindowUsersListContact
    },
    props: {
      userList: {
        type: Array,
        required: true,
      }
    },
    methods: {
      contactSelected(userId) {
        this.$emit('contact-selected', userId);
      }
    }
  }
</script>

<style lang="scss">
  .chat-window-user-list  {
      display: flex;
      flex-direction: column;
      width: calc(100% / 12 * 4);
      border-right: 1px solid $primary-border-color;
  }
</style>