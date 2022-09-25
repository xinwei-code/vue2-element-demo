<template>
  <div class="about">
    <el-menu
      ref="menu"
      mode="horizontal"
      style="width: 500px; margin: 0 auto; overflow-x: auto; display: flex"
      @select="handleSelect"
    >
      <template v-for="(item, i) in menu">
        <el-menu-item
          :key="i"
          :index="item.url"
          :ref="item.url.replace('/', '')"
        >
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
      goAnimate: "",
      menu: [
        { url: "/libai", name: "十步一杀" },
        { url: "/ludan", name: "送命中" },
        { url: "/lixin", name: "千圣万骑" },
        { url: "/kai", name: "闪现A" },
        { url: "/jialuo", name: "暴击中" },
        { url: "/zhuge", name: "元气弹" },
        { url: "/sunbin", name: "冲啊" },
        { url: "/niutou", name: "勇敢牛牛" },
        { url: "/yuji", name: "霸王" },
        { url: "/chengyaojin", name: "大干一场" },
        { url: "/lvbu", name: "白色暴击" },
        { url: "/sunwukong", name: "一棒一个" },
        { url: "/yunzhongjun", name: "鸟人" },
      ],
    };
  },
  mounted() {
    this.activeMenu("/niutou");
    this.$refs.menu.activeIndex = "/niutou";
  },
  methods: {
    handleSelect(key) {
      this.activeMenu(key);
    },
    activeMenu(path) {
      // 滚动剧中 start
      //菜单父元素实例
      const menu = this.$refs.menu.$el;
      //菜单选中元素实例
      const currentMenu = this.$refs[path.replace("/", "")][0].$el;
      //父元素滚动条距离 = 选中元素左侧距离 + 选中元素一半宽度 - 父元素一半宽度
      const goLeft =
        currentMenu.offsetLeft +
        currentMenu.offsetWidth / 2 -
        menu.offsetWidth / 2;
      // 每次移动值
      const step = 10;

      if (this.goAnimate) {
        window.clearInterval(this.goAnimate);
        this.goAnimate = "";
      }
      this.goAnimate = setInterval(() => {
        if (menu.scrollLeft > goLeft) {
          // 滚动条实际值 大于 滚动条目标值 ，就是点了左边的菜单，自动减step，滚动条向左滚动，内容向右滚动
          menu.scrollLeft -= step;
        } else {
          // 滚动条实际值 小于 滚动条目标值 ，就是点了右边的菜单，自动加step，滚动条向右滚动，内容向左滚动
          menu.scrollLeft += step;
        }
        // 滚动条实际值 与 滚动条目标值 绝对误差，小于每次移动值 || 最左侧边界值 || 最右侧边界值
        if (
          Math.abs(menu.scrollLeft - goLeft) < step ||
          menu.scrollLeft == 0 ||
          Math.ceil(menu.scrollLeft) + menu.offsetWidth == menu.scrollWidth
        ) {
          window.clearInterval(this.goAnimate);
          this.goAnimate = "";
        }
      }, 10);
      // 滚动剧中 end
    },
  },
};
</script>

<style></style>
