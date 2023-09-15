<template>
  <div v-for="ship in ships" class="box">
    <ShipDetail :ship="ship"/>
    <div>{{ship.registration.name}}</div>
  </div>
</template>

<script setup lang="ts">

import {useAuthStore} from "@/stores/auth.store";
import {computed} from "vue";
import type {Ship} from "@/models/Ship";
import ShipDetail from "@/components/ShipDetail.vue";


const authStore = useAuthStore();
const ships = computed<Ship[] | null>(() => authStore.ships);


</script>