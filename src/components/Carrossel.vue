<template>
    <div class="carrossel">
      <carrossel :perPageCustom="[[0, 1], [576, 2], [768, 3], [992, 4], [1200, 5]]">
        <slide v-for="(card, index) in cards" :key="index">
          <div class="card">
    
            <h2>{{ card.title }}</h2>
            <p>{{ card.description }}</p>
          </div>
        </slide>
      </carrossel>
    </div>
</template>
  
  <script>
  import VueCarrossel from 'vue-carrossel';
  
  export default {
    components: {
      Carrossel: VueCarrossel.Carrossel,
      Slide: VueCarrossel.Slide,
    },
    data() {
      return {
        cards: [
          { title: 'Card 1', description: 'Descrição do Card 1' },
          { title: 'Card 2', description: 'Descrição do Card 2' },
          { title: 'Card 3', description: 'Descrição do Card 3' },
        
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  
  .carrossel {
    width: 100%;
  }
  
  .card {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  
  </style>
  