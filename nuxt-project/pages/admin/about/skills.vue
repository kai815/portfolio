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
      <table class="admin-skill-contents">
        <thead>
          <tr>
            <th class="admin-skill-contents__th">No</th>
            <th class="admin-skill-contents__th">Name</th>
            <th class="admin-skill-contents__th">Disciption</th>
            <th class="admin-skill-contents__th">Action</th>
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
<style>
.admin-skill-contents{
  border-collapse: separate;
  border-spacing:2px 1px;
  margin:0 auto;
}
.admin-skill-contents__th{
  color: #fff;
  background: #005ab3;
  border-radius: 1px;
  padding: 5px;
  white-space: nowrap;
}
</style>
<script>
import { mapGetters } from 'vuex'
import skillsTable from '~/components/SkillsTable.vue'

export default {
  layout: 'admin',
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
      this.form = !this.form
    }
  }
}
</script>
