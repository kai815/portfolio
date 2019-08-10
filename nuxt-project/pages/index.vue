<template>
  <div class="container">
    <div>
      <!-- <logo /> -->
      <h1 class="title">
        Hideo Kaizuka
      </h1>
      <h2 class="subtitle">
        I'm a developer
      </h2>
      <nav class="glova-nav">
        <ul class="nav-menu">
          <li>works</li>
          <li>blogs</li>
          <li>about</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
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
  font-weight: 300;
  font-size: 100px;
  color: #000000;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #000000;
  word-spacing: 5px;
  padding-top: 15px;
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
</style>
