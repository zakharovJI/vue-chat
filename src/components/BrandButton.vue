<template>
  <button
    class="brand-button"
    :class="{'brand-button_loading' : stateLoading}"
    :type="type"
    :disabled="disabled"
    @click="onClick()"
  >
    {{ label }}
  </button>
</template>
<script lang="ts">
  import {Component, Prop, Emit, Vue} from 'vue-property-decorator';

  @Component
  export default class BrandButton extends Vue {
    @Prop({
      required: true,
    }) label!: string;
    @Prop({
      required: false,
      default: ''
    }) type!: string;
    @Prop({
      required: false,
      default: false
    }) disabled!: boolean;

    @Emit()
    onClick() {

    }

    private stateLoading: boolean = false;

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

    & #{$self}_loading {
      background: rgba(49, 184, 0, 1);
      background: linear-gradient(135deg, rgb(49, 184, 0) 0%, rgba(49, 184, 0, 0.5) 17%, rgba(49, 184, 0, 1) 34%, rgba(49, 184, 0, 0.5) 51%, rgba(49, 184, 0, 1) 68%, rgba(49, 184, 0, 0.5) 85%, rgba(49, 184, 0, 1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#31b800', endColorstr='#31b800', GradientType=1);
      background-size: 100% 310%;
      animation: preloaderAnimation 2s ease infinite;
      cursor: default;
      pointer-events: none;
    }

    @keyframes preloaderAnimation {
      0% {
        background-position-y: 100%
      }

      10% {
        background-position-y: 90%
      }

      20% {
        background-position-y: 80%
      }

      30% {
        background-position-y: 70%
      }

      40% {
        background-position-y: 60%
      }

      50% {
        background-position-y: 50%
      }

      60% {
        background-position-y: 40%
      }

      70% {
        background-position-y: 30%
      }

      80% {
        background-position-y: 20%
      }

      90% {
        background-position-y: 10%
      }

      100% {
        background-position-y: 0
      }
    }

  }
</style>