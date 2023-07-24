<template>
  <d-form
    ref="formRef"
    :models="formModels"
    :layout="layoutType"
  />
  <d-space :gap="10">
    <t-radio-group v-model="layoutType">
      <t-radio value="horizontal">horizontal</t-radio>
      <t-radio value="vertical">vertical</t-radio>
    </t-radio-group>
    <d-button @click="validate">执行校验</d-button>
    <d-button @click="getFormData">获取数据</d-button>
    <d-button @click="reset">重置</d-button>
  </d-space>
  <pre>{{ JSON.stringify(value, null, 2) }}</pre>
</template>

<script setup lang="ts">
import { IFormModelItem, IRenderModel, DirectionType } from '@xuanmo/dl-common'
import { computed, ref } from 'vue'

const formRef = ref()

const layoutType = ref<DirectionType>('horizontal')

const formModels: Array<IFormModelItem | IRenderModel> = [
  {
    id: 'grid',
    component: 'DGridLayout',
    layout: {
      parent: 'root',
      isContainer: true,
      columns: 12,
      gap: 16,
      children: ['inputID', 'textareaID', 'datePickerID', 'rateID', 'radioID', 'checkboxID']
    }
  },
  {
    id: 'inputID',
    dataKey: 'input',
    label: '输入框',
    component: 'TInput',
    value: '',
    rules: 'required|alpha',
    layout: {
      parent: 'grid',
      column: 4
    }
  },
  {
    id: 'textareaID',
    dataKey: 'textarea',
    label: '文本域',
    component: 'TTextarea',
    value: '',
    rules: 'required',
    layout: {
      parent: 'grid',
      column: 4
    }
  },
  {
    id: 'datePickerID',
    dataKey: 'datePicker',
    label: '日期选择',
    component: 'TDatePicker',
    required: true,
    value: '',
    layout: {
      parent: 'grid',
      column: 4
    }
  },
  {
    id: 'rateID',
    dataKey: 'rate',
    label: '评分',
    required: true,
    component: 'TRate',
    value: undefined,
    layout: {
      parent: 'grid',
      column: 4
    }
  },
  {
    id: 'radioID',
    dataKey: 'radio',
    label: '单选框',
    component: 'TRadioGroup',
    value: '1',
    required: true,
    layout: {
      parent: 'grid',
      column: 4
    },
    options: [
      { label: '选项1', value: '1' },
      { label: '选项2', value: '2' },
      { label: '选项3', value: '3' }
    ]
  },
  {
    id: 'checkboxID',
    dataKey: 'checkbox',
    label: '复选框',
    component: 'TCheckboxGroup',
    required: true,
    value: [],
    layout: {
      parent: 'grid',
      column: 4
    },
    options: [
      { label: '选项1', value: '1' },
      { label: '选项2', value: '2' },
      { label: '选项3', value: '3' }
    ]
  }
]

const value = computed(() => formRef.value?.store?.getFormData())

const validate = () => {
  formRef.value.store.validate()
}

const getFormData = () => {
  console.log(formRef.value.store.getFormData())
}

const reset = () => {
  console.log(formRef.value.store.reset())
}
</script>

<style>
.d-cell__title,
.d-cell__content-inner {
  line-height: var(--td-comp-size-m) !important;
}
</style>
