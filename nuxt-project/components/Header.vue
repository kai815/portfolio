<template>
  <div class="header-nav">
    <header>
      <nav class="nav fixed background-white" :class="{ 'nav-open' : navigationOpen }">
        <div v-show="!navigationOpen" class="header-nav-label fixed" @click="openNavigation">
          <font-awesome-icon class="fa-2x" :icon="['fas', 'bars']" />
        </div>
        <div class="close-icon" :class="{ 'fixed' : navigationOpen }" @click="closeNavigation">
          <font-awesome-icon class="fa-1x" icon="times" />
        </div>
        <ul class="display-flex__justifyend">
          <li class="nav__item" @click="closeNavigation">
            <nuxt-link to="/">
              Top
            </nuxt-link>
          </li>
          <li class="nav__item" @click="closeNavigation">
            <nuxt-link to="/about">
              About
            </nuxt-link>
          </li>
          <li class="nav__item" @click="closeNavigation">
            <nuxt-link to="/works">
              Works
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navigationOpen: false
    }
  },
  methods: {
    openNavigation () {
      this.navigationOpen = true
    },
    closeNavigation () {
      setTimeout(function () {
        this.navigationOpen = false
      }.bind(this), 10)
    }
  }
}
</script>
<style scoped>
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
}

.fixed {
  position: fixed;
  top: 0;
  right: 0;
}

.header-nav {
  width: 100%;
  height: 100%;
}

.header-nav-label {
  display: none;
  z-index: 2;
}
.background-white {
  background-color:#FFF;
  opacity: 0.95;
}
.nav {
  z-index: 2;
  width: 100%;
}

.nav__item > a {
  display:block;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  font-size: 4vh
}
.close-icon {
  display: none;
}
.display-flex__justifyend {
  display: flex;
  justify-content: flex-end;
}

/* スマホ時 */
@media (max-width: 767px) {
  .header-nav-label {
    color: #000;
    text-align: center;
    cursor: pointer;
    display: block;
    padding: 10px;
  }
  .nav {
    top: -130px;
    left: 0;
    right: 0;
    margin: 0;
  }
  .nav-open {
    width: 100%;
    height: 100%;
    text-align: center;
    background-color:#FFF;
    opacity: 0.95;
    top: auto;
    right: auto;
    left: auto;
    bottom: auto;
    position: fixed;
  }
  .nav-open > ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .close-icon {
    display: block;
    padding: 10px;
    cursor: pointer;
  }

}
.slide-enter-active .slide-leave-active {
  transition: all 1s ease-in-out 0s;
}
.nav__item{
  position: relative;
}
.nav__item::before {
  content: "";
  width: 0;
  height: 2px;
  position: absolute;
  bottom:2px;
  background: #000000;
  transition: width ease .3s;
}
.nav__item:hover::before {
  width:100%
}
</style>
