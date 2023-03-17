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
  <div class="stats stats-vertical lg:stats-horizontal shadow-lg ring-1 ring-primary">
    <div class="stat" v-for="item in statItems">
      <div class="stat-title">{{ item.statTitle }}</div>
      <div class="stat-value">{{ item.statValue }}</div>
      <div class="stat-desc">{{ item.statDesc }}</div>
    </div>
  </div>
</template>
