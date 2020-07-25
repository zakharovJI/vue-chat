<template>
  <button
    class="brand-button"
    :type="type"
    :disabled="disabled"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>
<script>

  export default {
    name: 'BrandButton',
    props: {
      label: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: false,
        default: ''
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    methods: {
      onClick(e) {
        this.$emit('click', e)
      }
    }

  }
</script>
<style lang="scss">
  .brand-button {
    $self: &;

    background-color: $primary-blue;
    color: white;
    border-radius: 2px;
    cursor: pointer;
    transition: background-color $base-interval linear;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 13px 32px;
    border: 2px solid $primary-blue;

    @include xs-block() {
      width: 100%;
    }

    &:hover {
      background-color: darken($primary-blue, 5%);
    }

    &:active {
      background-color: darken($primary-blue, 10%);
    }

    &:focus {
      border-color: darken($primary-blue, 10%);
    }

    #{$self}__content {
      font-size: 12px;
      font-weight: bold;
      line-height: 16px;
    }

    #{$self}__icon {
      color: inherit;
      margin-right: 12px;
      width: 18px;
      height: 18px;
    }

    &_disabled {
      background-color: $light;
      cursor: default;
      color: $secondary-font-color;
      pointer-events: none;
    }

    &_secondary {
      background-color: transparent;
      border: 1px solid $ultra-light-gray;
      padding: 14px 28px;

      &:hover {
        background-color: lighten(black, 5%);
      }
      &:active {
        background-color: lighten(black, 10%);
      }
      &:focus {
        border-color: lighten(black, 5%);
      }
    }

    &[disabled] {
      background-color: $light-gray;
      border-color: $light-gray;
      pointer-events: none;
    }
  }
</style>