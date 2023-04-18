export default async (supabase: any) => {
  let { data: usuarios } = await supabase
    .from('usuarios')
    .select('nombre, apellido, fecha_creacion, correo_electronico')
    .order('fecha_creacion', { ascending: false });

  const headers = [
    { text: 'Nombre', value: 'name' },
    { text: 'Correo electronico', value: 'email' },
    { text: 'Fecha de creacion', value: 'date_added', sortable: true },
  ];

  const users = usuarios?.map((user: any) => {
    return {
      name: user.nombre + ' ' + user.apellido,
      date_added: new Date(user.fecha_creacion).toLocaleDateString(),
      email: user.correo_electronico,
    };
  });

  return {
    headers,
    users,
  };
};
