<template>
    <div class="products">
      <h1>Список товаров</h1>
      <button @click="sortAscending">Сортировать по возрастанию</button>
      <button @click="sortDescending">Сортировать по убыванию</button>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - {{ product.price }} руб.
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductList',
    data() {
      return {
        products: [
          { id: 1, name: 'Товар 1', price: 100 },
          { id: 2, name: 'Товар 2', price: 50 },
          { id: 3, name: 'Товар 3', price: 200 },
        ],
      };
    },
    methods: {
      sortAscending() {
        this.products.sort((a, b) => a.price - b.price);
      },
      sortDescending() {
        this.products.sort((a, b) => b.price - a.price);
      },
    },
  };
  </script>
  
  <style scoped>
  .products {
    margin: 20px;
  }
  button {
    margin: 5px;
    padding: 10px;
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background: #0056b3;
  }
  ul {
    list-style: none;
  }
  li {
    margin: 5px 0;
  }
  </style>
  