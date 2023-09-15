<template>
  <main>
    <div>
      Home {{ agentName }}
    </div>
  </main>
</template>

<script setup lang="ts">
import {useAuthStore} from "@/stores/auth.store";
import {computed} from "vue";

const authStore = useAuthStore();
const agentName = computed<string | null>(() => authStore.agent.symbol);

</script>

<style>
</style>