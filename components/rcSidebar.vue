<template>
  <div class="sidebar">
    <div class="sidebar__text-field">
      <input type="text" class="sidebar__input" placeholder="Поиск">
      <div class="sidebar__search-btn">
        <img src="~/assets/img/search.svg" alt="">
      </div>
    </div>
    <div class="sidebar__path">ivan_ivanov/</div>
    <div class="sidebar__folders-list">
      <div class="sidebar__folder__item">
        <div class="folder__item">
          <div class="folder__icon">
            <img src="~/assets/img/folder_empty.png" alt="">
          </div>
          <div class="folder__name">Новая папка</div>
        </div>
        <div class="folder__list">
          <div class="folder__item">
            <div class="folder__icon">
              <img src="~/assets/img/folder_empty.png" alt="">
            </div>
            <div class="folder__name">Новая вложеная папка</div>
          </div>
          <div class="folder__item">
            <div class="folder__icon">
              <img src="~/assets/img/folder_empty.png" alt="">
            </div>
            <div class="folder__name">lorem</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.sidebar {
  background-color: $backgroundPrimaryColor;
  border-radius: $radius;
  box-shadow: 0px 4px 4px $fontSecondaryColor;
  width: 100%;
  height: 100%;
  padding: $padding;

  &__text-field {
    width: 100%;
    display: flex;
    position: relative;
  }

  &__input {
    width: 100%;
    background-color: $backgroundSecondaryColor;
    border-radius: 15px;
    padding: $padding;
  }

  &__search-btn {
    cursor: pointer;
    width: 30px;
    position: absolute;
    top: $padding - 2px;
    right: 0;
  }

  &__folders-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 $padding $padding $padding;
  }

  &__path {
    padding: $padding;
    color: $fontSecondaryColor;
  }
}

.folder {

  &__item {
    display: flex;
    padding-bottom: $padding /2;
  }

  &__icon {
    padding-right: $padding;

    img {
      width: 20px;
    }
  }

  &__list {
    padding: $padding/2 $padding;
  }
}
</style>