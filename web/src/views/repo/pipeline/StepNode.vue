<template>
  <div class="border border-gray-200 rounded-md p-2">
    <div class="text-gray-500 text-xl">{{ data.name }} ({{ data.image }})</div>

    <div class="text-gray-600">
      <div v-for="command in data.commands" :key="command" class="flex items-center gap-x-2">
        <div class="text-gray-500">$</div>
        <div class="text-gray-300">{{ command }}</div>
      </div>
    </div>
    <Handle id="a" type="target" :position="Position.Top" :style="sourceHandleStyleA" />
    <Handle id="b" type="source" :position="Position.Bottom" :style="sourceHandleStyleB" />
  </div>
</template>

<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core';
import { computed } from 'vue';

defineProps<{
  data: {
    name: string;
    image: string;
    commands: string[];
  };
}>();

const sourceHandleStyleA = computed(() => ({ filter: 'invert(100%)', top: '-5px', width: '10px', height: '10px' }));

const sourceHandleStyleB = computed(() => ({
  filter: 'invert(100%)',
  width: '10px',
  height: '10px',
  bottom: '-5px',
  top: 'auto',
}));
</script>
