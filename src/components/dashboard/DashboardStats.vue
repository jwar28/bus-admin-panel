<script lang="ts" setup>
const supabase = useSupabaseClient();

let { data: usuarios } = await supabase.from("usuarios").select("*");
let { data: buses } = await supabase.from("buses").select("*");
let { data: paradas } = await supabase.from("paradas").select("*");

const getArrayLength = async (array: any): Promise<String> => array?.length;

const statItems = [
  {
    statTitle: "Usuarios",
    statValue: await getArrayLength(usuarios),
    statDesc: "Usuarios totales",
  },
  {
    statTitle: "Paradas",
    statValue: await getArrayLength(paradas),
    statDesc: "Paradas totales",
  },
  {
    statTitle: "Buses",
    statValue: await getArrayLength(buses),
    statDesc: "Buses totales",
  },
];
</script>

<template>
  <div class="max-w-4xl w-full flex flex-wrap justify-evenly gap-10">
    <div
      class="stats shadow-xl ring-2 ring-gray-200"
      v-for="item in statItems"
    >
      <div class="stat w-40 text-center">
        <div class="stat-title text-base-content text-lg font-medium">
          {{ item.statTitle }}
        </div>
        <div class="stat-value text-primary">{{ item.statValue }}</div>
        <div class="stat-desc text-base-content">{{ item.statDesc }}</div>
      </div>
    </div>
  </div>
</template>
