<template>
  <div>
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value ?? '')"
      @blur="emit('blur')"
      :class="['form-control', { 'border-red-500': error }]"
    />
    <span class="text-red-400" v-show="error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
interface props {
  modelValue?: string | number;
  error?: string;
  type?: 'text' | 'number';
}
withDefaults(defineProps<props>(), {
  type: 'text',
});

const emit = defineEmits(['update:modelValue', 'blur']);
</script>

<style scoped>
@reference "@/style.css";
.form-label {
  @apply block text-gray-700 text-sm font-bold mb-2;
}
.form-control {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none;
}
</style>
