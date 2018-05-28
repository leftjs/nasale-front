<template>
  <div class="container">
    <el-card style="padding: 50px;" body-style="width: 100%; padding: 0px;">
      <div class="notify">
        <div class="left">
          <el-form ref="token" :model="token" :rules="rules" label-width="120px">
            <el-form-item label="代币名称" prop="name">
              <el-input v-model="token.name"></el-input>
            </el-form-item>
            <el-form-item label="代币符号" prop="symbol">
              <el-input v-model="token.symbol"></el-input>
            </el-form-item>
            <el-form-item label="代币位数" prop="decimals">
              <el-input v-model="token.decimals"></el-input>
            </el-form-item>
            <el-form-item label="代币总量" prop="totalSupply">
              <el-input v-model="token.totalSupply"></el-input>
            </el-form-item>
            <el-form-item label="有赞api key" prop="key">
              <el-input v-model="token.key"></el-input>
            </el-form-item>
            <el-form-item label="有赞api secret" prop="secret">
              <el-input v-model="token.secret"></el-input>
            </el-form-item>
            <el-form-item>
              el-upload
            </el-form-item>
            <el-form-item style="text-align: left;">
              <el-button type="success" @click="onSubmit">发布</el-button>
              <el-button type="danger">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="right">
          <p class="title">注意事项</p>
          <p>1.代币符号必须唯一</p>
          <p>2.钱包中必须有所需数量的平台币</p>
          <p>3.申请代币的总量全部汇入用户的地址中</p>
          <p>4.用户所有代币由平台代售</p>
          <p>5.申请
            <a href="https://console.youzanyun.com/login" target="__blank">有赞云</a>并创建自用型应用获得api key和secret</p>
        </div>
      </div>

    </el-card>

  </div>
</template>


<script>
export default {
  data() {
    return {
      token: {
        name: "",
        symbol: "",
        decimals: "",
        totalSupply: "",
        key: ""
      },
      rules: {
        name: [{ required: true, message: "请输入代币名称", trigger: "blur" }],
        symbol: [
          { required: true, message: "请输入代币符号", trigger: "blur" }
        ],
        decimals: [
          { required: true, message: "请输入代币位数", trigger: "blur" }
        ],
        totalSupply: [
          { required: true, message: "请输入代币总量", trigger: "blur" }
        ]
      }
    };
  }
};
</script>


<style lang="scss" scoped>
.container {
  width: 80%;
  margin: 0 auto;
  .notify {
    width: 100%;
    display: flex;
    flex-direction: row;

    .left {
      width: 50%;
    }
    .right {
      width: 50%;

      p {
        font-size: 0.8rem;
        font-weight: 300;
      }
      .title {
        font-size: 1rem;
        font-weight: 900;
      }
    }
  }
}
</style>
