<template>
  <div class="header-div">
      <h1 style="font-size: xxx-large">Space Traders</h1>
      <h3 v-if="authStore.agent !== null">Agent: {{ agentName }}</h3>
      <h3 v-if="authStore.agent !== null">Credits: {{ credits }}</h3>
  </div>
  <hr>
</template>

<script setup lang="ts">
import {useAuthStore} from "@/stores/auth.store";
import {computed} from "vue";

const authStore = useAuthStore();

const agentName = computed<string | null>(() => authStore.agent.symbol);
const credits = computed<number | null>(() => authStore.agent.credits);
</script>

<style>

.header-div {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px 20px 4px;
  min-height: 100px;
}
</style>