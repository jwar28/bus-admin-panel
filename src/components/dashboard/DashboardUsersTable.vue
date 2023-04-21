<script lang="ts" setup>
const supabase = useSupabaseClient();

let { data: usuarios } = await supabase
  .from('usuarios')
  .select('nombre, apellido, fecha_creacion')
  .order('fecha_creacion', { ascending: false })
  .limit(5);
</script>

<template>
  <DashboardTableLayout
    table-title="Usuarios creados recientemente"
    table-path="/users">
    <table class="table w-full">
      <thead>
        <!-- headers -->
        <tr>
          <th class="bg-white">Nombre</th>
          <th class="bg-white">Fecha de creacion</th>
        </tr>
      </thead>
      <tbody>
        <!-- rows -->
        <tr v-for="(users, index) in usuarios">
          <td>{{ users.nombre + ' ' + users.apellido }}</td>
          <td class="text-center">
            {{ new Date(users.fecha_creacion).toLocaleDateString() }}
          </td>
        </tr>
      </tbody>
    </table>
  </DashboardTableLayout>
</template>
