<template>
  <div class="progress-bar">
    <div class="progress-bar__column">
      <div class="progress-bar__row">
        <div class="progress-bar__title subtitle">Занято 2гб. из 10гб.</div>
        <div class="progress-bar__link link">Увеличить лимит</div>
      </div>
      <div class="progress-bar__row">
        <div class="progress-bar__body">
          <div class="progress-bar__category" id="music"></div>
          <div class="progress-bar__category" id="video"></div>
          <div class="progress-bar__category" id="others"></div>
        </div>
      </div>
    </div>
    <div class="progress-bar__column"></div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.progress-bar {
  background-color: $backgroundPrimaryColor;
  border-radius: $radius;
  box-shadow: 0px 4px 4px $shadowColor;
  width: 100%;
  height: 100%;
  display: flex;

  &__column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: $padding;

    &:first-child {
      width: 60%;
    }
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    padding: calc($padding/2);
  }

  &__body {
    height: 10px;
    width: 100%;
    background-color: $progressBarColor;
    border-radius: 5px;
    display: flex;
  }

  &__category {
    &:first-child {
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }

    &:last-child {
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
    }
  }
}

#music {
  height: 10px;
  width: 30%;
  background-color: #FBE522;
}

#video {
  height: 10px;
  width: 10%;
  background-color: #2EC915;
}

#others {
  height: 10px;
  width: 5%;
  background-color: #FB2222;
}
</style>