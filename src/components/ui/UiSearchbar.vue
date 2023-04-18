<script lang="ts" setup>
defineProps({
  searchField: Array<String>,
  searchValue: String,
});

defineEmits(['update:searchValue']);
</script>

<template>
  <div class="form-control w-96 shadow-sm">
    <label class="input-group w-full">
      <input
        type="text"
        placeholder="Buscar"
        class="input input-bordered w-full"
        :value="searchValue"
        @input="$emit('update:searchValue', $event.target.value)" />
      <span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg
      ></span>
    </label>
  </div>
</template>
