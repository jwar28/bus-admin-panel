import { User } from '~/types/user';

export default async (supabase: any) => {
  let { data: usuarios } = await supabase
    .from('usuarios')
    .select('id_usuario, nombre, apellido, fecha_creacion, correo_electronico')
    .order('fecha_creacion', { ascending: false });

  const headers = [
    { text: 'Nombre', value: 'name', sortable: true },
    { text: 'Correo electronico', value: 'email' },
    { text: 'Fecha de creacion', value: 'date_added', sortable: true },
  ];

  const users = usuarios?.map((user: User) => {
    return {
      name: user.nombre + ' ' + user.apellido,
      date_added: new Date(user.fecha_creacion).toLocaleDateString(),
      email: user.correo_electronico,
      id: user.id_usuario,
    };
  });

  return {
    headers,
    users,
  };
};
