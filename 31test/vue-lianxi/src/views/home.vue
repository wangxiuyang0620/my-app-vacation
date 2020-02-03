<template>
  <div class="home">
    <div class="header">
      <b @click="goback">返回</b>
      <span>剧集分类</span>
    </div>
    <div class="content">
      <div v-for="(item,index) in list" :key="index" @click="toclass(item.class)">
        <p>{{item.class}}</p>
        <img :src="item.classsrc">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["list"])
  },
  methods: {
    ...mapActions(["getList"]),
    goback() {
      this.$router.push("/login");
    },
    toclass(itemclass) {
      this.$router.push({
        name:"class",
        params:{
          class:itemclass
        }
      });
    }
  },
  mounted() {
    this.getList();
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 45px;
  display: flex;
  b {
    flex: 2;
    text-align: center;
    line-height: 45px;
    font-style: normal;
  }
  span {
    flex: 8;
    margin-right: 10px;
    text-align: center;
    line-height: 45px;
  }
}
.content {
  width: 100%;
  flex: 1;
  overflow: auto;
  div {
    width: 80%;
    height: 80px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 20px 35px;
    padding: 10px;
    position: relative;
    p{
      position: absolute;
      top: 10px;
      left: 10px;
      z-index: 99;
    }
    img{
     position: absolute;
     top:0;
     left:0;
     width: 100%;
     height: 100%;

    }
  }
}
</style>
