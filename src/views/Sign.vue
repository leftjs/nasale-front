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
      <span v-if="type == 'register'">已有账号?
        <router-link :to="{path: '/sign', query:{type:'login'}}">登陆</router-link>
      </span>
      <span v-else>没有账号?
        <router-link :to="{path: '/sign', query:{type:'register'}}">注册</router-link>
      </span>

      <div>
        <el-button plain size="mini" type="success" @click="submit">{{this.type == "register" ? "注册" : "登陆"}}</el-button>
        <el-button plain size="mini" @click="reset">重置</el-button>
      </div>
    </div>

  </div>

</template>


<script>
import axios from "@/utils/axios";
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
    },
    submit() {
      let { username, password, repassword } = this;
      if (!username || !password) {
        this.$message.error("请输入用户名或者密码");
        return;
      }
      if (username.length < 6 || password.length < 6) {
        this.$message.error("用户名密码长度不能小于6");
        return;
      }
      if (this.type == "register") {
        // 注册
        if (password !== repassword) {
          this.$message.error("两次输入密码不匹配，请检查");
          return;
        }
        axios
          .post("/user/signup", {
            username,
            password
          })
          .then(res => {
            console.log(res);
            if (res.status === 200) {
              // 注册成功

              this.$message.success("注册成功");
              this.$router.push({
                path: "/sign",
                query: {
                  type: "login"
                }
              });
            }
          })
          .catch(err => {
            let response = err.response || {};
            this.$message.error(response.errorMessage || response.data);
          });
      } else {
        // 登陆
        axios
          .post("/user/signin", {
            username,
            password
          })
          .then(res => {
            if (res.status === 200) {
              // 登陆成功
              const token = res.data;
              // console.log(token);
              this.$store.commit("login", token);
              this.$message.success("登陆成功");
            }
          })
          .catch(err => {
            // console.log(err.response);
            let response = err.response || {};
            this.$message.error(response.errorMessage || response.data);
          });
      }
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



