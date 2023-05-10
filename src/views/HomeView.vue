<template>
  <div class="container">
      <div class="row">
        <div class="col-sm-6">Sol yarım</div>
        <div class="col-sm-6">Sağ yarım</div>
      </div>
    </div>
  <main>


    

    
    <h1>Recipe Box</h1>
    <p class="resim">
    <img
          alt="Ana sayfa resmi"
          class="danino_sef"
          src="@/assets/images/danino_sef.jpg"
          
        /></p>
    <p class="slogan">Organize and access all of your favorite recipes in one place!</p>
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
.resim{
  float: right;
  margin-left: 20px;
  max-width: 100%;
  height: auto;
}
.container {
  display: flex;
  flex-wrap: wrap;
}

.left-half {
  flex-basis: 50%;
  box-sizing: border-box;
  padding: 0 10px;
}

.right-half {
  flex-basis: 50%;
  box-sizing: border-box;
  padding: 0 10px;
}
</style>
