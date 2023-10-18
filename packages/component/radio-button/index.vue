<template>
    <div class="ag-radio-button">
        <span class="radio-label" v-if="label" :style="{ width: labelWidth, flex: '0 0 ' + labelWidth }">
            {{ label }}
        </span>
        <div class="radio-wrap">
            <template v-if="preData && preData.length">
                <span
                    :class="['radio-button', { 'is-current': item[valueKey] === modelValue }]"
                    v-for="item in preData"
                    :key="item[valueKey]"
                    @click="onCurrent(item)"
                >
                    {{ item[labelKey] }}
                </span>
                <div class="radio-inner">
                    <span
                        :class="['radio-button', { 'is-current': item[valueKey] === modelValue }]"
                        v-for="item in data"
                        :key="item[valueKey]"
                        @click="onCurrent(item)"
                    >
                        {{ item[labelKey] }}
                    </span>
                </div>
            </template>
            <template v-else>
                <span
                    :class="['radio-button', { 'is-current': item[valueKey] === modelValue }]"
                    v-for="item in data"
                    :key="item[valueKey]"
                    @click="onCurrent(item)"
                >
                    {{ item[labelKey] }}
                </span>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type dataItem = {
    label?: string
    value?: string | number | boolean
}

export default defineComponent({
    name: 'AgRadioButton',
    props: {
        labelWidth: {
            type: String,
            default: '100px'
        },
        label: {
            type: String as PropType<string>
        },
        modelValue: {
            type: [Number, String, Boolean]
        },
        data: {
            type: Array as PropType<dataItem[]>
        },
        preData: {
            type: Array as PropType<dataItem[]>
        },
        valueKey: {
            type: String,
            default: 'value'
        },
        labelKey: {
            type: String,
            default: 'label'
        }
    },
    methods: {
        onCurrent(item) {
            //
            this.$emit('update:modelValue', item[this.valueKey])
        }
    }
})
</script>
