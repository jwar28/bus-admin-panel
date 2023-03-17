<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div>
    <!-- Page Header -->
    <UiPageHeader page-name="Dashboard" />

    <div class="divider"></div>

    <!-- Stats -->
    <div class="flex justify-center w-full">
      <DashboardStats />
    </div>

    <div class="divider"></div>

    <!-- Tables -->
    <div class="flex flex-wrap justify-evenly gap-3">
      <DashboardUsersTable />
      <DashboardUsersTable />
      <DashboardUsersTable />
    </div>
  </div>
</template>
