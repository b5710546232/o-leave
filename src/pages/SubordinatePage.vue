<template>
  <div class="container m-t-20">
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent">
  
            <article class="tile is-child box-card">
              <div v-if="isNew">
                <p class="title">Request leave form</p>
                <el-form :model="requestForm" status-icon :rules="rules" ref="requestForm" label-width="100px" class="overflow-y">
  
  
                  <el-form-item label="Task" prop="task">
                    <el-select ref="task" v-model="requestForm.task" placeholder="Select...">
                      <el-option v-for="item in inProgessTaskList" :key="item.id" :label="item.name" :value="item.id">
                      </el-option>
                    </el-select>
                  </el-form-item>
  
  
                  <el-form-item label="Leave date" prop="leaveDate">
                    <el-date-picker format="yyyy-MM-dd" v-model="requestForm.leaveDate" type="datetimerange" range-separator="To" start-placeholder="Start date" end-placeholder="End date">
                    </el-date-picker>
                  </el-form-item>
  
                  <el-form-item label="Note" prop="note">
                    <el-input type="textarea" :rows="5" v-model="requestForm.note" auto-complete="off"></el-input>
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
                    <el-button type="primary" @click="submitRequestForm">Submit</el-button>
                    <el-button type="primary" @click="backToViewMyLeave">Back</el-button>
                  </el-form-item>
                </el-form>
              </div>
  
              <div v-else>
  
                <p class="title">My Leave</p>
                <data-tables :data="myLeave" :actions-def="leaveActiondef" :pagination-def="paginationDef" :checkbox-filter-def="leaveCheckFilterDef">
                  <el-table-column v-for="title in leaveTitles" :prop="title.prop" :label="title.label" sortable="custom">
                  </el-table-column>
                </data-tables>
  
  
  
              </div>
  
            </article>
          </div>
  
          <div class="tile is-parent">
  
            <article class="tile is-child box-card">
              <p class="title">My tasks</p>
              <data-tables :data="myTaskList" :actions-def="actionsDef" :pagination-def="paginationDef" :action-col-def="actionColDef" :checkbox-filter-def="taskCheckFilterDef">
                <el-table-column v-for="title in taskTitles" :prop="title.prop" :label="title.label" sortable="custom">
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
  var demoEvents = [{
    title: 'Sunny Out of Office',
    start: '2016-08-25',
    end: '2018-07-27'
  }]
  export default {
    name: 'HelloWorld',
    data() {
      return {
        paginationDef: {
          pageSize: 5,
          pageSizes: [5, 10, 20]
        },
        isNew: false,
        requestForm: {
          task: '',
          note: '',
          pass: '',
          leaveDate: [],
          type: 'Vacation leave',
          status: 'to-do'
        },
        leaveActiondef: {
          colProps: {
            span: 5
          },
          def: [{
            name: 'New',
            handler: () => {
              this.isNew = true
            }
          }]
        },
        rules: {
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
        leaveTitles: [{
          prop: "start",
          label: "Start Date"
        }, {
          prop: "end",
          label: "End date"
        }, {
          prop: "name",
          label: "Name",
        }, {
          prop: "status",
          label: "Status"
        }],
        taskTitles: [{
          prop: "start",
          label: "Start Date"
        }, {
          prop: "end",
          label: "End date"
        }, {
          prop: "name",
          label: "Name",
        }, {
          prop: "status",
          label: "Status"
        }],
        fcEvents: demoEvents,
        actionsDef: {
          colProps: {
            span: 5
          },
          def: []
        },
        leaveCheckFilterDef: {
          props: 'status',
          def: [{
            'code': 'pending',
            'name': 'Pending'
          }, {
            'code': 'approved',
            'name': 'Apporved'
          }, {
            'code': 'denied',
            'name': 'Denied'
          }]
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
              this.maskAsDoing(row.id)
            },
            name: 'Mask doing'
          }, {
            icon: 'message',
            type: 'text',
            handler: row => {
              this.maskAsDone(row.id)
            },
            name: 'Mask done'
          }]
        }
      }
    },
    computed: {
      ...mapGetters(['myTaskList', 'inProgessTaskList', 'userInfo', 'leaveMessage', 'myLeave'])
    },
    mounted() {
      let loadingInstance = Loading.service({
        fullscreen: true
      })
      this.$store.dispatch('getMyTaskList')
        .then(() => {
          loadingInstance.close()
        })
        .then(() => {
          if (this.userInfo.isLoaded) {
            return
          }
          return this.fetchGetMe()
        })
        .then(() => {
          return this.getMyLeaves()
        })
    },
    methods: {
      maskAsDone(id) {
        let loadingInstance = Loading.service({
          fullscreen: true
        })
        return this.$store.dispatch('maskAsDone', id)
          .then(() => {
            return this.$store.dispatch('getMyTaskList')
          })
          .then(() => {
            loadingInstance.close()
          }).catch(e => {
            console.error(e)
            loadingInstance.close()
          })
      },
      maskAsDoing(id) {
        let loadingInstance = Loading.service({
          fullscreen: true
        })
        return this.$store.dispatch('maskAsDoing', id)
          .then(() => {
            return this.$store.dispatch('getMyTaskList')
          })
          .then(() => {
            loadingInstance.close()
          }).catch(e => {
            console.error(e)
            loadingInstance.close()
          })
      },
      getMyLeaves() {
        let loadingInstance = Loading.service({
          fullscreen: true
        })
        return this.$store.dispatch('getMyLeaves')
          .then(() => {
            loadingInstance.close()
          })
          .catch(err => {
            loadingInstance.close()
          })
      },
      submitRequestForm() {
        this.$refs['requestForm'].validate(valid => {
          if (valid) {
            this.onSubmitRequest()
          }
        })
      },
      onSubmitRequest() {
        const payload = {
          start: moment(this.requestForm.leaveDate[0]).format("YYYY-MM-DD"),
          end: moment(this.requestForm.leaveDate[1]).format("YYYY-MM-DD"),
          type: this.requestForm.type,
          task_id: this.requestForm.task,
          leaver_id: this.userInfo.id
        }
        let loadingInstance = Loading.service({
          fullscreen: true
        })
        this.$store.dispatch('postLeaveForm', payload)
          .then((res) => {
            this.$message({
              message: `${this.leaveMessage}`,
              type: 'success'
            })
            loadingInstance.close()
          })
          .catch(err => {
            this.$message.error(err.message);
            loadingInstance.close()
          })
      },
      backToViewMyLeave() {
        this.isNew = false
        this.$refs['requestForm'].resetFields()
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
        return this.$store.dispatch('getMe', this.token).then(() => {}).then(() => {
          loadingInstance.close()
        })
      }
    },
    components: {
      'full-calendar': require('vue-fullcalendar')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-date-editor {
    width: 100%!important;
  }
  
  .el-range-separator {
    margin: 0 8px!important;
  }
  
  .overflow-y {
    overflow-y: auto;
  }
  
  .box-card {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .2);
    border-radius: 3px;
    padding: 1.25rem 2.5rem 1.25rem 1.5rem;
    position: relative;
  }
  
  .full-calendar-header {
    color: black !important;
  }
  
  .el-date-range-picker__time-header {
    display: none;
  }
  
  .center {
    margin-top: 20%;
  }
  
  .full-calendar-body {
    color: black !important;
  }
  
  .el-select {
    width: 100%;
  }
</style>
