<template>
  <div id="edit-blog" class="container">
    <h3 align="center">编辑博客</h3>
    <form>
      <!--博客标题-->
      <div class="form-group">
        <label>博客标题:</label>
        <el-input placeholder="请输入内容" v-model="blog.title" clearable></el-input>
      </div>
      <!--博客详情-->
      <div class="form-group">
        <label>博客详情:</label>
        <el-input type="textarea" :rows="2" v-model="blog.content" placeholder="请输入内容..."
                  :autosize="{ minRows: 4, maxRows: 6}"></el-input>
      </div>
      <!--博客作者-->
      <label>博客作者:</label>
      <el-select id="author" v-model="blog.author" placeholder="请选择">
        <el-option v-for="(author,index) in authors" :key="index" :label="author" :value="author"></el-option>
      </el-select>
      <!--博客类型-->
      <label>博客类型:</label>
      <!--注意：v-model的位置-->
      <el-checkbox-group v-model="blog.category">
        <el-checkbox v-for="(cate,index) in category" :key="index" :label="cate" :value="cate"></el-checkbox>
      </el-checkbox-group>
      <!--提交-->
      <el-button type="primary" @click.prevent="put">提交</el-button>
    </form>
    <!--提交完成后显示-->
    <div id="preview">
      <div><h4 align="center">博客内容:</h4></div>
      <h5> 标题: </h5>
      <p>{{blog.title}}</p>
      <h5> 内容:</h5>
      <p>{{blog.content}}</p>
      <h5> 博客类型:</h5>
      <p v-for="(cate,index) in blog.category" :key="index">{{cate}}</p>
      <h5> 作者:</h5>
      <p>{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        id: this.$route.params.id,
        blog: {},
        authors: ['longjian', 'henry', 'jack', 'Tom'],
        category: ['html', 'css', 'js', 'jquery', 'vue.js', 'node.js']
      }
    },
    methods: {
      // 读取服务器数据
      fetchData() {
        axios.get(`https://vueblogs-bca09.firebaseio.com/posts/${this.id}.json`)  //直接post blog对象到网址中
          .then((res) => {
            const h = this.$createElement;
            if (res.status === 200) {
              this.$notify({
                title: '获取信息',
                message: h('l', {style: 'color: teal'}, '开始编辑吧~'),
                duration: 1500,
                position: "top-right"
              })
              this.blog = res.data
            }
          })
      },
      // 编辑数据
      put() {
        axios.put(`https://vueblogs-bca09.firebaseio.com/posts/${this.id}.json`, this.blog)  //因编辑的是指定的一条数据,所以要指定好地址
          .then((res) => {
            this.$router.push({path:`/show/${this.id}`,query:{alert:'编辑成功~'}})
          })
      }
    },
    created() {
      this.fetchData()
    }
  }
</script>

<style lang="scss" scoped>
  #edit-blog {
    max-width: 920px;
    margin: 20px auto;

    #author {
      display: block;
      margin-bottom: 20px;
    }

    label {
      font-size: 16px;
      font-weight: 700;
      display: block;
      margin: 20px 0;
    }

    .el-checkbox-group {
      display: flex;

      label {
        margin: 0 20px 0 0;
      }
    }

    button {
      margin: 15px 0;
    }

    h5 {
      margin: 15px 0
    }

    #preview {
      margin: 10px 0;
      padding: 10px 20px;
      border: 1px dashed #e3e3e3;

      p {
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
      }
    }
  }

</style>
