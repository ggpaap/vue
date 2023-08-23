<script setup>
import{ref, onMounted} from 'vue'
import genreService from '../services/genres.js';

const genres = ref([])
const currentGenre = ref ({
  name: ''
})


onMounted(async() => {
  const data = await genreService.getAllGenres()
  console.log(data)
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
  
  <hr/>
  <ul>
    <li v-for="genre in genres" :key="genre.id">{{ genre.name }}</li>
  </ul>

</template>

<style scoped>
header {

}
header span {
  padding: 0 20px;
}



h3{
  font-family: "Times New Roman", Times, serif;
  text-align: center;
}
.title {
  text-align: center;
  margin: 2rem 0;
}

</style>
