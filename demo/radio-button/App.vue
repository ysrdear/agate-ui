<template>
    <div class="wrap">
        <ag-radio-button
            label="院校特色："
            :data="data"
            v-model="value"
            value-key="id"
            label-key="name"
        ></ag-radio-button>
        <ag-radio-button
            label="院校属地："
            :pre-data="preData"
            :data="data2"
            v-model="value2"
            value-key="id"
            label-key="name"
        ></ag-radio-button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

let value = ref(0)

let value2 = ref(0)

let preData = [
    {
        name: '全部',
        id: 0
    }
]

let data = [
    {
        name: '985',
        id: 1
    },
    {
        name: '211',
        id: 2
    },
    {
        name: '双一流',
        id: 3
    },
    {
        name: '强基计划',
        id: 4
    },
    {
        name: '公办',
        id: 5
    },
    {
        name: '民办',
        id: 6
    }
]

let data2 = [
    {
        name: '北京',
        id: '110000'
    },
    {
        name: '天津',
        id: '120000'
    },
    {
        name: '河北',
        id: '130000'
    },
    {
        name: '山西',
        id: '140000'
    },
    {
        name: '内蒙古',
        id: '150000'
    },
    {
        name: '辽宁',
        id: '210000'
    },
    {
        name: '吉林',
        id: '220000'
    },
    {
        name: '黑龙江',
        id: '230000'
    },
    {
        name: '上海',
        id: '310000'
    },
    {
        name: '江苏',
        id: '320000'
    },
    {
        name: '浙江',
        id: '330000'
    },
    {
        name: '安徽',
        id: '340000'
    },
    {
        name: '福建',
        id: '350000'
    },
    {
        name: '江西',
        id: '360000'
    },
    {
        name: '山东',
        id: '370000'
    },
    {
        name: '河南',
        id: '410000'
    },
    {
        name: '湖北',
        id: '420000'
    },
    {
        name: '湖南',
        id: '430000'
    },
    {
        name: '广东',
        id: '440000'
    },
    {
        name: '广西',
        id: '450000'
    },
    {
        name: '海南',
        id: '460000'
    },
    {
        name: '重庆',
        id: '500000'
    },
    {
        name: '四川',
        id: '510000'
    },
    {
        name: '贵州',
        id: '520000'
    },
    {
        name: '云南',
        id: '530000'
    },
    {
        name: '西藏',
        id: '540000'
    },
    {
        name: '陕西',
        id: '610000'
    },
    {
        name: '甘肃',
        id: '620000'
    },
    {
        name: '青海',
        id: '630000'
    },
    {
        name: '宁夏',
        id: '640000'
    },
    {
        name: '新疆',
        id: '650000'
    }
]
</script>

<style>
.wrap {
    margin: 20px;
}
</style>
