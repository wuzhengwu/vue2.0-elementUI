<template>
    <div>
        <img src="../../assets/img/logo.svg" alt="logo" class="header-logo">
        <el-dropdown class="header-box" trigger="click">
            <span class="el-dropdown-link">
                <img src="../../assets/img/avatar.png" alt="avatar" class="header-avatar">
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
</script>

<style scoped>
.header-logo {
    display: inline-block;
    vertical-align: middle;
}
.header-box {
    float: right;
}
.header-box .el-dropdown-link{
    display: inline-block;
}
.header-avatar {
    border: 0 none;
    border-radius: 50%;
    width: 40px;
    vertical-align: middle;
}
</style>
