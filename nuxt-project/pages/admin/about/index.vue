<template>
  <div>
    <h1>About管理画面</h1>
    <ul>
      <li>
        <nuxt-link to="/admin/about/skills">
          Skills管理画面へ
        </nuxt-link>
      </li>
      <li>Personality(画面作成したらリンクも作成)</li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      loaded: false
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  mounted() {
    setTimeout(() => {
      if (!this.isAuthenticated) {
        // ログインしていなかったら飛ぶページを設定
        this.$router.push('/admin/login')
      }
      this.loaded = true
    }, 0)
  }
}
</script>
