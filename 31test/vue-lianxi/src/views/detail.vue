<template>
  <div class="wrap">
    <div class="header">
      <img :src="list.img" alt />
    </div>
    <h2>{{list.class}}</h2>
    <p>{{list.title}}</p>
    <p>{{list.content}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: this.$route.params.item
    };
  }
};
</script>

<style lang='scss' scoped>
.wrap {
  width: 100%;
  height: 100%;
}
.header {
  width: 100%;
  height: 150px;
  img {
    width: 100%;
    height: 150px;
  }
}
</style>