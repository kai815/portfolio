<template>
  <div>
    <h1>Works管理画面</h1>
    <button @click="showForm">
      Workの追加
    </button>
    <button @click="showImageForm">
      画像の追加
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
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Image</th>
            <th>Url</th>
            <th>Disciption</th>
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
<script>
import { mapGetters } from 'vuex'
import worksTable from '~/components/WorksTable.vue'

export default {
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
    this.$store.dispatch('works/init')
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
      this.form = true
    },
    showImageForm() {
      this.imageForm = true
    }
  }
}
</script>
