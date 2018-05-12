<template>
  <div class="container m-t-20">
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <!-- Supervisor Taks -->
          <transition mode="out-in">
            <supervisor-task v-if="!isCreateTask"/>
            <supervisor-create-task v-else/>
            <!-- <component :is="supTask"></component> -->
          </transition>
          <!-- Supervisor Taks -->
          <div class="tile is-parent">
            <article class="tile is-child box-card">
              <p class="title">Pending Leave</p>
              <!-- <data-tables :data="data" :actions-def="actionsDef" :checkbox-filter-def="checkFilterDef" :action-col-def="actionColDef">
                <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" sortable="custom" :key="title.id">
                </el-table-column>
              </data-tables> -->
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
import { mapGetters } from 'vuex'
import SupervisorTask from '../components/SupervisorTask'
import SupervisorCreateTask from '../components/SupervisorCreateTask'
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
      fcEvents: demoEvents
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
  },
  computed: {
    ...mapGetters(['errorMessage', 'userInfo', 'token', 'isLogin', 'tasks', 'isCreateTask'])
  },
  components : {
    'full-calendar': require('vue-fullcalendar'),
    SupervisorTask,
    SupervisorCreateTask
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
