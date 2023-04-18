<script lang="ts" setup>
const supabase = useSupabaseClient();

const itemsSelected = ref<[]>([]);
const rowsPerPage = 10;
const searchField = ['name', 'email'];
const searchValue = ref();

const headers = (await getUserData(supabase)).headers;
const items = (await getUserData(supabase)).users;

const addButtonClicked = ref(false);
</script>

<template>
  <div class="flex mb-5 w-full justify-between">
    <UiSearchbar
      :search-field="searchField"
      v-model:search-value="searchValue"
      category="usuario" />

    <UiCrudButtonGroup
      btn-complement="Usuario"
      :selected-data="itemsSelected"
      :on-click-add-button="() => (addButtonClicked = true)" />
  </div>

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
