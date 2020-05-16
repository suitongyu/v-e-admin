<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <el-container style=" height: 100vh;">
      <el-header>管理系统</el-header>
      <el-container>
        <!-- 左边导航栏 -->
        <el-aside :width="!isCollapse ? '65px' : '200px'">
          <el-switch v-model="isCollapse" active-color="#409EFF" inactive-color="#DCDFE6"></el-switch>
          <el-menu
            default-active="/column"
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
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu> -->

            <!-- <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">群发消息</span>
            </el-menu-item>-->

            <!-- <el-menu-item v-for="(item,i) in navList" :key="i" :index="'/' + subItem.path">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ item.authName }}</span>
              </template>
            </el-menu-item>-->

             <!-- 一级菜单  -->
            <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id">
              <!-- 一级菜单的模板区域 -->
              <template slot="title">
                <i :class="iconObj[item.id]"></i>
                <span>{{ item.authName}}</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item
                :index="'/' + subItem.path"
                v-for="subItem in item.children"
                :key="subItem.id"
                
              >
              <!-- @click="saveNavState('/' + subItem.path)" -->
                <!-- 导航开启路由模式：
                将index值作为导航路由-->
                <!-- 二级菜单的模板区域 -->
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>{{ subItem.authName}}</span>
                </template>
              </el-menu-item>
            </el-submenu>
           

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
      // menuList1: [
      //   { path: "home/column", authName: "栏目管理" },
      //   { path: "home/management", authName: "文章内容" },
      //   { path: "home/User", authName: "产品内容" },
      //   { path: "home/Personnel", authName: "图片内容" },
      //   { path: "home/Alarm", authName: "视频管理" },
      //   { path: "home/Alarm", authName: "功能管理" },
      //   { path: "home/Alarm", authName: "用户管理" },
      //   { path: "home/Alarm", authName: "首页配置" },
      //   { path: "home/Alarm", authName: "登录日志" }
      // ],

      // 左侧菜单数据
      iconObj: {
        "1": "iconfont icon-user",
        "2": "iconfont icon-tijikongjian",
        "3": "iconfont icon-shangpin",
        "4": "iconfont icon-danju",
        "5": "iconfont icon-baobiao"
      },
      //写死数据
      menuList: [
        {
          id: 1,
          authName: "栏目管理",
          path: "column",
          children: [
            {
              id: 11,
              authName: "栏目列表",
              path: "column",
              children: [],
              order: null
            },
             {
              id: 12,
              authName: "添加栏目",
              path: "column/add",
              children: [],
              order: null
            }
          ],
          order: 1
        },
        {
          id: 2,
          authName: "文章内容",
          path: "article",
          children: [
            {
              id: 21,
              authName: "文章列表",
              path: "article",
              children: [],
              order: null
            },
            {
              id: 22,
              authName: "文章发布",
              path: "article/add",
              children: [],
              order: null
            }
          ],
          order: 1
        }
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
body {
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
