<template>
  <div class="sidebar">
    <rc-search></rc-search>
    <div class="sidebar__path">ivan_ivanov/</div>
    <div class="sidebar__folders-list">
      <div class="sidebar__folder-item">
        <div class="folder__item">
          <div class="folder__icon">
            <img src="~/assets/img/bin.png" alt="">
          </div>
          <div class="folder__name">Корзина</div>
        </div>
      </div>
      <div class="sidebar__folder-item">
        <div class="folder__item selected-folder">
          <div class="folder__icon">
            <img src="~/assets/img/folder_empty.png" alt="">
          </div>
          <div class="folder__name">Домашний каталог</div>
        </div>
        <div class="folder__list">
          <div class="folder__item">
            <div class="folder__icon">
              <img src="~/assets/img/folder_empty.png" alt="">
            </div>
            <div class="folder__name">Новая вложеная папка</div>
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
  box-shadow: 0px 4px 4px $shadowColor;
  width: 100%;
  height: 100%;
  padding: $padding;

  &__folders-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__path {
    padding: $padding;
    color: $fontSecondaryColor;
  }
}

.folder {

  &__item {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: calc($padding/2) $padding;
    transition: 0.1s ease;

    &:not(.selected-folder):hover {
      background-color: #fff;
      box-shadow: 2px 2px 2px $shadowColor;
      border-radius: $radius;
      padding: calc($padding/2) $padding;
    }
  }

  &__icon {
    padding-right: $padding;

    img {
      width: 20px;
    }
  }

  &__list {
    padding: calc($padding /2) $padding;
  }
}
</style>