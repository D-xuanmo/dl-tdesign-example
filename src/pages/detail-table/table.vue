<template>
  <d-detail-table-wrapper :model="model">
    <d-space direction="vertical">
      <d-button
        theme="primary"
        :disabled="store.viewLinkageStore.getDisabled(model.id)"
        @click="addRow"
      >
        添加行
      </d-button>
      <t-table
        row-key="rowId"
        :columns="columns"
        :data="tableData"
        :bordered="true"
      />
    </d-space>
  </d-detail-table-wrapper>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLinkChildren, IDetailTableItem, DFormItem, DDetailTableWrapper, useForm } from '@xuanmo/dl-common'
import { TableProps } from 'tdesign-vue-next'

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
  store.detailTableStore.addRow(props.model.detailTableId, {} as any)
}
</script>
