<template>
  <main>
    <h1>About Recipe Box</h1>
    <p class="slogan">
      Recipe Box is a simple app that allows you to organize and access all of your favorite recipes
      in one place!
    </p>

    <h2>Vision Statement</h2>
    <p class="vision">
      Our vision is to create an online recipe management system that enables food lovers to easily
      create, modify, search, and rate recipes from anywhere in the world. With our intuitive
      platform, users can unleash their creativity in the kitchen, discover new ingredients and
      techniques, and share their culinary masterpieces with the community. We aim to inspire a
      culture of cooking and sharing, where people from all walks of life can come together to
      exchange ideas and elevate their dining experience. Our online recipe management system will
      be the go-to destination for anyone who wants to explore the world of food and discover new
      flavors and cultures.
    </p>

    <h2>Features</h2>
    <ul class="feature-list">
      <li>View all of your recipes in one place</li>
      <li>Search for recipes by name</li>
      <li>Filter recipes by category</li>
      <li>Sort recipes by name, category, or date added</li>
      <li>Add new recipes</li>
      <li>Edit existing recipes</li>
      <li>Delete recipes</li>
    </ul>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

h1 {
  font-size: 3rem;
  margin-bottom: 0;
}

.slogan {
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 2rem;
}

.vision {
  font-size: 1.25rem;
  margin-top: 0;
  margin-bottom: 2rem;
}

.feature-list {
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 2rem;
}

.feature-list li {
  margin-bottom: 0.5rem;
}

.feature-list li::before {
  content: '✓ ';
}
</style>
