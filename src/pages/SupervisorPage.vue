<template>
  <div class="container m-t-20">
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Subordinate Tasks</p>
              <p class="subtitle">With an image</p>
              <data-tables :data="data" :actions-def="actionsDef" :checkbox-filter-def="checkFilterDef" :action-col-def="actionColDef">
                <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" sortable="custom" :key="title.id">
                </el-table-column>
              </data-tables>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Pending Leave</p>
              <p class="subtitle">With an image</p>
              <data-tables :data="data" :actions-def="actionsDef" :checkbox-filter-def="checkFilterDef" :action-col-def="actionColDef">
                <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" sortable="custom" :key="title.id">
                </el-table-column>
              </data-tables>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
            <p class="title">Calendar</p>
            <full-calendar :events="fcEvents"></full-calendar>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
var data, titles

data = [{
    "content": "Water flood",
    "flow_no": "FW201601010001",
    "flow_type": "Repair",
    "flow_type_code": "repair",
    }, {
    "content": "Lock broken",
    "flow_no": "FW201601010002",
    "flow_type": "Repair",
    "flow_type_code": "repair",
    }, {
    "content": "Help to buy some drinks",
    "flow_no": "FW201601010003",
    "flow_type": "Help",
    "flow_type_code": "help"
}]

titles = [{
  prop: "flow_no",
  label: "NO."
  }, {
  prop: "content",
  label: "Content"
  }, {
  prop: "flow_type",
  label: "Type"
}]
var demoEvents = [
	{
    title : 'Sunny Out of Office',
    start : '2016-08-25',
    end : '2018-07-27'
  }
]
export default {
  name: 'HelloWorld',
  data () {
    return {
      data,
      titles,
      fcEvents : demoEvents,
      actionsDef: {
          colProps: {
            span: 5
          },
          def: [{
            name: 'new',
            handler: () => {
              this.data.push({
                'content': 'hello world',
                'flow_no': 'FW201601010004',
                'flow_type': 'Help',
                'flow_type_code': 'help',
              })
            },
            buttonProps: {
              type: 'text'
            }
          }]
        },
        checkFilterDef: {
          props: 'flow_type_code',
          def: [{
            'code': 'repair',
            'name': 'Repair'
          }, {
            'code': 'help',
            'name': 'Help'
          }]
      },
      actionColDef: {
        label: 'Actions',
        def: [{
          handler: row => {
            this.$message('Edit clicked')
            row.flow_no = "hello word"
          },
          name: 'Edit'
        }, {
          icon: 'message',
          type: 'text',
          handler: row => {
            this.$message('RUA in row clicked')
            console.log('RUA in row clicked', row)
          },
          name: 'RUA'
        }]
      }
    }
  },
  methods: {
    getRowActionsDef() {
      let self = this
      return [{
        type: 'primary',
        handler(row) {
          self.$message('Edit clicked')
          console.log('Edit in row clicked', row)
        },
        name: 'Edit'
      }]
    }
  },
  mounted() {
    // this.$store.dispatch('checkToken');
    // if (this.token) {
    //   let loadingInstance = Loading.service({
    //     fullscreen: true
    //   })
    //   this.$store.dispatch('getMe', this.token).then(() => {
    //     this.closeLoading(loadingInstance)
    //     this.routeByRole(this.userInfo.role)
    //   })
    // }
    this.$store.dispatch('getTasks')
  },
  computed: {
    ...mapGetters(['errorMessage', 'userInfo', 'token', 'isLogin'])
  },
  components : {
	  'full-calendar': require('vue-fullcalendar')	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .full-calendar-header {
    color: black !important;
  }
  .full-calendar-body {
    color: black !important;    
  }
</style>
