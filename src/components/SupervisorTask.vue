<template>
  <div class="tile is-parent">
    <article class="tile is-child box-card">
      <p class="title">Subordinate tasks</p>
      <data-tables :data="tasks" :checkbox-filter-def="checkFilterDef" :pagination-def="paginationDef" :actions-def="actionsDef">
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
    // assignee
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
        prop: "assignee.fname",
        label: "Substitute",
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
          'code': 'created',
          'name': 'Created'
        },{
          'code': 'doing',
          'name': 'Doing'
        }, {
          'code': 'done',
          'name': 'Done'
        }]
      }
    }
  },
  methods: {
  },
  mounted() {
    this.$store.dispatch('getTasks')
  },
  computed: {
    ...mapGetters(['tasks'])
  }
}
</script>
