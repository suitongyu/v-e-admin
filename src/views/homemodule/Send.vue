<template>
  <div class="send">
    <h1>信息发送</h1>

    <div class="screen">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button type="primary">发送</el-button>
    </div>

    <div class="content-box">
      <el-row :gutter="8">
        <el-col :span="12">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>

    <!-- 输入框（改变vuex状态） -->
    <div>
      <h2>输入</h2>
        <p>{{$store.state.newName}}</p>

        <p>{{names}}</p>
      <p>
        <span>名称：</span>
        {{form.name}}
      </p>
      <p>
        <span>地址：</span>
        {{form.region}}
      </p>

      <el-button type="text" @click="dialogFormVisible = true">添加地址</el-button>

      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item labelfo="活动区域" :label-width="formLabelWidth">
            <!-- 下拉框 -->
            <!-- <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option v-for="(item,index) in sityList" :key="index" :label="item" :value="item">{{item}}</el-option>
            </el-select>-->

            <!-- 单选按钮 -->
            <el-radio
              v-model="form.region"
              v-for="(item,index) in sityList"
              :key="index"
              :label="item"
              :value="item"
            >{{item}}</el-radio>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false,fn($event)">确 定</el-button>
        </div>
      </el-dialog>

      <button data-id="000" @click="changeStore()">提交</button>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Send",
  components: {},
  data() {
    return {
      //课程列表
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "", //已选择的项目

      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      sityList: ["上海", "北京", "深圳"],
      formLabelWidth: "120px"
    };
  },
  methods: {
    //提交
    fn(e) {
      console.log(e);
      // console.log(num);
      console.log(this.form);
    },
    changeStore() {
        //设置store
        this.$store.commit('modifyAName',this.form)

        //取store值
        console.log(this.$store.state.newName);
        
    }
  },
  computed: {
    names(){
        return this.$store.state.newName
    }
  }
};
</script>
<style scoped>
.screen {
  display: flex;
  justify-content: space-between;
}

/* 中部内容部分 */

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 360px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>