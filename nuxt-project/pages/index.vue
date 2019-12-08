<template>
  <div class="container">
    <div id="p5Canvas">
      <HomeCanvas />
      <h1 class="title home-fadein">
        Hideo Kaizuka
      </h1>
      <h2 class="subtitle home-fadein">
        I'm a developer
      </h2>
      <nav class="gloval-nav">
        <ul class="nav-menu home-fadein">
          <li>works</li>
          <li>blogs</li>
          <li>
            <nuxt-link to="about">
              about
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import HomeCanvas from '~/components/HomeCanvas.vue'

export default {
  components: {
    HomeCanvas
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 350;
  font-size: 100px;
  color: #000000;
  letter-spacing: 0.5px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #000000;
  word-spacing: 5px;
  padding-top: 8px;
  padding-bottom: 70px;
}

.links {
  padding-top: 15px;
}

ul {
  list-style: none;
}
li {
  display: inline-block;
  margin: 0, 50px;
  letter-spacing: 1px;
  color: #000000;
  width: 250px;
}
.nav-menu {
  font-size: 25px;
}

@keyframes fadeIn {
    0% {
        opacity:0;
    }
    100% {
        opacity:1;
    }
}

.home-fadein {
  animation-name: fadeIn;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
}
</style>
