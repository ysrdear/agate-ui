<template>
    <span :class="['ag-tag', 'size-' + size, 'ag-' + type, { 'is-closable': closable, 'is-disabled': disabled }]">
        <span class="tag-inner">
            <slot></slot>
            <i class="ag-font-dismiss-circle-filled close-icon"></i>
        </span>
    </span>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

const props = {
    closable: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    type: {
        type: String as PropType<string>,
        default: 'level1',
        validator: str => {
            return ['level1', 'level2', 'level3'].indexOf(str) !== -1
        }
    },
    size: {
        type: String as PropType<string>,
        default: 'medium',
        validator: str => {
            return ['small', 'medium', 'large'].indexOf(str) !== -1
        }
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false
    }
}

export default defineComponent({
    name: 'AgTag',
    props: props,
    setup() {}
})
</script>
