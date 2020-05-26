<template>
  <div class="send">
    <h1>文章列表</h1>

    <div class="screen">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <div class="flex" style="display: flex;">
        <el-input v-model="searchInput" placeholder="搜索内容"></el-input>
        <el-button type="primary">搜索</el-button>
      </div>
    </div>

    <!-- 表格 -->
    <div class="content-box">
      <el-table :data="tableData" style="width: 100%" :border="true">
        <el-table-column label="id">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>

        <el-table-column label="标题">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.title }}</span>
          </template>
        </el-table-column>

        <el-table-column label="分类">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.classify }}</span>
          </template>
        </el-table-column>

        <el-table-column label="发布人">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>

        <el-table-column label="日期">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 分页 -->
    <div class="block">
      <!-- <span class="demonstration">显示总数</span> -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000"
      ></el-pagination>
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
      searchInput: "",

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
      formLabelWidth: "120px",
      // 表格数据
      tableData: [
        {
          id: 1,
          title: "测试文章1",
          classify: "1123",
          name: "王小虎",
          date: "2016-05-02"
        },
        {
          id: 2,
          title: "测试文2",
          classify: "1123",
          name: "王小虎",
          date: "2016-05-02"
        },
        {
          id: 3,
          title: "测试文章3",
          classify: "1123",
          name: "王小虎",
          date: "2016-05-02"
        },
        {
          id: 4,
          title: "测试文章4",
          classify: "1123",
          name: "王小虎",
          date: "2016-05-02"
        }
      ]
    };
  },
  methods: {
    // 表格编辑
    handleEdit(index, row) {
      console.log(index, row);
    },
    //表格删除
    handleDelete(index, row) {
      console.log(index, row);
    },

    //提交
    fn(e) {
      console.log(e);
      // console.log(num);
      console.log(this.form);
    },
    changeStore() {
      //设置store
      this.$store.commit("modifyAName", this.form);

      //取store值
      console.log(this.$store.state.newName);
    }
  },
  computed: {
    names() {
      return this.$store.state.newName;
    }
  }
};
</script>
<style>
.screen {
  display: flex;
  /* justify-content: space-between; */
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

/* 表格样式*/
.content-box {
  margin-top: 10px;
}
.el-table .cell {
  text-align: center;
}
.el-button--mini {
  margin: 0 10px;
}
.el-button + .el-button {
  margin-left: 0;
}
</style>