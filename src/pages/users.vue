<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
});
</script>

<template>
  <div>
    <UiPageHeader page-name="Usuarios" />

    <div class="divider"></div>

    <UsersTable />
  </div>
</template>
