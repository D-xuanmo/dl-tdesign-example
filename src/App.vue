<script setup lang="ts">
import Layout from './layout/index.vue'
import { FormModels } from '@xuanmo/dl-common'
import { reactive } from 'vue'

const theme = {
  primary: '#0052d9',
  success: '#20c997',
  warning: '#fab005',
  error: '#f03e3e'
}

const globalConfig = reactive({})

const formModel: FormModels = [
  {
    id: 'labelWidth',
    dataKey: 'labelWidth',
    label: '标题宽度',
    component: 'TInputNumber',
    value: 80,
    layout: {
      parent: 'root'
    }
  },
  {
    id: 'colon',
    dataKey: 'colon',
    label: '显示冒号',
    component: 'TSwitch',
    value: false,
    layout: {
      parent: 'root'
    }
  },
  {
    id: 'layout',
    dataKey: 'layout',
    label: '标题布局',
    component: 'TRadioGroup',
    value: 'horizontal',
    layout: {
      parent: 'root'
    },
    options: [
      { label: 'horizontal', value: 'horizontal' },
      { label: 'vertical', value: 'vertical' }
    ]
  },
  {
    id: 'requiredPos',
    dataKey: 'requiredMarkPosition',
    label: '必填标识位置',
    component: 'TRadioGroup',
    value: 'right',
    layout: {
      parent: 'root'
    },
    options: [
      { label: 'left', value: 'left' },
      { label: 'right', value: 'right' }
    ]
  }
]

const onChange = (value: any) => {
  Object.assign(globalConfig, value)
}
</script>

<template>
  <d-config-provider
    :theme="theme"
    :label-width="80"
    required-mark-position="right"
    style="height: 100%"
    v-bind="globalConfig"
  >
    <layout>
      <template #setting>
        <d-form
          :models="formModel"
          layout="horizontal"
          :colon="false"
          label-width="100px"
          @change="onChange"
        />
      </template>
    </layout>
  </d-config-provider>
</template>
