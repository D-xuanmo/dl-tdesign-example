<template>
  <d-form ref="formRef" :models="formModels" />
  <d-space :gap="10">
    <d-button theme="primary" @click="validate">提交</d-button>
    <d-button @click="getFormData">获取数据</d-button>
    <d-button @click="reset">重置</d-button>
  </d-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IFormModelItem, IRenderModel, useMessage } from '@xuanmo/dl-common'

const formRef = ref()
const message = useMessage()

const formModels: Array<IFormModelItem | IRenderModel> = [
  {
    id: 'inputID',
    dataKey: 'name',
    label: '用户名',
    component: 'TInput',
    value: '',
    rules: 'required|alpha',
    layout: {
      parent: 'root'
    }
  },
  {
    id: 'textareaID',
    dataKey: 'description',
    label: '个人简介',
    component: 'TTextarea',
    description: '用一段话来介绍自己。',
    required: true,
    value: '',
    layout: {
      parent: 'root'
    }
  },
  {
    id: 'email',
    dataKey: 'email',
    label: '邮箱',
    component: 'TInput',
    value: '',
    rules: 'required|email',
    layout: {
      parent: 'root'
    }
  },
  {
    id: 'age',
    dataKey: 'age',
    label: '年龄',
    component: 'TInputNumber',
    value: '',
    rules: 'required|min:0',
    layout: {
      parent: 'root'
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
      parent: 'root'
    },
    options: [
      { label: '男', value: '1' },
      { label: '女', value: '2' },
      { label: '保密', value: '3' }
    ]
  },
  {
    id: 'language',
    dataKey: 'language',
    label: '语言',
    component: 'TCheckboxGroup',
    required: true,
    value: [],
    layout: {
      parent: 'root'
    },
    options: [
      { label: '中文', value: '1' },
      { label: '英语', value: '2' },
      { label: '日语', value: '3' }
    ]
  },
  {
    id: 'datePickerID',
    dataKey: 'datePicker',
    label: '入坑时间',
    component: 'TDatePicker',
    required: true,
    value: '',
    layout: {
      parent: 'root'
    }
  },
  {
    id: 'blog',
    dataKey: 'blog',
    label: '个人网站',
    component: 'TInput',
    value: '',
    rules: 'required|url',
    layout: {
      parent: 'root'
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
      parent: 'root'
    }
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
</script>
