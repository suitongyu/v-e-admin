<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <el-container style=" height: 100vh;">
      <el-header>
        管理系统
      </el-header>
      <el-container>
        <!-- 左边导航栏 -->
        <el-aside :width="!isCollapse ? '65px' : '200px'">
          <el-switch v-model="isCollapse" active-color="#409EFF" inactive-color="#DCDFE6"></el-switch>
          <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="!isCollapse"
            background-color="#373f54"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
          >
            <!-- <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>-->

            <!-- <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">群发消息</span>
            </el-menu-item> -->

            <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ item.navItem }}</span>
              </template>
            </el-menu-item>

          </el-menu>
        </el-aside>
        <!-- 右边内容部分 -->
        <el-main>
          <router-view></router-view>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      navList: [
        { name: "/home/send", navItem: "信息发送" },
        { name: "/home/management", navItem: "课程管理" },
        { name: "/home/User", navItem: "用户管理" },
        { name: "/home/Personnel", navItem: "人员数据" },
        { name: "/home/Alarm", navItem: "报警中心" }
      ],
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
body{
  margin: 0;
  padding: 0;
}
.el-switch {
  display: flex;
  justify-content: center;
}
.el-menu {
  border: 0;
}

.el-header,
.el-footer {
  background-color: #30a5eb;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #373f54;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center; */
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
