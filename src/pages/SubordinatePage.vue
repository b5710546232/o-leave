<template>
  <div class="container m-t-20">
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent">

            <article class="tile is-child box-card">
              <p class="title">Request form</p>
              <el-form :model="requestForm" status-icon :rules="rules" ref="requestForm" label-width="100px" class="overflow-y">

  <!-- <el-form-item label="Task" prop="task">
    <el-input type="password" v-model="requestForm.task" auto-complete="off"></el-input>
  </el-form-item> -->

  <el-form-item label="Task" prop="task">
                                        <el-select ref="task" v-model="requestForm.task" placeholder="Select...">
                                            <el-option v-for="item in inProgessTaskList" :key="item.id" :label="item.name" :value="item.id">
                                            </el-option>
                                        </el-select>
    </el-form-item>

  <el-form-item label="Leave date" prop="leaveDate">
     <el-date-picker
     format="yyyy-MM-dd"
      v-model="requestForm.leaveDate"
      type="datetimerange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
  </el-form-item>

  <el-form-item label="Note" prop="note">
    <el-input   type="textarea"
  :rows="5" v-model="requestForm.note" auto-complete="off"></el-input>
  </el-form-item>

   <el-form-item label="Type" prop="type">
                                        <el-select ref="type" v-model="requestForm.type" placeholder="Select...">
                                            <el-option v-for="item in [
                                                {
                  value: 'Vacation leave',
                  label: 'Vacation leave'
                },
                {
                  value: 'Personal Errand leave',
                  label: 'Personal Errand leave'
                },
                {
                  value: 'Sick leave',
                  label: 'Sick leave'
                }]" :key="item.value" :label="item.label" :value="item.value">
                                            </el-option>
                                        </el-select>
    </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitRequestForm" >Submit</el-button>
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

// Vacation leave
// - Personal Errand leave
// - Sick leave
import moment from 'moment'
import {
    mapGetters
  } from 'vuex'
  import {
    Loading
  } from 'element-ui'
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
        task:'',
        note:'',
        pass:'',
        leaveDate:[],
        type:'Vacation leave',
        status:'to-do'
      },
      rules:{
         task: [{
                        required: true,
                        message: 'Please input task',
                        trigger: 'blur'
                    }],
                      leaveDate: [{
                        required: true,
                        message: 'Please input leave date',
                        trigger: 'blur'
                    }],
                      type: [{
                        required: true,
                        message: 'Please input type',
                        trigger: 'blur'
                    }],
      },
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
  computed:{
    ...mapGetters(['taskList','inProgessTaskList', 'userInfo','leaveMessage',])
  },
  mounted(){
    let loadingInstance = Loading.service({
          fullscreen: true
        })
    this.$store.dispatch('getMyTaskList')
    .then(()=>{
      loadingInstance.close()
    })
    .then(()=>{
      if(this.userInfo.isLoaded){
        return
      }
      this.fetchGetMe()
    })
  },
  methods: {
    submitRequestForm(){
      this.$refs['requestForm'].validate(valid => {
                    if(valid){
                      this.onSubmitRequest()
                    }
      })
    },
    onSubmitRequest(){
      const payload = {
        start:moment(this.requestForm.leaveDate[0]).format("YYYY-MM-DD"),
        end:moment(this.requestForm.leaveDate[1]).format("YYYY-MM-DD"),
        type:this.requestForm.type,
        task_id:this.requestForm.task,
        leaver_id:this.userInfo.id
      }
      let loadingInstance = Loading.service({
          fullscreen: true
        })
      this.$store.dispatch('postLeaveForm',payload)
      .then((res)=>{
         this.$message({
          message: `${this.leaveMessage}`,
          type: 'success'
        })
        loadingInstance.close()
      })
      .catch(err=>{
        this.$message.error(err.message);
        loadingInstance.close()
      })
    },
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
    },
     fetchGetMe() {
                let loadingInstance = Loading.service({
                    fullscreen: true
                })
                return this.$store.dispatch('getMe', this.token).then(() => {
                }).then(() => {
                    loadingInstance.close()
                })
            }
  },
  components : {
	  'full-calendar': require('vue-fullcalendar')	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-date-editor{
  width: 100%!important;
}
.el-range-separator{
  margin:0 8px!important;
}
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
  .el-date-range-picker__time-header{
    display: none;
  }
  .full-calendar-body {
    color: black !important;    
  }
  .el-select {
        width: 100%;
    }

</style>
