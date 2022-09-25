<template>
  <div>
    <el-button
      v-for="(route, index) in routes"
      :key="index"
      @click="route.name !== 'index' && $router.push({ name: route.name })"
    >
      {{ route.meta.title }}
    </el-button>
  </div>
</template>

<script>
import { routes } from '@/router/index'

export default {
  name: 'IndexPage',
  data() {
    return {
      routes,
    }
  },
}
</script>

<style lang="scss" scoped></style>
