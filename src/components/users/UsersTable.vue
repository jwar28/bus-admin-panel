<script lang="ts" setup>
const supabase = useSupabaseClient();
const { confirmDelete, deleteUsers, deleteAlertMessage } = userDeleteUtils();

const selectedUsers = ref<[]>([]);
const showConfirmationModal = ref(false);
const rowsPerPage = 10;

const searchField = ['name', 'email'];
const searchValue = ref();

const headers = (await getUserData(supabase)).headers;
const items = (await getUserData(supabase)).users;

// Delete user logic
const showConfirmAlert = () => confirmDelete(showConfirmationModal);

const getAlertMessage = () => deleteAlertMessage(selectedUsers);

const deleteSelectedUsers = () => deleteUsers(selectedUsers, supabase);
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
      <!-- Delete -->
      <UiDeleteButton
        btn-complement="Usuario"
        :disabled="selectedUsers.length < 1"
        @click="showConfirmAlert" />

      <!-- Edit -->
      <UiEditButton
        btn-complement="Usuario"
        :disabled="selectedUsers.length < 1 || selectedUsers.length >= 2" />

      <!-- Add -->
      <UiAddButton btn-complement="Usuario" for="my-modal" />
    </div>
  </div>

  <!-- Confirm alert -->
  <div class="mb-5">
    <UiDeleteAlert
      v-show="showConfirmationModal"
      :message="getAlertMessage()"
      @continue="deleteSelectedUsers"
      @cancel="showConfirmationModal = false" />
  </div>

  <!-- Table -->
  <EasyDataTable
    class="shadow-md"
    table-class-name="custom-table"
    v-model:items-selected="selectedUsers"
    buttons-pagination
    theme-color="#f0a202"
    :rows-per-page="rowsPerPage"
    :search-field="searchField"
    :search-value="searchValue"
    :headers="headers"
    :items="items" />

  <input type="checkbox" id="my-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
      <p class="py-4">
        You've been selected for a chance to get one year of subscription to use
        Wikipedia for free!
      </p>
      <div class="modal-action">
        <label for="my-modal" class="btn">Yay!</label>
      </div>
    </div>
  </div>
</template>
