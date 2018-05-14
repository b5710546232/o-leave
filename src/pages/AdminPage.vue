<template>
  <div class="root container">
    <div class="box-card">
      <div class="task-list">
        <h1>All Tasks</h1>
        <data-tables :data="taskList" :actions-def="actionsDef" :pagination-def="paginationDef" :checkbox-filter-def="taskCheckFilterDef"
        >
          <el-table-column v-for="title in taskTitles" :prop="title.prop" :label="title.label" sortable="custom">
          </el-table-column>
        </data-tables>
      </div>
    </div>
    <!-- <button @click="exportCSV">btn</button> {{taskList}} -->
  </div>
</template>

<script>
  const Json2csvParser = require('json2csv').Parser
  import {
    Loading
  } from 'element-ui';
  import {
    mapGetters
  } from 'vuex'
  export default {
    name: 'HelloWorld',
    computed: {
      ...mapGetters(['taskList'])
    },
    mounted() {
      return this.$store.dispatch('getAllTaskList')
        .then(res => {
  
        })
    },
    methods: {
      exportCSV() {
        let fileName = 'csv'
        const fields = ['start', 'end', 'name', 'description', 'status']
        const json2csvParser = new Json2csvParser({
          fields
        })
        const csv = json2csvParser.parse(this.taskList)
        let result = csv
        var csvContent = 'data:text/csvcharset=GBK,\uFEFF' + result
        var encodedUri = encodeURI(csvContent)
        var link = document.createElement('a')
        link.setAttribute('href', encodedUri)
        link.setAttribute('download', `${(fileName || 'file')}.csv`)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js Login',
        actionsDef: {
          colProps: {
            span: 5
          },
             def: [{
            name: 'Export csv',
            handler: () => {
              this.exportCSV()
              }
            }
          ]
        },
        paginationDef: {
          pageSize: 5,
          pageSizes: [5, 10, 20]
        },
        taskCheckFilterDef: {
          props: 'status',
          def: [{
            'code': 'to-do',
            'name': 'To do'
          }, {
            'code': 'doing',
            'name': 'Doing'
          }, {
            'code': 'done',
            'name': 'Done'
          }]
        },
        taskTitles: [{
            prop: 'start',
            label: 'Start Date'
          }, {
            prop: 'end',
            label: 'End date'
          }, {
            prop: 'name',
            label: 'Name',
          },
          {
            prop: 'description',
            label: 'description'
          }, {
            prop: 'status',
            label: 'Status'
          }
        ],
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .root {
    margin-top: 16px;
  }
  
  .box-card {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .2);
    border-radius: 3px;
    padding: 1.25rem 2.5rem 1.25rem 1.5rem;
    /* position: relative; */
  }
  
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }
</style>
