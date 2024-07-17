<template>
  <div class="header-div">
      <h1 style="font-size: xxx-large">Space Traders</h1>
      <h3 v-if="agent !== null">Agent: {{ agent.symbol}}</h3>
      <h3 v-if="agent !== null">Credits: {{ agent.credits}}</h3>
  </div>
  <hr>
</template>

<script setup lang="ts">
import {useAuthStore} from "@/stores/auth.store";
import {computed, onMounted} from "vue";
import {type Agent} from "@/models/Agent";

const authStore = useAuthStore();

const agent = computed<Agent | null>(() => authStore.agent)

onMounted(async () => {
  if(agent.value === null) {
    await authStore.loadAgent();
  }
})


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