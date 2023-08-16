<script setup>
import{ref, onMounted} from 'vue'
import genreService from '../services/genres.js';

const genres = ref([])


onMounted(async() => {
  const response = await genreService.getAllGenres()
  genres.value = genres
})


function save() {
  genreService.saveGenre()

}

</script>

<template>
  <header>
    <h3>Lanches</h3> 
    <h3>Bebidas</h3>
    <h3>Sobremesas</h3>
  </header>
  <hr/><ul>
    <li v for="genre in genres" :Key="genre.id">{{ genre.name }}</li>
  </ul>

</template>
