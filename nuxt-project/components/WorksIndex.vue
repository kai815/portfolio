<template>
  <div>
    <button class="plus-button" @click="showForm">
      <font-awesome-icon class="fa-1x fa-fw" :icon="['fas', 'plus']" />
    </button>
    <section v-if="form" class="post-form">
      <adminForm
        :form-title="formTitle"
        :has-name="hasName"
        :has-title="hasTitle"
        :has-url="hasUrl"
        :has-image="hasImage"
        @hide="hideForm"
        @save="add"
      />
    </section>
    <section class="contents">
      <table class="admin-works-contents">
        <thead>
          <tr>
            <th class="admin-works-contents__th">
              No
            </th>
            <th class="admin-works-contents__th">
              Title
            </th>
            <th class="admin-works-contents__th">
              Image
            </th>
            <th class="admin-works-contents__th">
              Url
            </th>
            <th class="admin-works-contents__th">
              Disciption
            </th>
            <th class="admin-works-contents__th">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            is="worksTable"
            v-for="(work, index) in orderdWorks"
            :key="work.id"
            :work="work"
            :index="index"
          />
        </tbody>
      </table>
    </section>
  </div>
</template>
<style scoped>
.admin-works-contents{
  border-collapse: separate;
  border-spacing:2px 1px;
  margin:0 auto;
}
.admin-works-contents__th{
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

.image-button{
  color: #0C8AFF;
  margin: 0px 5px 10px 0px;
  outline: none;
}
</style>
<script>
import { mapGetters } from 'vuex'
import worksTable from '~/components/WorksTable.vue'
import adminForm from '~/components/adminForm.vue'

export default {
  layout: 'admin',
  components: {
    worksTable,
    adminForm
  },
  data() {
    return {
      loaded: false,
      form: false,
      formTitle: 'Work',
      hasName: false,
      hasTitle: true,
      hasUrl: true,
      hasImage: true
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapGetters('works', ['orderdWorks'])
  },
  created() {
    this.$store.dispatch('works/getAll')
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
      /* eslint-disable no-console */
      this.$store.dispatch('works/add', formData)
      this.form = false
    },
    showForm() {
      this.form = true
    },
    hideForm() {
      this.form = false
    },
    showImageForm() {
      this.imageForm = !this.imageForm
    }
  }
}
</script>
