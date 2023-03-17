<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div>
    <UiPageHeader page-name="Dashboard" />

    <div class="flex justify-center w-full">
      <DashboardStats />
    </div>
  </div>
</template>
