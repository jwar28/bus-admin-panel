<script lang="ts" setup>
defineProps<{
  pageName: string;
}>();
</script>

<template>
  <h1 class="text-3xl font-semibold text-center lg:text-start">
    {{ pageName }}
  </h1>
</template>
