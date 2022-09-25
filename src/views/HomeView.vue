<template>
  <div class="about">
    <el-menu
      ref="menu"
      style="height: 300px; width: 100px; margin: 0 auto; overflow-y: auto"
      @select="handleSelect"
    >
      <template v-for="(item, i) in menu">
        <el-menu-item :key="i" :index="item.url" :ref="item.url.replace('/', '')">
          {{ item.name }}
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goAnimate: '',
      menu: [
        { url: '/libai', name: '十步一杀' },
        { url: '/ludan', name: '送命中' },
        { url: '/lixin', name: '千圣万骑' },
        { url: '/kai', name: '闪现A' },
        { url: '/jialuo', name: '暴击中' },
        { url: '/zhuge', name: '元气弹' },
        { url: '/sunbin', name: '冲啊' },
        { url: '/niutou', name: '勇敢牛牛' },
        { url: '/yuji', name: '霸王' },
        { url: '/chengyaojin', name: '大干一场' },
        { url: '/lvbu', name: '白色暴击' },
        { url: '/sunwukong', name: '一棒一个' },
        { url: '/yunzhongjun1', name: '鸟人' },
        { url: '/yunzhongjun2', name: '鸟人' },
        { url: '/yunzhongjun3', name: '鸟人' },
        { url: '/yunzhongjun4', name: '鸟人' },
      ],
    }
  },
  mounted() {
    this.activeMenu('/niutou')
    this.$refs.menu.activeIndex = '/niutou'
  },
  methods: {
    handleSelect(index) {
      this.activeMenu(index)
    },
    activeMenu(path) {
      console.log(path)
      const menu = this.$refs.menu.$el
      console.log(menu)
      const currentMenu = this.$refs[path.replace('/', '')][0].$el
      console.log(currentMenu)

      const toTop = currentMenu.offsetTop + currentMenu.offsetHeight / 2 - menu.offsetHeight / 2
      console.log(toTop)
      const step = 10

      if (this.goAnimate) {
        clearInterval(this.goAnimate)
        this.goAnimate = ''
      }
      this.goAnimate = setInterval(() => {
        if (menu.scrollTop > toTop) {
          menu.scrollTop -= step
        } else {
          menu.scrollTop += step
        }
        if (
          Math.abs(menu.scrollTop - toTop) < step ||
          menu.scrollTop === 0 ||
          Math.ceil(menu.scrollTop) + menu.offsetHeight == menu.scrollHeight
        ) {
          window.clearInterval(this.goAnimate)
          this.goAnimate = ''
        }
      }, 10)
    },
  },
}
</script>

<style>

</style>
