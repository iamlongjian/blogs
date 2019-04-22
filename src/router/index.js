import Vue from 'vue'
import VueRouter from 'vue-router'
import AddBlog from "../components/AddBlog";
import showBlogs from "../components/showBlogs";
import BlogDetails from "../components/BlogDetails";
import Edit from "../components/Edit";

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {path:'/add',component:AddBlog},
    {path:'/show',component:showBlogs},
    {path:'/show/:id',component:BlogDetails},
    {path:'/edit/:id',component:Edit}, // 因为需要传递ID 所以要提供占位符
    {path:'/',redirect:'/show'}
  ],
  linkActiveClass:'active',
  mode:'history' //地址栏省略井号
})
