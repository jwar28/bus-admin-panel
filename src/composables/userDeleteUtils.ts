export default function userDeleteApi() {
  const confirmDelete = (showConfirmationModal: any) =>
    (showConfirmationModal.value = true);

  const deleteUsers = (selectedUsers: any, supabase: any) => {
    const usersToDelete = selectedUsers.value.map((user: any) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        date_added: user.date_added,
      };
    });
    usersToDelete.forEach(
      async (user: any) =>
        await supabase.from('usuarios').delete().eq('id_usuario', user.id)
    );
    location.reload();
  };

  const deleteAlertMessage = (selectedUsers: any) => {
    if (selectedUsers.value.length >= 2) {
      return 'Seguro que desea eliminar estos usuarios?';
    }
    return 'Seguro que desea eliminar este usuarios?';
  };

  return { confirmDelete, deleteUsers, deleteAlertMessage };
}
