<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const activeMenu = computed(() => route.path)

const togglePage = (value: string) => {
  router.push(value)
}
</script>

<template>
  <d-layout>
    <d-layout-sider>
      <t-menu v-model="activeMenu" class="app-menu" @change="togglePage">
        <t-menu-item value="/base">基础表单</t-menu-item>
        <t-menu-item value="/grid">表单网格布局</t-menu-item>
        <t-menu-item value="/detail-table">明细表</t-menu-item>
      </t-menu>
    </d-layout-sider>
    <d-layout-content>
      <router-view />
    </d-layout-content>
    <d-layout-sider width="350px" placement="right" class="form-setting">
      <slot name="setting" />
    </d-layout-sider>
  </d-layout>
</template>

<style scoped>
.app-menu {
  width: 100% !important;
}

.form-setting {
  padding: 16px;
}

:deep(.d-layout-content) {
  padding: 16px;
}
</style>
