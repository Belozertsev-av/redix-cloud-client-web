<template>
  <div class="text-field">
    <input type="text" class="input" placeholder="Поиск">
    <div class="search-btn">
      <img src="~/assets/img/search.svg" alt="">
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.text-field {
  width: 100%;
  display: flex;
  position: relative;
}

.input {
  width: 100%;
  background-color: $backgroundSecondaryColor;
  border-radius: 15px;
  padding: $padding;
}

.search-btn {
  cursor: pointer;
  width: 30px;
  position: absolute;
  top: $padding - 2px;
  right: 0;
}
</style>