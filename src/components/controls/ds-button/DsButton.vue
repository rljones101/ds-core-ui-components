<template>
  <md-button
    class="ds-button"
    v-bind="$attrs"
  >
    <slot />
  </md-button>
</template>

<script>

export default {
  name: 'DsButton'
}
</script>

<style lang="scss">

    .ds-button:not([disabled]).ds-primary {
        border: 2px solid var(--button-color);
        color: var(--button-color);
        box-shadow: 0 3px 1px -2px var(--shadow-color), 0 2px 2px 0 var(--shadow-color), 0 1px 5px 0 var(--shadow-color);
    }

    .ds-button:not([disabled]) {
        background-color: transparent;
        color: var(--button-color);
    }

    .ds-button[disabled] {
        border: 2px solid var(--main-view-bg-color);
        background-color: var(--main-color);
        color: var(--main-view-bg-color);
    }

    .ds-button {

        color: #ffffff;

        min-width: 120px;
        height: 36px;
        margin: 6px 8px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;

        padding: 0;
        display: inline-block;
        position: relative;
        overflow: hidden;
        outline: none;
        border: 0;
        transition: .4s cubic-bezier(.4,0,.2,1);
        font-family: inherit;
        line-height: normal;
        text-decoration: none;
        vertical-align: top;
        white-space: nowrap;
    }

    .ds-button:before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        opacity: 0;
        transition: .4s cubic-bezier(.4, 0, .2, 1);
        will-change: background-color, opacity;
        content: " ";
    }

    .ds-button:not([disabled]):hover:before {
        background-color: currentColor;
        opacity: .12;
    }

    .ds-button .ds-ripple {
        padding: 0 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ds-ripple {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 5;
        overflow: hidden;
    }

    .ds-button-content {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-around;
        z-index: 2;
    }

    .ds-raised {
        box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    }

    .disabled {
        background-color: #eeeeee;
    }
</style>
