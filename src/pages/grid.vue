<script setup lang="ts">
import { FormModels, useMessage } from '@xuanmo/dl-common'
import { onMounted, ref } from 'vue'

const message = useMessage()
const formRef = ref()
const formModels: FormModels = [
  {
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
  message.success('打开控制台查看数据')
  console.log(formRef.value.store.getFormData())
}

const reset = () => {
  console.log(formRef.value.store.reset())
}

onMounted(() => {
  fetch(
    'https://admin.xuanmo.xin/api/my-admin/p/file/read/a938273e-d02a-4e02-8cee-7026b9e59b73'
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

<style scoped>
:deep(.d-cell) {
  padding: 0;
}
</style>
