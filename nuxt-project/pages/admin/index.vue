<template>
  <div>
    <h1>管理画面</h1>
    <ul>
      <li>
        <nuxt-link to="/admin/work/">
          Workの編集へ
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/admin/about/">
          aboutの編集へ
        </nuxt-link>
      </li>
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
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapGetters('skills', ['orderdskills'])
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
