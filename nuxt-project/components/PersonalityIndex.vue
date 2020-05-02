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
    <section v-if="imageForm" class="post-form">
      <form>
        <dl>
          <dt><span>Personality画像のアップロード</span></dt>
          <dd><input type="file" name="personality-image" @change="selectImage"></dd>
          <button @click="imageUpload">
            保存
          </button>
        </dl>
      </form>
    </section>
    <section class="contents">
      <table class="admin-personalitys-contents">
        <thead>
          <tr>
            <th class="admin-personalitys-contents__th th__width_5">
              No
            </th>
            <th class="admin-personalitys-contents__th th__width_5">
              Image
            </th>
            <th class="admin-personalitys-contents__th th__width_85">
              Disciption
            </th>
            <th class="admin-personalitys-contents__th th__width_5">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            is="personalityTable"
            v-for="(personality, index) in orderdPersonality"
            :key="personality.id"
            :personality="personality"
            :index="index"
          />
        </tbody>
      </table>
    </section>
  </div>
</template>
<style>
.admin-personalitys-contents{
  border-collapse: separate;
  border-spacing:2px 1px;
  margin:0 ;
}
.admin-personalitys-contents__th{
  color: #fff;
  background: #005ab3;
  border-radius: 1px;
  padding: 5px;
  white-space: nowrap;
}
.th__width_5 {
    width: 5%;
}
.th__width_85 {
    width: 85%;
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
import personalityTable from '~/components/PersonalityTable.vue'
import adminForm from '~/components/adminForm.vue'

export default {
  layout: 'admin',
  components: {
    personalityTable,
    adminForm
  },
  data() {
    return {
      loaded: false,
      form: false,
      formTitle: 'Personality',
      hasName: false,
      hasTitle: false,
      hasUrl: false,
      hasImage: true
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapGetters('personality', ['orderdPersonality'])
  },
  created() {
    this.$store.dispatch('personality/getAll')
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
      this.$store.dispatch('personality/add', formData)
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
