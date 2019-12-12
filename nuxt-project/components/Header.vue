<template>
  <div class="header fixed">
    <ul class="nav">
      <li class="nav__item">
        <nuxt-link to="/">
          Top
        </nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link to="about">
          About
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<style>
a {
  color: inherit;
  text-decoration: none;
}
a:visited {
  color: inherit;
  text-decoration: none;
}
ul {
  list-style: none;
}
li {
  display: inline-block;
  margin: 0, 50px;
  letter-spacing: 1px;
  color: #000000;
  width: 200px;
}
.header {
  z-index: 0;
  height: 10%;
  width: 25%;
}
.nav {
  display: table;
  table-layout: fixed;
  height: 100%;
}
.nav__item {
  display: table-cell;
  vertical-align: middle;
}
.nav__item > a {
  display:block;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
}

.fixed {
  position: fixed;
  top: 0;
  right: 0;
}

.nav__item:hover {
  background-color: #000000;
  color:white;
}
</style>
