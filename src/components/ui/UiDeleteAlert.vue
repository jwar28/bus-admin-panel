<script lang="ts" setup>
defineProps<{
  message: string;
}>();
</script>

<template>
  <Transition name="fade">
    <div class="alert shadow-lg">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="stroke-info flex-shrink-0 w-6 h-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>{{ message }}</span>
      </div>
      <div class="flex-none">
        <button class="btn btn-sm btn-ghost" @click="$emit('cancel', onClick)">
          Cancelar
        </button>
        <button
          class="btn btn-sm btn-primary"
          @click="$emit('continue', onClick)">
          Aceptar
        </button>
      </div>
    </div>
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
