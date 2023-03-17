<script lang="ts" setup>
defineProps({
  tableTitle: String,
  tablePath: String,
});
</script>

<template>
  <div
    class="w-auto mb-5 rounded-md shadow-xl ring-2 ring-gray-200"
  >
    <!-- Titulo -->
    <p class="my-2 text-md text-center text-base-content font-medium">
      {{ tableTitle }}
    </p>

    <slot />

    
    <!-- See more button -->
    <div class="p-2 w-full flex justify-center">
      <a :href="tablePath" class="btn-sm flex justify-center items-center">
        Ver mas
        <svg
          aria-hidden="true"
          class="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>
