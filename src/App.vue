<script setup>
import CabecalhoCompAdmin from "./components/CabecalhoCompAdmin.vue";
import CabecalhoCompNotLogged from "./components/CabecalhoCompNotLogged.vue";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
// import { checkTokenExpiration } from "./tokenExpiration";

// setInterval(checkTokenExpiration, 60000);

</script>
<template>
  <div>
    <div v-if="authStore.isLogged === true">
      <CabecalhoCompAdmin />
    </div>
  
    <div v-else>
      <CabecalhoCompNotLogged />
    </div>
  </div>
  <main>
    <router-view></router-view>
  </main>
</template>
<style scoped>
.carrinho {
  display: flex;
  flex-direction: row;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}

.perfil {
  display: flex;
  flex-direction: row;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}
.btn-links {
  border: 0;
  background-color: lightgray;
  padding: 0.5vw;
  width: 150px;
  margin: 0 1vw;
  border-radius: 5px;
}

.btn-links:hover {
  font-weight: bold;
  background-color: rgb(182, 167, 167);

}
</style>
