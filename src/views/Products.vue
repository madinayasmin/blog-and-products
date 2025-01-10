<template>
    <div>
      <ProductList />
    </div>
  </template>
  
  <script>
  import ProductList from '../components/Products/ProductList.vue';
  
  export default {
    name: 'Products',
    components: {
      ProductList,
    },
  };
  </script>
  