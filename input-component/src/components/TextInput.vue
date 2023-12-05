<template>
    <div>
        <div v-if="label">{{ label }}</div>
        <input type="text" :placeholder="placeholder" :style="inputStyles">
    </div>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        required: false,
    },
    placeholder: {
        type: String,
        required: false
    },
    size: {
        type: String,
        required: false,
        default: 'md',
        validator(value) {
            return ['sm', 'md', 'lg', 'xl'].includes(value)
        }
    }
})

const inputStyles = {
    fontSize: getFontSize(),
}

function getFontSize() {
    switch (props.size) {
        case 'sm':
            return '10px';
        case 'md':
            return '16px';
        case 'lg':
            return '24px';
        case 'xl':
            return '36px';
    }
}


</script>

<style  scoped>
input {
    outline: none;
    padding: 0.2rem 0.7rem;
}
</style>