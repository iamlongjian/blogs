<template>
  <div>
    <!--    <AddBlog></AddBlog>-->
    <!--    <ShowBlogs></ShowBlogs>-->
    <Header></Header>
    <transition name="trans" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  //添加博客组件
  import AddBlog from './components/AddBlog'
  import ShowBlogs from './components/showBlogs'
  import Header from './components/Header'

  export default {
    components: {
      AddBlog,
      ShowBlogs,
      Header
    },
  }
</script>

<style scoped>
  .trans-enter-active, .trans-leave-active {
    transition: all 0.2s;
  }

  .trans-enter, .trans-leave-to {
    opacity: 0;
    transform: translateX(10px);
  }
</style>
