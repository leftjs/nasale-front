<template>
  <div class="sign-container">

    <p class="input-p">
      <span>用户名:</span>
      <el-input placeholder="请输入用户名" v-model="username"></el-input>
    </p>
    <p class="input-p">
      <span>密码:</span>
      <el-input placeholder="请输入密码" v-model="password"></el-input>
    </p>

    <p class="input-p" v-show="type =='register'">
      <span>确认密码:</span>
      <el-input placeholder="请再次输入密码" v-model="repassword"></el-input>
    </p>
    <div class="group">
      <span v-show="type == 'register'">已有账号？
        <router-link :to="{path: '/sign', params:{type:'login'}}">登陆</router-link>
      </span>

      <div>
        <el-button plain size="mini" type="success">提交</el-button>
        <el-button plain size="mini" @click="reset">重置</el-button>
      </div>
    </div>

  </div>

</template>


<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      repassword: "",
      type: ""
    };
  },

  methods: {
    reset() {
      this.username = "";
      this.password = "";
      this.repassword = "";
    },
    getQuery() {
      this.type = this.$route.query.type;
    }
  },
  created() {
    this.type = this.$route.query.type;
  },
  watch: {
    $route: "getQuery"
  }
};
</script>

<style lang="scss" scoped>
.sign-container {
  width: 25%;
  margin: 0 auto;
}
.input-p {
  span {
    width: 100px;
    text-align: right;
  }
  .el-input {
    margin-left: 20px;
  }
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 10px auto;
}
.group {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  // margin: 20px auto;

  span {
    margin-right: 20px;
  }
  div {
    display: flex;
    flex-direction: row;
  }
}
</style>



