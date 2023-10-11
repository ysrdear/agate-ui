<template>
    <button :class="['ag-button', 'size-' + size, 'ag-' + type, { 'is-disabled': disabled }]">
        <span class="button-inner">
            <i v-if="icon" :class="[icon, 'button-icon']"></i>
            <span class="button-text" v-if="$slots.default"><slot></slot></span>
            <i class="ag-font-chevron-down-regular button-icon" v-if="arrow"></i>
        </span>
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TYPES, SIZE } from './type'

const props = {
    icon: {
        type: String as PropType<string>
    },
    arrow: {
        type: Boolean as PropType<boolean>
    },
    type: {
        type: String as PropType<TYPES>,
        default: 'level1',
        validator: (str: TYPES) => {
            return ['level1', 'level2', 'level3'].indexOf(str) !== -1
        }
    },
    size: {
        type: String as PropType<SIZE>,
        default: 'medium',
        validator: (str: SIZE) => {
            return ['small', 'medium', 'large'].indexOf(str) !== -1
        }
    },
    disabled: {
        type: Boolean as PropType<Boolean>,
        default: false
    }
}

export default defineComponent({
    name: 'AgButton',
    props: props,
    setup(props) {}
})
</script>
