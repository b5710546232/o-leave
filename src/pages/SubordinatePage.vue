<template>
  <div class="container m-t-20">
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent">

            <article class="tile is-child box-card">
              <p class="title">Request form</p>
              <el-form :model="requestForm" status-icon :rules="rules" ref="requestForm" label-width="100px" class="overflow-y">

  <el-form-item label="Task ID" prop="pass">
    <el-input type="password" v-model="requestForm.pass" auto-complete="off"></el-input>
  </el-form-item>

  <el-form-item label="Start date" prop="checkPass">
    <el-input type="password" v-model="requestForm.pass" auto-complete="off"></el-input>
  </el-form-item>

<el-form-item label="End date" prop="checkPass">
    <el-input type="password" v-model="requestForm.pass" auto-complete="off"></el-input>
  </el-form-item>

  <el-form-item label="Note" prop="checkPass">
    <el-input type="password" v-model="requestForm.pass" auto-complete="off"></el-input>
  </el-form-item>

  <el-form-item label="Type" prop="checkPass">
    <el-input type="password" v-model="requestForm.pass" auto-complete="off"></el-input>
  </el-form-item>

  <el-form-item label="Status" prop="checkPass">
    <el-input type="password" v-model="requestForm.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button >Submit</el-button>
  </el-form-item>
</el-form>
            </article>
            
          </div>
          <div class="tile is-parent">

           <!-- <article class="tile is-child box-card">
              <p class="title">Pending Leave</p>
              <p class="subtitle">With an image</p>
              <data-tables :data="data" :actions-def="actionsDef" :checkbox-filter-def="checkFilterDef" :action-col-def="actionColDef">
                <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" sortable="custom">
                </el-table-column>
              </data-tables>
            </article> -->

          <article class="tile is-child box-card">
            <p class="title">Subordinate Tasks</p>
              <p class="subtitle">With an image</p>
              <data-tables :data="data" :actions-def="actionsDef" :checkbox-filter-def="checkFilterDef" :action-col-def="actionColDef">
                <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" sortable="custom">
                </el-table-column>
              </data-tables>
              </article>


          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box-card">
            <p class="title">Calendar</p>
            <full-calendar :events="fcEvents"></full-calendar>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  }];

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
      requestForm:{
        pass:''
      },
      rules:{},
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
  components : {
	  'full-calendar': require('vue-fullcalendar')	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .overflow-y{
    overflow-y: auto;
  }
  .box-card{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .2);
    border-radius: 3px;
    padding: 1.25rem 2.5rem 1.25rem 1.5rem;
    position: relative;
  }
  .full-calendar-header {
    color: black !important;
  }
  .full-calendar-body {
    color: black !important;    
  }
</style>
