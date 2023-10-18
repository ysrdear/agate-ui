<template>
    <div class="ag-header">
        <div class="header-logo" @click="onHome">
            <i :class="[logo, 'logo-icon']" v-if="logo"></i>
            <div class="logo-text">{{ text }}</div>
        </div>
        <div class="header-center">
            <slot name="center"></slot>
        </div>
        <div class="header-expand">
            <slot name="expand"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

const props = {
    logo: {
        type: String as PropType<string>
    },
    text: {
        type: String as PropType<String>,
        required: true
    }
}

export default defineComponent({
    name: 'AgHeader',
    props: props,
    methods: {
        onHome() {
            this.$emit('home')
        }
    }
})
</script>
