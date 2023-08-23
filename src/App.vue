<script setup>
</script>

<template>
  <header>
    <div class="logo">
      <img alt="Vue logo" src="@/assets/imgs/icon.jpeg">
      <h1>OURFOOD</h1>
      <img alt="carrinho" src="@/assets/imgs/carrinho.jpg">
      <img alt="perfil" src="@/assets/imgs/perfil.jpg">

    </div>
      <div class="btns">
        <button class="btn-links" @click="add">lanches</button>
        <button class="btn-links" @click="add">Bebidas</button>
        <button class="btn-links" @click="add">Sobremesas</button>
      </div>    
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.logo {
  display: flex;
  flex-direction: row;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}

.logo img {
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
</style>
