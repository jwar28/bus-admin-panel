<script lang="ts" setup>
defineProps({
  btnComplement: {
    type: String,
  },
  selectedData: {
    type: Array<Ref>,
    default: [],
  },
});

defineEmits([
  'update:selectedData',
  'clickDeleteButton',
  'clickEditButton',
  'clickAddButton',
]);
</script>

<template>
  <div class="flex justify-between gap-5">
    <button
      class="btn btn-outline btn-error w-52 shadow-sm"
      :disabled="selectedData.length < 1"
      @change="$emit('update:selectedData')"
      @click="$emit('clickDeleteButton')">
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
    <button
      class="btn btn-outline btn-warning shadow-sm"
      :disabled="selectedData.length > 1 || selectedData.length === 0"
      @change="$emit('update:selectedData')"
      @click="$emit('clickEditButton')">
      Editar {{ btnComplement }}
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
          d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z" />
      </svg>
    </button>
    <button
      class="btn btn-outline btn-success w-52 shadow-sm"
      @click="$emit('clickAddButton')">
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
  </div>
</template>
