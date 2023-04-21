<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s ease;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>
