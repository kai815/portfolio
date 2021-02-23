<template>
  <div>
    <span class="skill-name slide-in-to-top" @click="showDiscription">
      {{ skill.name }}
    </span>
    <span class="slide-in-to-top">/</span>
  </div>
</template>
<script>
export default {
  props: {
    skill: {
      type: Object,
      default: () => ({
        name: '',
        discription: ''
      })
    }
  },
  methods: {
    showDiscription() {
      this.$emit('showDiscription', [this.skill.name, this.skill.discription])
    },
    hideDiscription() {
      this.$emit('hideDiscription')
    }
  }
}
</script>
<style scoped>
@keyframes slide-in-to-top {
  0% {
    transform: translate(0px, -50px);
    opacity: 0;
  }
}

.skill-name {
  font-size: 4vh;
  color: #0e0d0d;
  word-spacing: 2px;
  margin:3px 0px;
  display:inline-block;
  padding: 3px;
  border-radius:30%;
  transition:all 1s;
}

@media (max-width: 1030px) and (min-width: 768px) {
  .skill-name{font-size: 3.5vh}
}
/* スマホ時 */
@media (max-width: 767px) {
  .skill-name{font-size: 2.5vh}
}
.skill-name:hover{
  box-shadow: 0 10px 10px #0e0d0d;
  background-color: #DDDDDD;
}

.slide-in-to-top {
  animation: slide-in-to-top 3s ease 1s backwards;
}

</style>
