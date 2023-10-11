<template>
    <div class="wrap">
        <div class="title">链接</div>
        <a>这是一个链接</a>
    </div>
    <div class="wrap">
        <div class="title">颜色</div>
        <span class="block">默认字体颜色</span>
        <span class="block font-level1">常规文字</span>
        <span class="block font-level2">次要文字</span>
        <span class="block font-level3">占位文字</span>

        <span class="block font-blue">蓝色</span>
        <span class="block font-green">绿色</span>
        <span class="block font-yellow">黄色</span>
        <span class="block font-red">红色</span>
    </div>
    <div class="wrap">
        <div class="title">占位滚动条</div>
        <div class="inner ag-scrollbar" style="width: 200px; height: 100px; overflow: auto">
            <div style="height: 200px; width: 500px"></div>
        </div>
    </div>
</template>

<script setup></script>

<style>
.wrap {
    margin: 20px;
    .title {
        font-size: 16px;
    }

    > * {
        margin: 10px;
    }

    .block {
        display: inline-block;
    }
}
</style>
