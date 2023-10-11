<template>
    <div class="wrap">
        <div class="title">小尺寸</div>
        <ag-button size="small">按钮</ag-button>
        <ag-button size="small" type="level2">按钮2</ag-button>
    </div>
    <div class="wrap">
        <div class="title">中等尺寸</div>
        <ag-button>按钮</ag-button>
        <ag-button disabled>按钮</ag-button>
        <ag-button type="level2">按钮2</ag-button>
        <ag-button type="level2" disabled>按钮2</ag-button>
        <ag-button icon="ag-font-folder-open-regular">按钮</ag-button>
        <ag-button icon="ag-font-folder-open-regular"></ag-button>
        <ag-button type="level2" arrow>按钮2</ag-button>
    </div>
    <div class="wrap">
        <div class="title">大尺寸</div>
        <ag-button size="large">按钮</ag-button>
        <ag-button size="large" type="level2">按钮2</ag-button>
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
}
</style>
