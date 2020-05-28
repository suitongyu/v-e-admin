<template>
  <div class="management">
     <h1>栏目添加</h1>

        <!-- vuex  -->
      <p>{{$store.state.newName}}</p>
      <p>{{$store.state.Authorization}}</p>
      <button @click="getList">按钮</button>
  </div>

</template>
<script>
// @ is an alias to /src
import axios from '../../network/axios'
export default {
  name: "Management",
  components: {

  },
  data() {
    return {
     
    };
  },
  
  methods: {
    getList(){
       axios({
        method: "get",
        url: "getsections", //登录接口
        // data: result 
      })
        .then(res => {
          console.log(res.data);
          // this.userToken = "Bearer " + res.data.data.body.token;
          // 将用户token保存到vuex中
          // this.$store.commit("changeLogin", this.userToken); //token存入VUEX
          // this.$router.push({ path: "/column" });
          console.log("登录成功");
        })
        .catch(error => {
          console.log("账号或密码错误");
          console.log(error);
        });
    }
  }
};
</script>