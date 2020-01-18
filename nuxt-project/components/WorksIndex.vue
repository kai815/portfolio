<template>
  <div>
    <button class="plus-button" @click="showForm">
      <font-awesome-icon class="fa-1x fa-fw" :icon="['fas', 'plus']"/>
    </button>
    <button class="image-button" @click="showImageForm">
      <font-awesome-icon class="fa-1x fa-fw" :icon="['fas', 'image']"/>
    </button>
    <section v-if="form" class="post-form">
      <form>
        <dl>
          <dt><span>Workタイトル</span></dt>
          <dd><input v-model="newWork.title" type="text" placeholder="HideoKaizuka" name="work-title"></dd>
          <dt><span>Work詳細</span></dt>
          <dd><textarea v-model="newWork.discription" name="work-discription" placeholder="貝塚秀雄のポートフォリをサイトを作成しました。" /></dd>
          <dt><span>Work画像Url</span></dt>
          <dd><input v-model="newWork.imageUrl" type="text" placeholder="HideoKaizuka" name="work-image-url"></dd>
          <dt><span>Workのリンク先Url</span></dt>
          <dd><input v-model="newWork.linkUrl" type="text" placeholder="HideoKaizuka" name="work-link-url"></dd>
          <dt><span>WorkNumber</span></dt>
          <dd><input v-model="newWork.number" type="number" name="work-number"></dd>
          <button @click="add">
            保存
          </button>
        </dl>
      </form>
    </section>
    <section v-if="imageForm" class="post-form">
      <form>
        <dl>
          <dt><span>Work画像のアップロード</span></dt>
          <dd><input type="file" name="work-image" @change="selectImage"></dd>
          <button @click="imageUpload">
            保存
          </button>
        </dl>
      </form>
    </section>
    <section class="contents">
      <table class="admin-works-contents">
        <thead>
          <tr>
            <th class="admin-works-contents__th">No</th>
            <th class="admin-works-contents__th">Title</th>
            <th class="admin-works-contents__th">Image</th>
            <th class="admin-works-contents__th">Url</th>
            <th class="admin-works-contents__th">Disciption</th>
            <th class="admin-works-contents__th">Action</th>
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
<style>
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

export default {
  layout: 'admin',
  components: {
    worksTable
  },
  data() {
    return {
      loaded: false,
      form: false,
      imageForm: false,
      uploadImage: '',
      newWork: {
        title: '',
        discription: '',
        imageUrl: '',
        linkUrl: '',
        number: ''
      }
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
    add() {
      this.$store.dispatch('works/add', this.newWork)
      this.newWork.title = ''
      this.newWork.imageUrl = ''
      this.newWork.linkUrl = ''
      this.newWork.discription = ''
      this.newWork.number = ''
      this.form = false
    },
    selectImage(event) {
      const files = event.target.files
      this.uploadImage = files[0]
    },
    imageUpload(e) {
      /* eslint-disable no-console */
      e.preventDefault()
      this.$store.dispatch('works/imageUpload', this.uploadImage)
    },
    showForm() {
      this.form = !this.form
    },
    showImageForm() {
      this.imageForm = !this.imageForm
    }
  }
}
</script>
