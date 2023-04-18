<script lang="ts" setup>
const supabase = useSupabaseClient();

const itemsSelected = ref<[]>([]);
const rowsPerPage = 10;
const searchField = ['name', 'email'];
const searchValue = ref();
const buttonsComplement = 'Usuario';

const headers = (await getUserData(supabase)).headers;
const items = (await getUserData(supabase)).users;
</script>

<template>
  <div class="flex mb-5 w-full justify-between">
    <!-- Searchbar -->
    <UiSearchbar
      :search-field="searchField"
      v-model:search-value="searchValue"
      category="usuario" />

    <!-- Crud buttons -->
    <div class="flex justify-between gap-5">
      <UiDeleteButton
        :btn-complement="buttonsComplement"
        :disabled="itemsSelected.length < 1" />
      <UiEditButton
        :btn-complement="buttonsComplement"
        :disabled="itemsSelected.length < 1 || itemsSelected.length >= 2" />
      <UiAddButton :btn-complement="buttonsComplement" />
    </div>
  </div>

  <!-- Table -->
  <EasyDataTable
    class="shadow-md"
    table-class-name="custom-table"
    v-model:items-selected="itemsSelected"
    buttons-pagination
    theme-color="#f0a202"
    :rows-per-page="rowsPerPage"
    :search-field="searchField"
    :search-value="searchValue"
    :headers="headers"
    :items="items" />
</template>
