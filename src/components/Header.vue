<template>
  <div class="header-div">
      <h1 style="font-size: xxx-large">Space Traders</h1>
      <h3 v-if="authStore.agent !== null">Agent: {{this.authStore.agent.symbol}}</h3>
      <h3 v-if="authStore.agent !== null">Credits: {{this.authStore.agent.credits}}</h3>
  </div>
  <hr>
</template>

<script>
import {useAuthStore} from "@/stores/auth.store";
export default {
  name: 'Header',
  data() {
    return {
      authStore: useAuthStore()
    };
  },
};
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