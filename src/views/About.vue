<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p><span>名称：</span>{{form.name}}</p>
    <p><span>地址：</span>{{form.region}}</p>

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
          </el-select> -->

          <!-- 单选按钮 -->
           <el-radio v-model="form.region" v-for="(item,index) in sityList" :key="index" :label="item" :value="item">{{item}}</el-radio>
           
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false,fn($event)">确 定</el-button>
      </div>
    </el-dialog>

    <button data-id="000" @click="fn($event)">提交</button>


    <div> 
    <tab-bar>
      <tab-bar-item>
        <div slot="text">11</div>
      </tab-bar-item>
      <tab-bar-item>
        <div slot="text">22</div>
      </tab-bar-item>
      <tab-bar-item>
        <div slot="text">33</div>
      </tab-bar-item>
    </tab-bar>
  </div>
  </div>

  


</template>
<script>
// @ is an alias to /src

 import TabBar from '@/components/common/tabbar/TabBar'
 import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
  name: "About",
  components: {
    TabBar,
    TabBarItem

  },
  data() {
    return {
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
      sityList:['上海','北京','深圳'],
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
   
  }
};
</script>