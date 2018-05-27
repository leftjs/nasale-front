<template>
  <el-card style="width: 300px; margin-top: 20px;" shadow="hover">
    <img src="@/assets/coin_logo.jpeg" class="logo" alt="">
    <div class="content">
      <span class="title">泰达币(USDT)</span>
      <p class="summary">提供与美元等值的货币,具有很好的市场保值性， 是一个具收藏与价值与一体虚拟货币</p>
      <div class="info">
        <p>发行总量:2100万</p>
        <p>众筹数量:210万</p>
        <p>众筹单价:0.1元</p>
      </div>
    </div>
    <div style="text-align:right">
      <el-button size="mini" type="danger">购买</el-button>
    </div>
  </el-card>
</template>


<script>
export default {
  data() {
    return {
      coinLogo: require("@/assets/coin_logo.jpeg")
    };
  }
};
</script>


<style lang="scss" scoped>
.logo {
  width: 150px;
  height: 150px;
  object-fit: fill;
  border-radius: 75px;
}
.content {
  margin-top: 20px;
}
.info {
  text-align: center;
  font-size: 0.5rem;
  font-weight: 300;
  border-top: 1px solid lightgrey;
}
.title {
  font-size: 1rem;
  font-weight: 900;
}
.summary {
  font-size: 0.8rem;
  font-weight: 400;
  // text-align: left;
}
</style>
