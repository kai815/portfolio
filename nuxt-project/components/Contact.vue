<template>
  <div>
    <section class="sec-contents">
        <ul class="acount-lists">
          <li class="acount-lists-item twitter-border twitter-color"><a href="https://twitter.com/yuruwacha" target="_blank"><font-awesome-icon class="fa-2x fa-fw icon-margin" :icon="['fab', 'twitter']"/><span >Twitter</span></a></li>
          <li class="acount-lists-item github-border github-color"><a href="https://github.com/kai815" target="_blank"><font-awesome-icon class="fa-2x fa-fw icon-margin" :icon="['fab', 'github']"/><span>Github</span></a></li>
          <li class="acount-lists-item mail-border mail-color"><a href="mailto:hideo.kaizuka815@gmail.com"><font-awesome-icon class="fa-2x fa-fw icon-margin" :icon="['fas', 'envelope']"/><span>Mail</span></a></li>
          <li class="acount-lists-item yuruwach-border yuruwach-color"><a href="https://yuruwacha.com/" target="_blank"><font-awesome-icon class="fa-2x fa-fw icon-margin" :icon="['fas', 'pen']"/><span>Blog</span></a></li>
        </ul>
    </section>
  </div>
</template>
<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
/* .display-flex { */
/* } */

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
.twitter-border {
  border: #000000 solid 2px;
}
.twitter-color {
  color:#000000;
}
.twitter-color:hover {
  background-color:#00BFFF;
  border: #00BFFF solid 2px;
  color:#FFFFFF;
}
.github-border {
  border: #24292e solid 2px;
}
.github-color {
  color:#24292e;
}
.github-color:hover {
  background-color:#24292e;
  color:#FFFFFF;
}
.mail-border {
  border: #161414 solid 2px;
}
.mail-color {
  color: #161414;
}
.mail-color:hover {
  background-color: #161414;
  border: #161414 solid 2px;
  color:#FFFFFF;
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
<script>
</script>
