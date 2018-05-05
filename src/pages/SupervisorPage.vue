<template>
  <div class="container m-t-20">
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Middle tile</p>
              <p class="subtitle">With an image</p>
              <data-tables :data="data" :actions-def="actionsDef" :checkbox-filter-def="checkFilterDef" :action-col-def="actionColDef">
                  <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" sortable="custom">
                  </el-table-column>
              </data-tables>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Middle tile</p>
              <p class="subtitle">With an image</p>
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png">
              </figure>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
            <p class="title">Wide tile</p>
            <p class="subtitle">Aligned with the right tile</p>
            <div class="content">
              <!-- Content -->
            </div>
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

export default {
  name: 'HelloWorld',
  data () {
    return {
      data,
      titles,
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
