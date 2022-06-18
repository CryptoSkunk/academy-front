<template>
  <div class="guli-player">
    <div class="head">
      <a href="#" title="帮帮学院">
        <img class="logo" src="http://image.cryptomartin.top/img/QQ%E6%88%AA%E5%9B%BE20220321221737.png" lt="帮帮学院" />
      </a>
    </div>
    <div class="body">
      <div class="content"><nuxt /></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
html,
body {
  height: 100%;
}
</style>

<style scoped>
.head {
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.head .logo {
  height: 50px;
  margin-left: 10px;
}

.body {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>