<template>
    <button :style="buttonStyles">
        <slot></slot>
    </button>
</template>

<script setup>
const props = defineProps({
    variant: {
        type: String,
        required: true,
        validator(value) {
            return ['primary', 'success', 'danger'].includes(value)
        }
    },
    size: {
        type: String,
        required: false,
        default: 'md',
        validator(value) {
            return ['sm', 'md', 'lg', 'xl'].includes(value);
        }
    }
})

const buttonStyles = {
    border: 'none',
    padding: '0.2rem 0.7rem',
    boxShadow: '0 0 5px rgba(0,0,0,0.4)',
    backgroundColor: getBackgroundColor(),
    color: '#fff',
    fontSize: getFontSize(),
}

function getBackgroundColor() {
    switch (props.variant) {
        case 'primary':
            return '#185cf0'
        case 'success':
            return '#07e074'
        case 'danger':
            return '#de3c64'
    }
}

function getFontSize() {
    switch (props.size) {
        case 'sm':
            return '12px';
        case 'md':
            return '16px';
        case 'lg':
            return '24px';
        case 'xl':
            return '36px';
    }
}
</script>

<style scoped>
button {
    transition: transform 0.1s ease-out;
}

button:hover {
    transform: translateY(2px);
}
</style>