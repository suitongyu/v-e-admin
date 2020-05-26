<template>
  <div class="management">
    <h1>文章添加</h1>

    <div class="select">
      <span>分类1</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <span>分类2</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>

    <div>
      <el-form :label-position="labelPosition" label-width="90px" :model="formLabelAlign">
        <el-form-item label="文章标题">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="SEO标题">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="关键词标签">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
        <el-form-item label="描述标签 ·" prop="desc">
          <el-input type="textarea" v-model="formLabelAlign.desc"></el-input>
        </el-form-item>
      </el-form>
    </div>
    
  </div>
</template>
    
<script>
// @ is an alias to /src

export default {
  name: "Management",
  components: {},
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
        desc: "",
        article:""
      }
    };
  },
  methods: {}
};
</script>

<style scoped>
.el-input-group__prepend {
  border-right: 0;
  width: 100px;
  text-align: center;
  padding: 5px 0px;
}
</style>