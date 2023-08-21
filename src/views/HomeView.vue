<script setup>
import{ref, onMounted} from 'vue'
import genreService from '../services/genres.js';

const genres = ref([])
const currentGenre = ref ({
  name: ''
})


onMounted(async() => {
  const data = await genreService.getAllGenres()
  genres.value = data
})


async function save() {
  genreService.saveGenre(currentGenre.value)
  const data = await genreService.getAllGenres()
  genres.value = data
  currentGenre.value = { name: '' }

}


// async function deleteGenre(genre) {
  // await genreService.deleteGenre(genre)
  // const data = await genreService.getAllGenres()
  // genres.value = data
// }

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
