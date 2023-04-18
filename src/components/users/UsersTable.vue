<script lang="ts" setup>
const supabase = useSupabaseClient();

const itemsSelected = ref<[]>([]);
const rowsPerPage = 10;
const searchField = ['name', 'email'];
const searchValue = ref();

let { data: usuarios } = await supabase
  .from('usuarios')
  .select('nombre, apellido, fecha_creacion, correo_electronico')
  .order('fecha_creacion', { ascending: false });

const headers = [
  { text: 'Nombre', value: 'name' },
  { text: 'Correo electronico', value: 'email' },
  { text: 'Fecha de creacion', value: 'date_added', sortable: true },
];

const items = usuarios?.map((user) => {
  return {
    name: user.nombre + ' ' + user.apellido,
    date_added: new Date(user.fecha_creacion).toLocaleDateString(),
    email: user.correo_electronico,
  };
});
</script>

<template>
  <div class="flex justify-around mb-5 w-full">
    <UiSearchbar
      :search-field="searchField"
      v-model:search-value="searchValue"
      category="usuario" />

    <UsersButtonGroup />
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
