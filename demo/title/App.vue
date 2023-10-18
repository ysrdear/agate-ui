<template>
    <div class="wrap">
        <ag-title text="标题1">
            <template #expand>
                <a>测试</a>
            </template>
        </ag-title>

        <ag-title text="标题1" toggle>
            <template #expand>
                <a>测试</a>
            </template>
        </ag-title>

        <ag-title text="标题2" type="level2">
            <template #expand>
                <a>测试</a>
            </template>
        </ag-title>

        <ag-title text="标题2" type="level2" toggle @toggle="onToggle">
            <template #expand>
                <a>测试</a>
            </template>
        </ag-title>

        <ag-title text="标题3" type="level3">
            <template #expand>
                <a>测试</a>
            </template>
        </ag-title>

        <ag-title text="标题3" type="level3" toggle>
            <template #expand>
                <a>测试</a>
            </template>
        </ag-title>
    </div>
</template>

<script setup>
const onToggle = () => {
    console.log('toggle')
}
</script>

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
