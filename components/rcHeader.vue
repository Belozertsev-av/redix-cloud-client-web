<template>
  <header class="header">
    <div class="header__block">
      <div class="header__icon">
        <div class="icon__squere" v-for="i in 4" :key="i"></div>
      </div>
      <div class="header__title title">Редикс.<span class=" blue">Диск</span></div>
    </div>
    <div class="header__block">
      <div class="header__account">
        <img src="~/assets/img/account.png" alt="">
      </div>
      <div class="header__notifications">
        <img src="~/assets/img/bell.png" alt="">
      </div>
    </div>
  </header>
</template>

<script setup>
</script>

<style lang="scss">
.blue {
  color: $primaryColor;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $padding;

  &__block {
    display: flex;
    align-items: center;

    &:last-child {
      flex-direction: row-reverse;
    }
  }

  &__icon {
    cursor: pointer;
    height: 30px;
    width: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 2px;

    &:active {
      .icon__squere {
        transform: scale(0.9);
      }
    }
  }

  &__title {
    padding-left: $padding;

  }

  &__account {
    cursor: pointer;

    img {
      height: 30px;
    }

    padding-left: $padding;
  }

  &__notifications {
    cursor: pointer;

    img {
      height: 20px;
    }
  }
}

.icon {
  &__squere {
    transition: 0.05s ease-in;
    background-color: $primaryColor;
    border-radius: $radius / 3;
  }
}

@media screen and (max-width: 450px) {
  .header__title {
    display: none;
  }
}
</style>