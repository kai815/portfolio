<template>
  <div>
    <button class="plus-button" @click="showForm">
      <font-awesome-icon class="fa-1x fa-fw" :icon="['fas', 'plus']"/>
    </button>
    <button class="image-button" @click="showImageForm">
      <font-awesome-icon class="fa-1x fa-fw"  :icon="['fas', 'image']"/>
    </button>
    <section v-if="form" class="post-form">
      <form>
        <dl>
          <dt><span>Personality説明</span></dt>
          <dd><textarea v-model="newPersonality.discription" name="personality-discription" placeholder="貝塚秀雄のポートフォリをサイトを作成しました。" /></dd>
          <dt><span>Personality画像Url</span></dt>
          <dd><input v-model="newPersonality.imageUrl" type="text" placeholder="HideoKaizuka" name="personality-image-url"></dd>
          <dt><span>Personalityのリンク先Url</span></dt>
          <dt><span>PersonalityNumber</span></dt>
          <dd><input v-model="newPersonality.number" type="number" name="personality-number"></dd>
          <button @click="add">
            保存
          </button>
        </dl>
      </form>
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
            <th class="admin-personalitys-contents__th th__width_5">No</th>
            <th class="admin-personalitys-contents__th th__width_5">Image</th>
            <th class="admin-personalitys-contents__th th__width_85">Disciption</th>
            <th class="admin-personalitys-contents__th th__width_5">Action</th>
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

export default {
  layout: 'admin',
  components: {
    personalityTable
  },
  data() {
    return {
      loaded: false,
      form: false,
      imageForm: false,
      uploadImage: '',
      newPersonality: {
        imageUrl: '',
        discription: ''
      }
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
    add() {
      this.$store.dispatch('personality/add', this.newPersonality)
      this.newPersonality.imageUrl = ''
      this.newPersonality.discription = ''
      this.newPersonality.number = ''
      this.form = false
    },
    selectImage(event) {
      const files = event.target.files
      this.uploadImage = files[0]
    },
    imageUpload(e) {
      /* eslint-disable no-console */
      e.preventDefault()
      this.$store.dispatch('personality/imageUpload', this.uploadImage)
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
