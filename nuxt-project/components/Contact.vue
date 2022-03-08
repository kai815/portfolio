<template>
  <div>
    <section class="sec-contents">
      <ul class="acount-lists">
        <li class="acount-lists-item twitter-contact">
          <a href="https://twitter.com/yuruwacha" target="_blank"><font-awesome-icon class="fa-2x fa-fw icon-margin" :icon="['fab', 'twitter']" /><span>Twitter</span></a>
        </li>
        <li class="acount-lists-item github-contact">
          <a href="https://github.com/kai815" target="_blank"><font-awesome-icon class="fa-2x fa-fw icon-margin" :icon="['fab', 'github']" /><span>Github</span></a>
        </li>
        <li class="acount-lists-item mail-contact">
          <a href="mailto:hideo.kaizuka815@gmail.com"><font-awesome-icon class="fa-2x fa-fw icon-margin" :icon="['fas', 'envelope']" /><span>Mail</span></a>
        </li>
        <li class="acount-lists-item yuruwach-border yuruwach-color">
          <a href="https://yuruwacha.com/" target="_blank"><font-awesome-icon class="fa-2x fa-fw icon-margin" :icon="['fas', 'pen']" /><span>Blog</span></a>
        </li>
      </ul>
    </section>
  </div>
</template>
<style scoped>
a {
  color: inherit;
  text-decoration: none;
}

.acount-lists{
  list-style: none;
  width: 100%;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.acount-lists-item {
  border: #000000 solid 2px;
  height: 100%;
  width: 49%;
  margin-top: 10px;
}

@media (max-width: 767px) {
  .acount-lists-item {
    width: 100%;
    margin-top: 10px;
  }
}
.acount-lists-item > a{
  padding: 10px;
  display: inline-block;
  height: 100%;
  width: 100%;
}
.icon-margin {
  margin-right: 10px;
  vertical-align: middle;
}
.twitter-contact {
  border: #000000 solid 2px;
  color:#000000;
  position: relative;
}
.twitter-contact::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color:#00BFFF;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  transition: transform ease .3s;
}
.twitter-contact:hover {
  color: #fff;
  border: #00BFFF solid 2px;
}
.twitter-contact:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}
.github-contact {
  border: #24292e solid 2px;
  color:#24292e;
  position: relative;
}
.github-contact::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color:#24292e;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  transition: transform ease .3s;
}
.github-contact:hover {
  color:#FFFFFF;
  border: #24292e solid 2px;
}
.github-contact:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}
.mail-contact {
  border: #161414 solid 2px;
  color: #161414;
  position: relative;
}
.mail-contact::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: #161414;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  transition: transform ease .3s;
}
.mail-contact:hover {
  color:#FFFFFF;
  border: #161414 solid 2px;
}
.mail-contact:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}
.yuruwach-border {
  border: #000000 solid 2px;
}
.yuruwach-color {
  color: #000000;
}
.yuruwach-color:hover {
  background-color: #594321;
  border: #594321 solid 2px;
  color:#FFFFFF;
}

</style>
