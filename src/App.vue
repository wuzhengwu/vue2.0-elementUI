<template>
  <el-container class="maxHeight">
    <el-header height="8%">
      <v-header></v-header>
    </el-header>
    <el-container class="menuHeight">
      <el-aside class="el-col maxHeight" width="200px">
        <el-menu
          :default-active="$route.path"
          class="maxHeight"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router>
          <template v-for="(item,index) in $router.options.routes[0].children" v-if="!item.hidden">
            <el-menu-item :index="item.path"><i :class="item.class"></i>{{item.name}}</el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main class="el-col el-col-22">
        <section class="headCrumbs">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
            <template v-for="(item, index) in $route.meta">
              <el-breadcrumb-item key="index">{{item}}</el-breadcrumb-item>
            </template>
          </el-breadcrumb>
        </section>
        <section class="containerMain">
          <router-view></router-view>
        </section>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import header from './views/header/header.vue'
  export default {
    beforeCreate () {
      if (this.$route.path === '/') {
        this.$router.push({path: '/index'})
      }
    },
    components: {
      'v-header': header
    }
  }
</script>

<style>
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td { margin:0; padding:0; }
body { background:#fff; color:#555; font-size:14px; font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif; }
td,th,caption { font-size:14px; }
h1, h2, h3, h4, h5, h6 { font-weight:normal; font-size:100%; }
address, caption, cite, code, dfn, em, strong, th, var { font-style:normal; font-weight:normal;}
a { color:#555; text-decoration:none; }
a:hover { text-decoration:underline; }
img { border:none; }
ol,ul,li { list-style:none; }
input, textarea, select, button { font:14px Verdana,Helvetica,Arial,sans-serif; }
table { border-collapse:collapse; }

.clearfix:after {content: "."; display: block; height:0; clear:both; visibility: hidden;}
.clearfix { *zoom:1; }

html,body,#app,.maxHeight{height: 100%;}
.menuHeight{height: 92%;}

header {background: #409EFF; line-height: 5;}
.headCrumbs{height: 22px; background: #eff2f7; padding: 8px 0px 0px 15px;}
.containerMain{padding: 15px 0px;}
.el-pagination .el-select .el-input .el-input__inner{line-height: 28px;}
</style>
