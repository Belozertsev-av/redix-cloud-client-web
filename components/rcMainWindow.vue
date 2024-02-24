<template>
  <div class="window">
    <div class="window__toolbar">
      <div class="window__column">
        <div class="window__title title">Домашний каталог</div>
      </div>
      <div class="window__column">
        <div class="window__btn-add icon-btn">
          <img src="~/assets/img/folder_add.svg" alt="add folder">
        </div>
        <rc-search class="window__search"></rc-search>
        <div class="window__btn-sort icon-btn">
          <img src="~/assets/img/sort_arrow.svg" alt="sort">
        </div>
        <div class="window__btn-list icon-btn">
          <svg width="20px" height="20px">
            <use xlink:href="~/assets/img/sort_list.svg#icon"></use>
          </svg>
        </div>
        <div class="window__btn-small icon-btn">
          <svg width="20px" height="20px">
            <use xlink:href="~/assets/img/sort_small.svg#icon"></use>
          </svg>
        </div>
        <div class="window__btn-big icon-btn selected-view">
          <svg width="20px" height="20px">
            <use xlink:href="~/assets/img/sort_big.svg#icon"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="window__body">
      <div class="window__item">
        <img src="~/assets/img/folder_empty.png" alt="folder">
        <div class="window__item-text">Новая вложенная папка</div>
        <div class="window__hover-list">
          <div class="window__btn-download icon-btn">
            <img src="~/assets/img/download.svg" alt="add folder">
          </div>
          <div class="window__btn-delete icon-btn">
            <img src="~/assets/img/delete.svg" alt="add folder">
          </div>
        </div>
      </div>
      <div class="window__item selected-item">
        <img src="~/assets/img/folder_empty.png" alt="folder">
        <div class="window__item-text">Новая вложенная папка</div>
        <div class="window__hover-list">
          <div class="window__btn-download icon-btn">
            <img src="~/assets/img/download.svg" alt="add folder">
          </div>
          <div class="window__btn-delete icon-btn">
            <img src="~/assets/img/delete.svg" alt="add folder">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.window {
  background-color: $backgroundPrimaryColor;
  border-radius: $radius;
  box-shadow: 0px 4px 4px $shadowColor;
  width: 100%;
  height: 100%;

  &__toolbar {
    display: flex;
    padding: $padding;
  }

  &__column {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;

    &:first-child {
      width: 40%;
    }
  }

  &__body {
    margin: $padding;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));
    grid-gap: $padding;
  }

  &__hover-list {
    display: none;
    justify-content: space-around;
    align-items: center;
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 85px;
    max-height: 100px;
    position: relative;
    transition: 0.1s;

    img {
      width: 70px;
    }

    &:not(.selected-item):hover {
      z-index: 3;
      width: 115px;
      height: 160px;
      cursor: pointer;

      &::after {
        content: "";
        position: absolute;
        top: -7.5px;
        right: -7.5px;
        background-color: #fff;
        border: 3px solid $fontSecondaryColor;
        width: 15px;
        height: 15px;
        border-radius: 5px;

      }

      &::before {
        content: "";
        z-index: -1;
        position: absolute;
        top: -15px;
        left: -15px;
        background-color: #fff;
        border-radius: $radius;
        box-shadow: 2px 2px 2px $shadowColor;
        width: 115px;
        height: 160px;
      }

      .window__hover-list {
        display: flex;
      }
    }
  }

  &__item-text {
    text-align: center;
  }
}

.icon-btn {
  cursor: pointer;
  padding: $padding;

  img {
    width: 20px;
    height: 20px;
  }
}
</style>