<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a href="/" class="navbar-brand">Long <i class="el-icon-service"></i></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/show" class="nav-link"><span>博客总览</span></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/add" class="nav-link"><span>写博客</span></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  nav {
    box-sizing: border-box;
    padding: 10px 20px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    box-shadow: 0 3px 10px #d4d4d4;
    opacity: 0.9;
    z-index: 99;
    #navbarSupportedContent{
      padding-left: 168px;
    }
    li{
      color: #000;
      font-weight: 700;
      margin: 0 10px;
    }
    .active {
      opacity: 0.5;
      span {
        padding-bottom: 10px;
        box-sizing: border-box;
        border-bottom: 2px silver solid;
        transition:all .2s;
      }
    }
  }


</style>
