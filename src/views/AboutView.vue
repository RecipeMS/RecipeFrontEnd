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
  font-family: 'Montserrat', sans-serif;
  color: #444;
  margin: 50px;
}

h1 {
  text-align: center;
  margin-top: 50px;
  font-size: 3rem;
  color: #ff6600;
}

/* Slogan stilleri */
.slogan {
  text-align: center;
  margin: 20px 0;
  font-size: 1.2rem;
}

/* Vizyon ifadesi stilleri */
.vision {
  margin-top: 50px;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #555;
  
}

/* Özellik listesi stilleri */
.feature-list {
  margin-top: 50px;
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.feature-list li {
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.feature-list li:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.feature-list li h3 {
  font-size: 1.2rem;
  color: #ff6600;
}

.feature-list li p {
  font-size: 0.9rem;
  color: #777;
}
</style>
