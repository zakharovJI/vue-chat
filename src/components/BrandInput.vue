<template>
  <div
      class="brand-input"
      :class="{'brand-input_focused': stateFocused,
    'brand-input_filled': stateFilled || selfValue,
    'brand-input_textarea': type === 'textarea'}"
  >
    <label v-if="type === 'textarea'">
      <textarea
        class="brand-input__input"
        v-model="selfValue"
        :name="name"
        :type="type"
        :placeholder="label"
        @focus="onFocus"
        @blur="onBlur"
        @input="onInput"
        autocomplete="off"
        ref="inputField"
      ></textarea>
    </label>
    <label v-else>
      <span class="brand-input__label">
        {{ label }}
      </span>
      <input
        class="brand-input__field"
        v-model="selfValue"
        :name="name"
        @focus="onFocus"
        @blur="onBlur"
        @input="onInput"
        autocomplete="off"
        ref="inputField"
      />
    </label>
  </div>
</template>
<script >
  export default {
    name: 'BrandInput',
    props: {
      name: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: false,
        default: ''
      },
    },
    data() {
      return {
        selfValue: this.value,
        stateFilled: false,
        stateFocused: false,
      }
    },
    methods: {
      onFocus() {
        this.stateFocused = true;
      },
      onBlur() {
        this.stateFocused = false;
      },
      onInput(e) {
        this.stateFilled = !!this.selfValue;

        return e.target.value;
      }
    }

  }
</script>
<style lang="scss">
  .brand-input {
    $self: &;

    background-color: white;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    color: $primary-font-color;
    font-size: 12px;
    font-weight: 500;
    cursor: text;
    border: 1px solid $primary-border-color;

    #{$self}__control {
      height: 100%;
      cursor: text;
    }

    #{$self}__label {
      position: absolute;
      font-size: 16px;
      line-height: 16px;
      top: 50%;
      transform: translateY(-50%);
      padding-left: 16px;
      transition: all .25s linear;
      transform-origin: left;
      color: inherit;
      cursor: inherit;
      pointer-events: none;
    }

    #{$self}__field {
      width: 100%;
      height: 100%;
      min-height: 60px;
      font-weight: inherit;
      font-size: inherit;
      padding-left: 16px;
      background-color: inherit;
      padding-top: 15px;
      color: $black;
      cursor: inherit;
      border: none;

      &[readonly] {
        background-color: rgba(0, 0, 0, 0.01);
        box-shadow: inset -1px 0 0 0 #F2F2F2;
        cursor: default;
      }
    }

    #{$self}__icon {
      width: 20px;
      height: 20px;
      margin-right: 16px;
      color: inherit;

      &_delete {
        margin-right: 16px;
        margin-left: auto;
        z-index: 20;
        cursor: pointer;
      }
    }

    &_focused, &_filled {

      #{$self}__control {
        cursor: text;
      }

      #{$self}__label {
        font-size: 12px;
        transform: translateY(-140%);
      }
    }

    &_textarea {
      border: none;
      height: 100%;
      border-radius: 0;

      & #{$self}__input {
        border: none;
        border-radius: 2px;
        width: 100%;
        max-height: 60px;
        height: 60px;
        background-color: inherit;
        resize: none;
        padding: 5px;

        &::-webkit-scrollbar {
          display: none;
        }
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::placeholder {
          color: $primary-font-color;
        }
      }
    }
  }
</style>