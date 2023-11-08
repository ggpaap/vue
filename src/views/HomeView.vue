<script setup>
import { ref, onMounted } from 'vue'

import CategoriasApi from "@/api/categorias";
const categoriasApi = new CategoriasApi();
import { useProdutosStore } from "../stores/produtos";
const produtosStore = useProdutosStore()

const categorias = ref([])

onMounted(async () => {
  const data = await categoriasApi.buscarTodasAsCategorias();
  categorias.value = data
  await produtosStore.buscarProdutos()
})
</script>
<template>
  <hr />
  <div>
    <template v-for="categoria in categorias" :key="categoria.id">
      <h3 class="title">{{ categoria.descricao }}</h3>
      <div v-if="produtosStore.produtosPorCategoria(categoria.id).length === 0">
        <p>Sem produtos nesta categoria</p>
      </div>
      <div v-else  class="produtoss">
        <div v-for="produto in produtosStore.produtosPorCategoria(categoria.id)" class="produtos">
          <img :src="produto.capa?.file" alt="Imagem" class="imagem">
          <p>{{ produto.nome }}</p>
          <p>{{ produto.preco }}</p>
        </div>
      </div>

    </template>
  </div>
</template>

<style scoped>
header span {
  padding: 0 20px;
}

h3 {
  font-family: "Times New Roman", Times, serif;
}

.title {
  text-align: center;
  margin: 2rem 0;
}

.produto {
  display: inline-block;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  text-align: center;
  max-width: 200px;
  width: 30%;
}

.produto img {
  max-width: 100%;
}

.sem-produtos {
  font-style: italic;
  text-align: center;
  color: #888;
  margin-top: 10px;
}

.imagem {
  width: 200px;
  height: 200px;
}

.produtos {
  display: flex;
  flex-direction: column;
}

.produtoss{
  display: flex;
  flex-direction: row;
}
</style>
