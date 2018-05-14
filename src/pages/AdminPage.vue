<template>
  <div class="root container">
    <div class="box-card">
      <div ref="table" class="task-list">
        <h1>All Tasks</h1>
        <data-tables :data="taskList" :actions-def="actionsDef" :pagination-def="paginationDef" :checkbox-filter-def="taskCheckFilterDef"
        >
          <el-table-column v-for="title in taskTitles" :prop="title.prop" :label="title.label" sortable="custom">
          </el-table-column>
        </data-tables>
      </div>
    </div>
  </div>
</template>

<script>
  const csvReport = require('csv-report')
  const Json2csvParser = require('json2csv').Parser
  import jsPDF from 'jspdf'
  import 'jspdf-autotable'
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
      exportPDF(){
        let columns = [
          {title:'Start date',dataKey:'start'},
          {title:'End date',dataKey:'end'},
          {title:'Name',dataKey:'name'},
          {title:'Description',dataKey:'description'},
          {title:'Status',dataKey:'status'}
        ]
        let doc = new jsPDF('l','pt')
        let table = this.taskList


  let header = function (data) {
        doc.setFontSize(20);
        doc.setTextColor(40);
        doc.setFontStyle('normal');
        doc.text("O-leave tasks report", data.settings.margin.left + 35, 60);
    }
       var totalPagesExp = "{total_pages_count_string}"
        let footer = function (data) {
        let str = "Page " + data.pageCount;
        if (typeof doc.putTotalPages === 'function') {
            str = str + " of " + totalPagesExp;
        }doc.setFontSize(12);
        doc.text(str, data.settings.margin.left, doc.internal.pageSize.height - 30);
    }

// overflowColumns: false 
//  columnWidth:'wrap'
        let tableOptions = {
        beforePageContent: header,
        styles: {overflow: 'linebreak' },
     columnStyles: {
    0: {columnWidth: 200},
    1: {columnWidth: 200},
    2: {columnWidth: 80},
    3: {columnWidth: 100},
    4: {columnWidth: 80},
    // etc
},
        afterPageContent: footer,
           bodyStyles: {valign: 'middle'},
        margin: {top: 80}
    }
        doc.autoTable(columns,table,tableOptions)

        if (typeof doc.putTotalPages === 'function') {
        doc.putTotalPages(totalPagesExp);
    }

    
        doc.save('report.pdf')

      },
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
            name: 'csv',
            handler: () => {
              this.exportCSV()
              }
            },
            {
              name:'pdf',
              handler:()=>{
                this.exportPDF()
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
