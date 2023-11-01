import {reactive, computed} from 'vue'
import { defineStore } from "pinia";
import ProdutosApi from '../api/produtos'
const produtosApi = new ProdutosApi()

export const useProdutosStore = defineStore("produtos", () => {
  const state = reactive({
    produtos: [],
  })

  const produtos = computed(() => state.produtos)
  const produtosPorCategoria = computed(() => {
    return id => state.produtos.filter(p => p.categoria.id == id)
  })

  const buscarProdutos = async () => {
    const produtos =  await produtosApi.buscarTodosOsProdutos()
    state.produtos = produtos
  }

  return { produtos, produtosPorCategoria, buscarProdutos }
  
});