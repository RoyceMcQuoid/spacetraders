<template>
  <main>
    <div>
      Home
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

const loadShips = async () => {
  if (!ships.value && authStore.agentToken) {
    await authStore.loadShips();
  }
};

onMounted(async () => {
  await loadShips();
})

</script>

<style>
</style>