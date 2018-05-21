<template>
  <div class="tile is-parent">
    <article class="tile is-child box-card">
      <p class="title">Pending Leave</p>
      <data-tables :data="pendingLeaves" :pagination-def="paginationDef" :action-col-def="actionColDef">
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
        prop: "task.name",
        label: "Name",
        }, {
        prop: "substitution.fname",
        label: "Substitution",
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
        }, ]
      },
      actionColDef: {
        label: 'Actions',
        tableColProps: {
          align: 'center'
        },
        def: [{
          handler: row => {
            this.$message('Request Aprove' )
            row.flow_no = "hello word " + row.id
            this.approvePendingTask(row.id)
          },
          buttonProps: {
            type: 'success'
          },
          name: 'Approve'
        }, {
          icon: 'message',
          type: 'text',
          handler: row => {
            this.$message('Request Reject')
            this.rejectPendingTask(row.id)
          },
          buttonProps: {
            type: 'danger'
          },
          name: ' Reject '
        }]
      }
    }
  },
  methods: {
    approvePendingTask(index) {
      console.log('Approve', index)
      this.$store.dispatch('confirmPendingLeave', index)
      setTimeout(function(){ this.$store.dispatch('getSubtitution') }, 3000)
    },
    rejectPendingTask(index) {
      console.log('Reject', index)
      this.$store.dispatch('rejectPendingLeave', index)
      setTimeout(function(){ this.$store.dispatch('getSubtitution') }, 3000)
    }
  },
  mounted() {
    this.$store.dispatch('getPendingLeave')
  },
  computed: {
    ...mapGetters(['pendingLeaves'])
  }
}
</script>
