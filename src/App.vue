<script setup>
function add() {
  alert("add")
}

function perfil() {
  alert('perfil')
}

</script>

<template>
  <header>
    <div class="row-logo">
      <div class="logo">
        <img alt="Vue logo" src="@/assets/imgs/icon.jpeg">
        <h1>OURFOOD</h1>
      </div>
      <div class="icons">
        <img @click="add" alt="carrinho" src="@/assets/imgs/carrinho.jpeg">
        <img @click="perfil" alt="perfil" src="@/assets/imgs/perfil.jpeg">
      </div>
    </div>
    <div class="btns">
      <button class="btn-links" @click="add">Lanches</button>
      <button class="btn-links" @click="add">Bebidas</button>
      <button class="btn-links" @click="add">Sobremesas</button>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <h2>Lanches</h2>
<script>
 import Carousel from '../components/Carousel.vue'; 

 export default {
  components: {
    Carousel,
  },
 };
</script>
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

.icons {
  display: flex;
  flex-direction: row;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);

}

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

.row-logo img {
  /* position: absolute; */
  width: 48px;
  height: 48px;
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
  background-color: rgb(192, 189, 189);

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
