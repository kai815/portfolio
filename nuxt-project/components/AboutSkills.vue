<template>
  <div>
    <span class="skill-discription slide-in-to-top" @mouseover="showDiscription" @mouseout="hideDiscription">
      {{ skill.name }}/
    </span>
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
      this.$emit('showDiscription', this.skill.discription)
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

.skill-discription {
  font-size: 4vh;
  color: #0e0d0d;
  word-spacing: 2px;
  margin:20px 0px;
}

@media (max-width: 1030px) and (min-width: 768px) {
  .skill-discription{font-size: 3.5vh}
}
/* スマホ時 */
@media (max-width: 767px) {
  .skill-discription{font-size: 2.5vh}
}
.skill-discription:hover{
  text-shadow: 5px 5px 2px #999999;
  font-size: 2em;
}

.slide-in-to-top {
  animation: slide-in-to-top 3s ease 1s backwards;
}

</style>
