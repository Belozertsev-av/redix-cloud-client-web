<template>
  <div class="main">
    <div class="main__body">
      <rc-sidebar class="main__sidebar"></rc-sidebar>
      <rc-progress-bar class="main__progress-bar"></rc-progress-bar>
      <rc-main-window class="main__window"></rc-main-window>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin: $paddingMedium 0;

  &__body {
    width: 100%;
    height: 100%;
    display: grid;
    grid-gap: $padding;
    grid-template-columns: 0.25fr 0.75fr;
    grid-template-rows: 0.15fr 0.85fr;
  }

  &__sidebar {
    grid-row-start: 1;
    grid-row-end: 3;
  }

  &__progress-bar {}

  &__window {}
}
</style>