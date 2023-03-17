<script lang="ts" setup>
defineProps({
  pageName: String,
});
</script>

<template>
  <h1 class="text-3xl font-semibold mb-5 text-center lg:text-start">{{ pageName }}</h1>
</template>
