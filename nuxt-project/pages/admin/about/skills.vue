<template>
  <div>
    <h1>Skills管理画面</h1>
    <button @click="showForm">
      +
    </button>
    <section v-if="form" class="post-form">
      <form>
        <dl>
          <dt><span>Skill名</span></dt>
          <dd><input v-model="newSkill.name" type="text" placeholder="JavaScript" name="skill-name"></dd>
          <dt><span>Skill詳細</span></dt>
          <dd><textarea v-model="newSkill.discription" name="skill-discription" placeholder="2年ほど実務経験があります" /></dd>
          <dd><input v-model="newSkill.number" type="number" name="skill-number"></dd>
          <button @click="add">
            保存
          </button>
        </dl>
      </form>
    </section>
    <section class="contents">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Disciption</th>
          </tr>
        </thead>
        <tbody>
          <tr
            is="skillsTable"
            v-for="(skill, index) in orderdSkills"
            :key="skill.id"
            :skill="skill"
            :index="index"
          />
        </tbody>
      </table>
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import skillsTable from '~/components/SkillsTable.vue'

export default {
  components: {
    skillsTable
  },
  data() {
    return {
      loaded: false,
      form: false,
      newSkill: {
        name: '',
        discription: '',
        number: ''
      }
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapGetters('skills', ['orderdSkills'])
  },
  created() {
    this.$store.dispatch('skills/init')
  },
  mounted() {
    setTimeout(() => {
      if (!this.isAuthenticated) {
        // ログインしていなかったら飛ぶページを設定
        this.$router.push('/admin/login')
      }
      this.loaded = true
    }, 0)
  },
  methods: {
    add() {
      this.$store.dispatch('skills/add', this.newSkill)
      this.newSkill.name = ''
      this.newSkill.discription = ''
      this.newSkill.number = ''
      this.form = false
    },
    showForm() {
      this.form = true
    }
  }
}
</script>
