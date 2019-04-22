<template>
  <div id="blogDetails">
    <Alert v-if="alert" :msg='alert'></Alert>
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <h4 id="title">{{blog.title}}</h4>
        <div class="config">
          <router-link :to="'/edit/' + id ">
            <el-button type="primary" icon="el-icon-edit"></el-button>
          </router-link>
          <el-button @click="delBlog(id,blog.title)" type="danger" icon="el-icon-delete"></el-button>
        </div>
        <!--重磅: 使用pre保持textarea文本格式-->
        <pre id="content">{{blog.content}}</pre>
        <p id="author">
          <i class="fa fa-user-o"></i>
          &nbsp;&nbsp;{{blog.author}}
        </p>
        <ul>
          <li>
            <i class="fa fa-book"></i>
            <span v-for="(cate,index) in blog.category" :key="index">&nbsp;{{cate}}&nbsp;</span>
          </li>
          <span id="report">
            <a href="#">举报文章</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;© 著作权归作者所有
          </span>
        </ul>
        <hr>
        <p id="webInfo" class="text-center">此网站为巩固知识所用,如有侵权,请联系微信。</p>
      </div>
      <div class="col-md-12 col-sm-12">
        <div id="personInfo"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Alert from "./Alert";
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}, //因为这是博客详情,所以拿到的是单条的博客信息
      alert:''
    };
  },
  components: { Alert },
  created() {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    axios
      .get(`https://vueblogs-bca09.firebaseio.com/posts/${this.id}.json`) //注意地址的格式
      .then(res => {
        this.blog = res.data;
      });
  },
  methods: {
    delBlog(id, title) {
      this.$confirm(`确认删除《${title}》吗?`, "删除", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          axios.delete(
            `https://vueblogs-bca09.firebaseio.com/posts/${id}.json`
          ); //使用delete方法即可删除数据
          // 延时执行,否则可能删除不成功
          let timeoutId = setTimeout(() => {
            this.$router.push({
              path: "/show",
              query: { alert: "删除成功" }
            });
            location.reload();
          }, 500);
          // 回收定时器
          timeoutId = null;
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#blogDetails {
  padding: 0 20px;
  max-width: 920px;
  margin: 20px auto;

  .dropdown-menu.show {
    min-width: 5rem;
    transform: translate3d(31px, -5px, 0px) !important;

    span {
      font-size: 14px;
    }
  }

  .config {
    margin: 15px 0;
  }

  #content {
    margin: 30px 0 50px 0;
    font-family: sans-serif;
    line-height: 24px;
    font-size: 13px;
    color: #242424;
    letter-spacing: 1px;
    white-space: pre-wrap; // 保留空白并且自动换行
  }

  #author {
    font-size: 13px;
    color: #9a9a9a;
  }

  ul,
  li {
    list-style: none;
    color: #c8c8c8;
    font-size: 12px;
    display: inline;

    i {
      margin-right: 5px;
    }

    span[id="report"] {
      display: inline;
      float: right;

      a {
        text-decoration: none;
        color: #c8c8c8;
      }
    }
  }

  #webInfo {
    color: #c8c8c8;
    font-size: 12px;
  }

  #personInfo {
    border-radius: 5px;
    box-shadow: 0 3px 10px #d4d4d4;
    width: 200px;
    height: 250px;
    background: url("../../static/images/code.png");
    background-position: 50% 50%;
    margin: 0 auto;
  }
}
</style>
