<template>
  <main>
    <div>
      Home {{ agentName }}
      <ShipList />
    </div>
  </main>
</template>

<script setup lang="ts">
import {useAuthStore} from "@/stores/auth.store";
import {computed, onMounted} from "vue";
import type {Ship} from "@/models/Ship";
import {API} from "@/api";
import ShipList from "@/components/ShipList.vue";

const authStore = useAuthStore();
const agentName = computed<string | null>(() => authStore.agent.symbol);
const ships = computed<Ship[] | null>(() => authStore.ships);

//TODO: loadships
//TODO: make component to show ship list
//TODO: display ship list component in home



const loadShips = async () => {
  if (!ships.value && authStore.agentToken) {
    try {
      const result = await API.getShipList(authStore.agentToken);
      console.log('result', result);
      if (result.data) {
        authStore.ships = result.data.data;
      }
    } catch (e) {
      console.log(e);
    }
  }
};

onMounted(async () => {
  await loadShips();
})

</script>

<style>
</style>