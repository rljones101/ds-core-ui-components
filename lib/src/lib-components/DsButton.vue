<template>
  <button
    class="ds-button"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>

export default {
  name: 'DsButton'
}
</script>

<style lang="scss">
@use '../styles/mixins';

$denseHeight: 32px;
$defaultHeight: 36px;

.ds-button {
  cursor: pointer;
  position: relative;
  min-width: 88px;
  display: inline-block;
  white-space: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: var(--button-border-radius);
  font-weight: 600;
  background-color: transparent;
  height: $defaultHeight;
  line-height: $defaultHeight;
  color: var(--button-color);
  text-transform: uppercase;
  margin: 6px 8px;
  padding: 0 8px;
  user-select: none;
  transition: all .3s ease;
  overflow: hidden;
  outline: none;
  vertical-align: top;
  border: 2px solid transparent;
}

.ds-icon-button {
  width: 40px !important;
  min-width: 40px !important;
  height: 40px !important;
  margin: 0 6px !important;
  border-radius: 50% !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
}

.ds-button:active,
.ds-button.ds-raised:active,
.ds-button.ds-raised.ds-primary:active,
.ds-button.ds-raised.ds-accent:active {
  box-shadow: inset 1px 1px 1px 1px rgba(0, 0, 0, 0.24);
  transform: translateY(4px);
}

.ds-button::after {
  content: "";
  border-radius: var(--button-border-radius);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: currentColor;
  opacity: 0;
  transition: .4s cubic-bezier(.4,0,.2,1);
  will-change: background-color, opacity;
}

.ds-button:not([disabled]):hover {
  &::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: .12;
  }
}

.ds-button.ds-primary {
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.ds-button.ds-accent {
  color: var(--accent-color);
  border: 2px solid var(--accent-color);
}

.ds-button.ds-primary:hover {
  background-color: var(--primary-color);
  color: white;
}

.ds-button.ds-accent:hover {
  background-color: var(--accent-color);
  color: white;
}

.ds-button.ds-raised {
  box-shadow: 0 3px 1px -2px var(--shadow-color), 0 2px 2px 0 var(--shadow-color), 0 1px 5px 0 var(--shadow-color);
}

.ds-button.ds-raised.ds-primary{
  @extend .ds-button, .ds-raised;
  color: white;
  background-color: var(--primary-color);
}

.ds-button.ds-raised.ds-accent{
  @extend .ds-button, .ds-raised;
  color: white;
  background-color: var(--accent-color);
}

.ds-button[disabled] {
  border: none;
  background-color: var(--main-color);
  color: var(--disabled-color, rgba(0,0,0,.26));
  cursor: default;
}

.ds-button[disabled].ds-raised {
  border: none;
  background-color: var(--disabled-background-color, rgba(0,0,0,.12));
  color: var(--disabled-color, rgba(0,0,0,.26));
  box-shadow: none;
}

.ds-dense {
  font-size: 12px !important;
  height: 32px !important;
  line-height: 32px !important;

  &.ds-icon-button {
    width: 32px !important;
    min-width: 32px !important;
    line-height: 32px !important;
  }
}
</style>
