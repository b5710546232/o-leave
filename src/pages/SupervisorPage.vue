<template>
  <div class="container m-t-20">
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <!-- Supervisor Taks -->
          <transition mode="out-in">
            <supervisor-task v-if="!isCreateTask"/>
            <supervisor-create-task v-else/> -->
          </transition> 
          <!-- Supervisor Taks -->
        </div>
        <div class="tile is-parent">
          <supervisor-pending-leave></supervisor-pending-leave>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box-card">
            <p class="title">Calendar</p>
            <full-calendar :events="taskCalendar"></full-calendar>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SupervisorTask from '../components/SupervisorTask'
import SupervisorCreateTask from '../components/SupervisorCreateTask'
import SupervisorPendingLeave from '../components/SupervisorPendingLeave'
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
      supTask: this.isCreateTask ? 'supervisor-create-task': 'supervisor-task',
      fcEvents: demoEvents,
      taskCalendar:[]
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
    },
    editTaskCalendar() {
      this.taskCalendar = []
      this.tasks.map(task => {
        if (task.assignee) {
          this.taskCalendar.push({ title: task.assignee.fname + ": " + task.name, start: task.start, end: task.end })
        } else {
          this.taskCalendar.push({ title:  + "Empty: " + task.name, start: task.start, end: task.end })
        }
      })
    }
  },
  mounted() {
  },
  watch: {
    'tasks': function(newVal, oldVal) {
        this.editTaskCalendar()
      }
  },
  computed: {
    ...mapGetters(['errorMessage', 'userInfo', 'token', 'isLogin', 'tasks', 'isCreateTask'])
  },
  components : {
    'full-calendar': require('vue-fullcalendar'),
    SupervisorTask,
    SupervisorCreateTask,
    SupervisorPendingLeave
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
