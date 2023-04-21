<script lang="ts" setup>
defineProps<{
  btnComplement: string;
}>();
</script>

<template>
  <button
    class="btn btn-outline btn-error w-52 shadow-sm"
    @click="$emit('click', onClick)">
    Eliminar {{ btnComplement }}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 ml-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" />
    </svg>
  </button>
</template>
