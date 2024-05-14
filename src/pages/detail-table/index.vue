<template>
  <d-space :gap="8">
    <d-button theme="primary" @click="getFormData">获取表单数据</d-button>
    <d-button theme="primary" @click="update">更新表单数据</d-button>
    <d-button theme="primary" @click="validate">表单校验</d-button>
  </d-space>
  <d-form :models="formModel" :store="formStore" />
</template>

<script setup lang="ts">
import { FormModels, FormStore, IDetailTableItem, useMessage } from '@xuanmo/dl-common'
import DetailTable from './table.vue'

const message = useMessage()

const formStore = new FormStore()

const formModel: FormModels = [
  {
    id: 'mainFieldId',
    dataKey: 'mainField',
    component: 'TInput',
    label: '主表输入框',
    layout: {
      parent: 'root'
    },
    placeholder: '请输入内容'
  },
  <IDetailTableItem>{
    id: 'detailTableId',
    detailTableId: 'tableId',
    component: DetailTable,
    componentType: 'DetailTable',
    layout: {
      parent: 'root',
      container: false
    }
  },
  {
    id: 'detailTableInputId',
    detailTableId: 'tableId',
    dataKey: 'name',
    component: 'TInput',
    label: '姓名',
    layout: {
      parent: 'detailTableId'
    },
    placeholder: '请输入内容',
    required: true,
    hideLabel: true
  },
  {
    id: 'detailTableSexId',
    detailTableId: 'tableId',
    dataKey: 'sex',
    component: 'TRadioGroup',
    label: '性别',
    layout: {
      parent: 'detailTableId'
    },
    hideLabel: true,
    required: true,
    options: [
      { label: '男', value: '1' },
      { label: '女', value: '2' },
      { label: '保密', value: '3' }
    ],
    value: []
  },
  {
    id: 'detailTableRemarkId',
    detailTableId: 'tableId',
    dataKey: 'remark',
    component: 'TTextarea',
    label: '备注',
    layout: {
      parent: 'detailTableId'
    },
    hideLabel: true
  }
]

const getFormData = () => {
  message.info('打开控制台看数据')
  console.log(formStore.getFormData())
}

const validate = () => {
  formStore.validate()
    .then(() => message.success('校验通过'))
    .catch((error) => {
      console.log(error)
    })
}

const update = () => {
  formStore.updateData({
    mainField: 'xuanmo',
    tableId: [
      { rowId: '2', name: '萧炎', sex: '1' },
      { rowId: '3', name: '药老', sex: '1' }
    ]
  })
}
</script>
