<template>
  <div class="tile is-parent">
    <article class="tile is-child box-card">
      <p class="title">Create task</p>
      <el-form :model="taskForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="Subordinate" prop="sub">
          <el-select v-model="taskForm.sub" placeholder="Activity zone">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Task name" prop="name">
          <el-input v-model="taskForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Description" prop="desc">
          <el-input type="textarea" v-model="taskForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="Date" prop="date">
          <el-date-picker
            v-model="taskForm.date"
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
          <el-button @click="backToTask()">Back</el-button>
        </el-form-item>
      </el-form>
    </article>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        taskForm: {
          sub: '',
          name: '',
          desc: '',
          date: []
        },
        rules: {
          name: [
            { required: true, message: 'Please input task name', trigger: 'blur' }
          ],
          sub: [
            { required: true, message: 'Please choose subordinate name', trigger: 'blur' }
          ],
          date: [
            { type: 'array', required: true, message: 'Please pick a date', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
          ],
          resource: [
            { required: true, message: 'Please select activity resource', trigger: 'change' }
          ],
          desc: [
            { required: false, message: 'Please input description form', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      backToTask() {
        this.$store.dispatch('setIsCreateTask', false)
      }
    }
  }
</script>