<script setup lang="ts">
import { FormModels, GridProps, IRenderModel } from '@xuanmo/dl-common'
import { onMounted, ref } from 'vue'

const formRef = ref()
const formModels: FormModels = [
  <IRenderModel<GridProps>>{
    id: 'wrapper',
    component: 'DFormGrid',
    layout: {
      parent: 'root',
      columns: 6,
      gap: 16,
      children: ['name', 'sex', 'age', 'datePickerID', 'schoolName', 'tel', 'region', 'description']
    }
  },
  {
    id: 'name',
    dataKey: 'name',
    component: 'TInput',
    label: '姓名',
    value: '',
    required: true,
    layout: {
      parent: 'wrapper',
      column: 2
    },
    placeholder: '请输入姓名'
  },
  {
    id: 'age',
    dataKey: 'age',
    label: '年龄',
    component: 'TInputNumber',
    value: '',
    rules: 'required|min:0',
    layout: {
      parent: 'wrapper',
      column: 2
    }
  },
  {
    id: 'sex',
    dataKey: 'sex',
    label: '性别',
    component: 'TRadioGroup',
    value: '',
    required: true,
    layout: {
      parent: 'wrapper',
      column: 2
    },
    options: [
      { label: '男', value: '1' },
      { label: '女', value: '2' },
      { label: '保密', value: '3' }
    ]
  },
  {
    id: 'datePickerID',
    dataKey: 'datePicker',
    label: '学生生日',
    component: 'TDatePicker',
    required: true,
    value: '',
    layout: {
      parent: 'wrapper',
      column: 2
    }
  },
  {
    id: 'schoolName',
    dataKey: 'schoolName',
    component: 'TInput',
    label: '学校',
    value: '',
    required: true,
    layout: {
      parent: 'wrapper',
      column: 2
    },
    placeholder: '请输入'
  },
  {
    id: 'tel',
    dataKey: 'tel',
    component: 'TInput',
    label: '手机号',
    value: '',
    required: true,
    layout: {
      parent: 'wrapper',
      column: 2
    },
    placeholder: '请输入'
  },
  {
    id: 'region',
    dataKey: 'region',
    component: 'TCascader',
    label: '省份城市',
    value: '',
    required: true,
    layout: {
      parent: 'wrapper',
      column: 2
    },
    placeholder: '请输入',
    options: []
  },
  {
    id: 'description',
    dataKey: 'description',
    component: 'TTextarea',
    label: '学生简介',
    value: '',
    required: true,
    layout: {
      parent: 'wrapper',
      column: 4
    },
    placeholder: '请输入'
  }
]

const validate = () => {
  formRef.value.store.validate()
}

const getFormData = () => {
  console.log(formRef.value.store.getFormData())
}

const reset = () => {
  console.log(formRef.value.store.reset())
}

onMounted(() => {
  fetch(
    'https://my.xuanmo.xin:3000/api/my-admin/p/file/read/01f176be-287f-4dea-892f-7c938485aa18'
  ).then(async (res) => {
    const options = await res.json()
    formRef.value.store?.updateModel('region', {
      options
    })
  })
})
</script>

<template>
  <d-form ref="formRef" :models="formModels" />
  <d-space :gap="10">
    <d-button theme="primary" @click="validate">提交</d-button>
    <d-button @click="getFormData">获取数据</d-button>
    <d-button @click="reset">重置</d-button>
  </d-space>
</template>

<style scoped></style>
