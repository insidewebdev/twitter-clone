<template>
    <div>
        <label for="" v-if="props.label" class="block pl-3 ml-px text-sm font-medium text-gray-700">{{ props.label
        }}</label>
        <div class="mt-1">
            <input :value="props.modelValue" @input="event => emits('update:modelValue', event.target.value)"
                class="block w-full px-4 border-gray-300 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                :type="props.type" :placeholder="props.placeholder">
        </div>
    </div>
</template>
<script setup>
const emits = defineEmits(['update:modelValue'])

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    label: {
        type: String,
        default: null
    }
})

</script>