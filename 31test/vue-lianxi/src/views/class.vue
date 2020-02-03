<template>
  <div class="wrap">
    <div class="header">
      <b @click="$router.push('/home')">返回</b>
      <span>剧情列表</span>
      <i>按时间升序排序</i>
    </div>
    <van-search v-model="search" placeholder="请输入关键词" />
    <div class="content">
      <div
        v-for="item in itemlist.filter(item=>item.title.indexOf(search)!==-1)"
        :key="item.id"
        @click="todetail(item)"
      >
        <img :src="item.img" alt />
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      search: "",
      itemlist:[]
    };
  },
  computed: {
    ...mapState(["list"])
  },
  methods: {
    todetail(item) {
      this.$router.push({
        name: "detail",
        params: {
          item: item
        }
      });
    }
  },
  async created() {
    if (this.$route.params.class !== undefined) {
      sessionStorage.setItem("key", this.$route.params.class);
    }
      let res = await this.$http("post", "/itemlist", {
        key: sessionStorage.getItem("key")
      });
      if (res.data.code === 200) {
        this.itemlist = res.data.data;
        return;
      }
    
  }
};
</script>

<style lang='scss' scoped>
.wrap {
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
    flex: 7;
    line-height: 45px;
  }
  i {
    font-size: 12px;
    color: rgb(59, 206, 243);
    text-align: center;
    line-height: 45px;
    font-style: normal;
  }
}
.content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  overflow: auto;
  div {
    width: 45%;
    height: 200px;
    margin: 8px;
    img {
      width: 100%;
      height: 180px;
      border-radius: 10px;
    }
  }
}
</style>