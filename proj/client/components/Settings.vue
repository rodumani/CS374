<template>
  <Layout>
    <h1>Settings</h1>
    <hr/>
    <div class="row auto-tagging">
      <div class="col-12">
        <h4 style="display:inline-block">Automatic Tagging</h4>
        <button class="btn btn-sm btn-outline-primary pull-right" @click="toggleShowAdd" v-show="!showAdd">
          <i class="fa fa-plus"></i> Add
        </button>
      </div>
      <div class="col-12 add-new" v-show="showAdd">
        <div class="card">
          <div class="card-block">
            <h4 class="card-title">Add new condition</h4>
            <div class="condition-row">
              Put
              <el-select class="select" v-model="newTag" filterable allowCreate placeholder="Select tag">
                <el-option v-for="item in tags" :key="item" :label="item" :value="item"> </el-option>
              </el-select>
            </div>
            <div class="condition-row">
              if
              <el-select class="select" v-model="newFilter" filterable placeholder="Select condition">
                <el-option key="sender" label="mail is from" value="sender">mail is from</el-option>
                <el-option key="title" label="mail title includes" value="title">mail title includes</el-option>
                <el-option key="attachment_title" label="attachment title includes" value="attachment_title">attachment file name includes</el-option>
                <el-option key="content" label="content includes" value="content">content includes</el-option>
              </el-select>
            </div>
            <div class="filter-value">
              <input type="text" class="form-control" v-model="newFilterValue" v-show="newFilter" />
            </div>
          </div>
          <div class="card-block">
            <button class="btn btn-primary" @click.prevent.stop="saveFilter">Save</button>
            <button class="btn btn-link" @click.prevent.stop="toggleShowAdd">Cancel</button>
          </div>
        </div>
      </div>
      <div class="col-12 filters">
        <ul class="list-group">
          <template v-for="filter in filters">
            <li class="list-group-item justify-content-between">
              <span v-if="filter.type === 'ext'">Put the extension of attachment as a tag</span>
              <span v-else-if="filter.type === 'title'">Put <el-tag color="#999999">{{filter.tag}}</el-tag> if title includes <strong>{{filter.value}}</strong></span>
              <span v-else-if="filter.type === 'sender'">Put <el-tag color="#999999">{{filter.tag}}</el-tag> if a mail is from <strong>{{filter.value}}</strong></span>
              <span v-else-if="filter.type === 'attachment_title'">Put <el-tag color="#999999">{{filter.tag}}</el-tag> if an attachment file name includes <strong>{{filter.value}}</strong></span>
              <span v-else-if="filter.type === 'content'">Put <el-tag color="#999999">{{filter.tag}}</el-tag> if mail content includes <strong>{{filter.value}}</strong></span>
              <span class="rm-filter" title="Delete" @click="rmFilter(filter.key)" v-show="filter.type !== 'ext'"><i class="fa fa-times"></i></span>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<script>
  import Layout from './Layout'
  import { mapState } from 'vuex'
  import { getFilters, removeFilter, addFilter, addTags } from '../firebase'

  export default {
    components: {
      Layout,
    },
    data () {
      return {
        showAdd: false,
        newTag: null,
        newFilter: null,
        newFilterValue: null,
      }
    },
    computed: {
      ...mapState({
        account: 'account',
        filters: 'filters',
        tags: 'tags',
      }),
    },
    methods: {
      rmFilter (key) {
        removeFilter(this.account.address, key)
      },
      toggleShowAdd () {
        this.showAdd = !this.showAdd
      },
      async saveFilter () {
        this.showAdd = false
        await addFilter(this.account.address, {
          type: this.newFilter,
          value: this.newFilterValue,
          tag: this.newTag,
        })

        if (!this.tags.includes(this.newTag)) {
          await addTags(this.account.address, this.newTag)
        }
        this.newFilter = null
        this.newFilterValue = null
        this.newTag = null
      },
    },
  }
</script>

<style scoped>
  .pull-right {
    float: right;
  }
  .auto-tagging {
    margin-top: 20px;
  }
  .filters {
    margin-top: 10px;
  }
  .rm-filter {
    cursor: pointer;
  }
  .rm-filter:hover {
    color: red;
  }
  .add-new {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .condition-row {
    min-height: 50px;
    line-height: 50px;
    position: relative;
  }

  .select {
    position: absolute;
    left: 50px;
    top: 50%;
    transform: translate(0, -50%);
  }
</style>