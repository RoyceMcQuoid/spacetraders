<template>
  <div>
    <div>Name: {{ ship.registration.name }}</div>
    <div>Symbol: {{ ship.symbol }}</div>
    <div>Location: {{ ship.nav.systemSymbol }} </div>
  </div>
</template>

<script setup lang="ts">
import {ShipObject} from "@/models/Ship";

defineProps({ship: ShipObject});
</script>