<template>
    <div class="articles">
      <h1>Статьи & Новости</h1>
      <div v-for="article in articles" :key="article.id" class="article">
        <img :src="article.image" :alt="article.title" />
        <div class="content">
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
          <small>{{ article.date }}</small>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ArticleList',
    data() {
      return {
        articles: [
          {
            id: 1,
            title: 'Первая статья',
            description: 'Описание первой статьи.',
            date: '2025-01-01',
            image: 'https://via.placeholder.com/150',
          },
          {
            id: 2,
            title: 'Вторая статья',
            description: 'Описание второй статьи.',
            date: '2025-01-02',
            image: 'https://via.placeholder.com/150',
          },
          {
            id: 3,
            title: 'Третья статья',
            description: 'Описание третьей статьи.',
            date: '2025-01-03',
            image: 'https://via.placeholder.com/150',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .articles {
    margin: 20px;
  }
  .article {
    display: flex;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    padding: 10px;
  }
  .article img {
    width: 150px;
    margin-right: 20px;
  }
  .content {
    display: flex;
    flex-direction: column;
  }
  </style>
  