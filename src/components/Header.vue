<template>
  <div>
    <div class="header-container">
      <div class="logo-container">
        <img class="logo" :src="logo" alt="">

        <el-menu :default-active="currentMenu" class="menu" mode="horizontal" router="true" @select="handleSelect">
          <el-menu-item index="/">
            全部项目
          </el-menu-item>
          <el-menu-item index="/issue">
            发布项目
          </el-menu-item>
        </el-menu>
      </div>
      <div>
        <router-link :to="{path:'/sign', query: {type: 'login'}}">
          <el-button plain>登陆</el-button>
        </router-link>

        <router-link :to="{path:'/sign', query: {type: 'register'}}">
          <el-button plain>注册</el-button>
        </router-link>
      </div>
    </div>
  </div>

</template>


<script>
export default {
  data() {
    return {
      logo: require("@/assets/logo.png"),
      currentMenu: "/"
    };
  },

  created() {
    this.currentMenu = this.$route.path;
  }
};
</script>

<style scoped>
.header-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* margin-left: 100px; */
  /* margin-right: 100px; */
  width: 80%;
  margin: 0 auto;
}
.logo-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.logo {
  height: 50px;
}
.menu {
  margin-left: 30px;
}
</style>
