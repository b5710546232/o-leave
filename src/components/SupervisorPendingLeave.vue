<template>
  <div class="tile is-parent">
    <article class="tile is-child box-card">
      <p class="title">Pending Leave</p>
      <data-tables :data="pendingLeaves" :checkbox-filter-def="checkFilterDef" :pagination-def="paginationDef" :actions-def="actionsDef">
        <el-table-column v-for="title in taskTitles" :prop="title.prop" :label="title.label" sortable="custom" :key="title.id">
        </el-table-column>
      </data-tables>
    </article>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    let self = this
    return {
      taskTitles: [{
        prop: "start",
        label: "Start Date."
        }, {
        prop: "end",
        label: "End date"
        }, {
        prop: "name",
        label: "Name",
        }, {
        prop: "status",
        label: "Status"
        }
      ],
      paginationDef: {
        pageSize: 5,
        pageSizes: [5, 10, 20]
      },
      actionsDef: {
        
        colProps: {
          span: 5
        },
        def: [{
          name: 'new',
          handler: () => {
            console.log('Create new tasks')
            self.$store.dispatch('setIsCreateTask', true)
          }
        }]
      },
      checkFilterDef: {
        props: 'status',
        def: [{
          'code': 'to-do',
          'name': 'To do'
        }, {
          'code': 'doing',
          'name': 'Doing'
        }]
      }
    }
  },
  methods: {
  },
  mounted() {
    this.$store.dispatch('getPendingLeave')
  },
  computed: {
    ...mapGetters(['pendingLeaves'])
  }
}
</script>
