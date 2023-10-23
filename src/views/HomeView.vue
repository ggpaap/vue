<script>
import CategoriasApi from "@/api/categorias";
const categoriasApi = new CategoriasApi();
export default {
  data() {
    return {
      categorias: [],
      categoria: {},
    };
  },
  async created() {
    this.categorias = await categoriasApi.buscarTodasAsCategorias();
  },
};
</script>
<template>  
  <hr/>
  <div>
    <h3 class="title" v-for="categoria in categorias" :key="categoria.id">{{ categoria.descricao }}</h3>
  </div>
</template>

<style scoped>
header span {
  padding: 0 20px;
}
h3{
  font-family: "Times New Roman", Times, serif;
}
.title {
  text-align: center;
  margin: 2rem 0;
}

</style>
