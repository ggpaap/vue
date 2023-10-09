<script setup>
  import { useRouter } from "vue-router";

const router = useRouter();

function goToLogin() {
  router.push('/login')
}

// function goToCadastro(){
//   router.push('/cadastro')
// }

function goToHome() {
  router.push('/')
}</script>
<template>
  <header>
    <div class="row-logo">
      <div class="logo">
        <img alt="Vue logo" @click="goToHome" src="@/assets/imgs/icon.jpeg">
        <h1>OURFOOD</h1>
      </div>
      <div class="icons">
        <img @click="goToLogin" alt="admin" src="@/assets/imgs/perfil.jpeg">
      </div>
    </div>
    <div class="btns">
    </div>
    <div id="app">
  </div>

  </header>
</template>

<style scoped>

.logo {
  display: flex;
  flex-direction: row;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}
.row-logo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.row-logo img {
 
 width: 48px;
 height: 48px;
}

.icons {
  display: flex;
  flex-direction: row;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);

}
.logo h1 {
  line-height: 0.3;
  max-height: 100vh;
  color: #FF842B;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 50px;
  margin-left: 1.5vw;
}

.btns {
  display: flex;
  flex-direction: row;
  justify-content: center;

  height: 30px;
  width: 100%;
  background-color: #F5F5F5;
  color: #EAEAEA;
  font-size: 1.5em;
  padding-left: 20px;
  font-family: 'Times New Roman', Times, serif;
  padding: 0.2px;
}
.logo h2 {
  line-height: 0.3;
  max-height: 100vh;
  color: #FF842B;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 50px;
  margin-left: 1.5vw;
}
</style>
