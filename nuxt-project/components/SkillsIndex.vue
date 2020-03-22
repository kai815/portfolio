<template>
  <div>
    <button class="plus-button" @click="showForm">
      <font-awesome-icon class="fa-1x fa-fw" :icon="['fas', 'plus']" />
    </button>
    <section v-if="form" class="post-form">
      <adminForm
        :formTitle="formTitle"
        :hasName="hasName"
        :hasTitle="hasTitle"
        :hasUrl="hasUrl"
        :hasImage="hasImage"
        @hide="hideForm"
        @save="add" />
    </section>
    <section class="contents">
      <table class="admin-skill-contents">
        <thead>
          <tr>
            <th class="admin-skill-contents__th">
              No
            </th>
            <th class="admin-skill-contents__th">
              Name
            </th>
            <th class="admin-skill-contents__th">
              Disciption
            </th>
            <th class="admin-skill-contents__th">
              Action
            </th>
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
<style scoped>
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

.plus-button{
  color: #0C8AFF;
  margin: 0px 5px 10px 0px;
  outline: none;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.form-contents {
  background-color: #E6EAFB;
  margin: auto;
  padding: 20px;
  width: 50%;
  height: 50%;
}

.form-title {
  text-align: center;
  font-size: 5vh;
}

.form-item-text {
  color:#84898C;
  margin-bottom: 2px;
}
.form-item-input {
  background-color:#F3F8FE;
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
}
.form-button__mini {
  background-color: #153297;
  color: #FFF;
  padding: 3px 30px;
  width: 30%;
  font-size: 4vh;
  margin-top: 10px;
}

.form-button__mini__cancel {
  background-color: #A6B1BA;
  color: #FFF;
  padding: 3px 30px;
  width: 30%;
  font-size: 4vh;
  margin-top: 10px;
}

</style>
<script>
import { mapGetters } from 'vuex'
import skillsTable from '~/components/SkillsTable.vue'
import adminForm from '~/components/adminForm.vue'

export default {
  layout: 'admin',
  components: {
    skillsTable,
    adminForm
  },
  data() {
    return {
      loaded: false,
      form: false,
      formTitle: 'Skill',
      hasName: true,
      hasTitle: false,
      hasUrl: false,
      hasImage: false
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
    add(formData) {
      this.$store.dispatch('skills/add', formData)
      this.form = false
    },
    showForm() {
      this.form = true
    },
    hideForm() {
      this.form = false
    }
  }
}
</script>
