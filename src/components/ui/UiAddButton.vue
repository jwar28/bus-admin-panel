<script lang="ts" setup>
defineProps<{
  btnComplement: string;
}>();
</script>

<template>
  <button class="btn btn-outline btn-success w-52 shadow-sm">
    Agregar {{ btnComplement }}
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
        d="M12 3a1 1 0 0 0-1 1v7H4a1 1 0 1 0 0 2h7v7a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2h-7V4a1 1 0 0 0-1-1z" />
    </svg>
  </button>
</template>
