<template>
  <d-detail-table-wrapper :model="model">
    <d-button theme="primary" @click="addRow">添加行</d-button>
    <t-base-table :columns="columns" row-key="rowId" :data="tableData" :bordered="true" />
  </d-detail-table-wrapper>
</template>

<script setup lang="ts">
import { useLinkChildren, IDetailTableItem, DFormItem, DDetailTableWrapper, useForm } from '@xuanmo/dl-common'
import { TableProps } from 'tdesign-vue-next'
import { computed } from 'vue'
import { DetailTableRowData } from '@xuanmo/dl-common/dist/form/store/detail-table/types'

const { store } = useForm()

console.log({ store })

const props = defineProps<{
  model: IDetailTableItem & { data: any }
}>()

const children = useLinkChildren(props.model?.id)

const columns: TableProps['columns'] = children.value.map((item) => {
  return {
    colKey: item.dataKey,
    required: item.required || item.rules?.includes('required'),
    title(h, { col }) {
      return h('span', [item.label, (col as any).required ? h('span', { style: 'color: #f00' }, ['*']) : null])
    },
    cell(h, { row }) {
      return h(DFormItem, { model: item, rowId: row.rowId })
    }
  }
})
const tableData = computed(() => {
  return Array.from(store.detailTableStore.getTableData(props.model.detailTableId)?.values() ?? [])
})
const addRow = () => {
  store.detailTableStore.addRow({} as DetailTableRowData, props.model.detailTableId)
}
</script>

<style scoped>
:deep(.d-cell) {
  padding: 0;
}
</style>
