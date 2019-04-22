<template>
  <!--  v-theme为自定义指令-->
  <div id="show-blogs" class="container">
    <Alert v-if="alert" :msg='alert'></Alert>
    <h1 class="title text-center"><i class="el-icon-service"></i></h1>
    <div class="input-group">
      <el-input placeholder="搜索" v-model="search" clearable></el-input>
    </div>
    <div v-for="blog in filterBlog" :key="blog.id" class="single-blog">
      <router-link :to="'/show/' + blog.id">
        <h5 id="blog-title" v-rainbow>{{blog.title | upper | formatTitle}}</h5>
        <blockquote class="blockquote mb-0">
          <p id="blog-content">{{blog.content | format}}</p>
        </blockquote>
      </router-link>
      <blockquote class="blockquote mb-0" id="card-footer">
        <p id="blog-author"><i class="fa fa-pencil fa-fw"></i>&nbsp;&nbsp;{{blog.author}}</p>
        <p id="blog-comment"><i class="fa fa-twitch fa-fw"></i>&nbsp;&nbsp;<span>58</span></p>
        <p id="blog-share"><i class="fa fa-share-square-o fa-fw"></i>&nbsp;&nbsp;</p>
      </blockquote>
      <hr>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Alert from './Alert.vue'
  

  export default {
    data() {
      return {
        blogs: [],
        search: '',
        num: 2,
        // Add传递过来的值
        alert:'',
      }
    },
    components:{Alert},
    computed: {
      // 搜索功能1
      filterBlog() {   //计算属性,需要交给V-for 便利循环
        return this.blogs.filter((blog) => { //filter 接收一个回调函数作为参数
          return blog.title.match(this.search.toLowerCase()) //match 返回符合条件的数据
        })
      }
    },
    //局部过滤器
    filters: {
      upper(val) {
        return val.toUpperCase();
      }
    },
    //自定义局部指令
    directives: {
      "rainbow": {
        bind(el, binding, vnode) {
          el.style.color = "#" + Math.random().toString(16).slice(2, 8)
        }
      },
      "theme": {
        bind(el, binding, vnode) {
          if (binding.value == 'wide') {
            console.log(binding)
            el.style.maxWidth = 1260 + 'px'
          } else if (binding.value == 'thin') {
            el.style.maxWidth = 560 + 'px'
          } else {
            el.style.maxWidth = 800 + 'px'
          }
        }
      }
    },
    methods: {
      fetchData(){
        axios.get('https://vueblogs-bca09.firebaseio.com/posts.json')
        .then((res) => {
          return res.data;  //拿到所有的对象(数据)
        })
        .then((data) => {
          var blogsArray = []
          for (let key in data) {
            // console.log(key)  //每个对象的唯一标识
            // console.log(data[key]) //每个对象
            data[key].id = key;
            blogsArray.unshift(data[key]);  //添加对象到空数组
            this.blogs = blogsArray //将有值的数组赋值给 页面需要遍历的blogs
          }
        })
      }
    },
    created() {
      if(this.$route.query.alert){
        this.alert = this.$route.query.alert
      }
      this.fetchData()
    }
  }
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: #0b8c76;
  }

  #show-blogs {
    max-width: 920px;
    margin: 20px auto;

    .title {
      margin: 15px 0;
    }
  }

  .single-blog {
    margin: 50px 0;

    #blog-title {
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
    }

    #blog-content {
      margin: 0 0 8px;
      font-size: 13px;
      line-height: 24px;
      color: #999;
    }


    #card-footer {
      display: flex;
      padding-bottom: 10px;
      #blog-author, #blog-comment, #blog-share {
        font-size: 12px;
        margin: 5px 20px 5px 0;
        color: #b4b4b4;
        cursor: pointer;
        display: inline;
      }

      #blog-comment {
        align-items: center;
      }

      #blog-comment:hover {
        color: #787878;
        transition: all .3s;
      }
    }
  }

  #basic-addon2 {
    font-size: 13px;
  }

  input[placeholder='搜索'] {
    font-size: 13px;
  }
</style>
