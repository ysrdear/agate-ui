<template>
    <div :class="['ag-title', 'ag-' + type]">
        <div class="title-label">
            <span :class="['title-toggle', { 'is-toggle': toggleStatus }]" v-if="toggle" @click="onToggle">
                <i class="ag-font-arrow-dropright"></i>
            </span>
            <span class="title-text">{{ text }}</span>
        </div>
        <div class="title-tip">
            <slot name="tip"></slot>
        </div>
        <div class="title-expand">
            <slot name="expand"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

const props = {
    text: {
        type: String as PropType<string>,
        default: '',
        required: true
    },
    toggle: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    defaultToggleStatus: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    type: {
        type: String as PropType<string>,
        default: 'level1',
        validator: str => {
            return ['level1', 'level2', 'level3'].indexOf(str) !== -1
        }
    }
}

export default defineComponent({
    name: 'AgTitle',
    props: props,
    data() {
        return {
            toggleStatus: this.defaultToggleStatus || false
        }
    },
    methods: {
        onToggle() {
            this.toggleStatus = !this.toggleStatus
            this.$emit('toggle', this.toggleStatus)
        }
    }
})
</script>
