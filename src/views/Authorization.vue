<template>
  <div class="authorization">
    <div class="authorization__wrapper">
      <div class="authorization__content">
        <h1 class="authorization__title">Авторизация</h1>
        <h2 class="authorization__subtitle">Введите логин и вставьте ссылку на свой аватар</h2>
        <form class="authorization__inputs"
              id="auth_form"
              method="POST"
              action="https://www.asdasda.as"
              @submit.prevent="submitForm"
              ref="authForm"
        >
          <brand-input
            class="authorization__input"
            label="Логин"
            type="text"
            name="login"
          >
          </brand-input>
          <brand-input
            class="authorization__input"
            label="Аватар"
            type="text"
            name="avatar"
          >
          </brand-input>
        </form>
        <brand-button
          class="authorization__submit"
          type="submit"
          label="Войти"
          for="auth_form"
          @click="submitForm"
        >
        </brand-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Authorization',
    methods: {
      submitForm() {
        const form = this.$refs.authForm;
        const data = new FormData(form);
        const id = this.$store.getters['user/getUserFreeId'];
        const user = new Object({avatar: data.get('avatar'), login: data.get('login'), id});

        this.$store.dispatch('user/setCurrentUser', user)
          .then(() => {
            this.$router.push('/');
          })
      }
    }
  }
</script>
<style lang="scss">
  .authorization {
    $self: &;

    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    & #{$self}__wrapper {
      @include container();

      @include xs-block() {
        padding: 0;
      }
    }

    & #{$self}__content {
      text-align: left;
      color: $black;
      margin-top: 50px;
      padding: 100px 100px 200px;
      background-color: $white;
      border-radius: 5px;
      border: 1px solid $primary-border-color;
      box-shadow: 0 5px 20px 0 $transparent-bg;

      @include xs-block() {
        padding: 100px 10px;
      }
    }

    & #{$self}__title {
      font-size: 28px;
      line-height: 45px;
      padding-bottom: 10px;
    }

    & #{$self}__subtitle {
      font-size: 20px;
      line-height: 30px;
      padding-bottom: 20px;
      color: $primary-font-color;
    }

    & #{$self}__input {
      @include size(6);
      @include size-sm(12);
      @include size-xs(12);

      &:first-child {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }

      &:last-child {
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        border-top: none;
      }
    }

    & #{$self}__submit {
      margin-top: 20px;
      min-width: 250px;
    }
  }
</style>