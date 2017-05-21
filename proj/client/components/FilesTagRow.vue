<template>
  <tr class="row-tags">
    <td colspan="4">
      <div class="badge-wrapper" v-for="tag in sortedTags">
        <el-tag :closable="true" @close="removeTag(tag)" color="#0275d8">{{tag.name}}</el-tag>
      </div>
      <div class="badge-wrapper">
        <el-select class="new-tag"
                   v-model="newTag"
                   size="small"
                   filterable
                   placeholder="New tag"
                   @change="onChangeNewTag"
                   v-show="options.length > 0">
          <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </div>
      <div class="badge-wrapper" id="hideDiv">
        <button id="hide" @click="hideFile">Hide</button>
      </div>
    </td>
  </tr>
</template>

<script>
  import { putTag, removeTag, hideFile } from '../firebase'
  import { mapActions } from 'vuex'

  export default {
    props: ['mailKey', 'idx', 'file', 'tags', ],
    data () {
      return {
        newTag: '',
      }
    },
    computed: {
      sortedTags () {
        return this.file.tags ?
          Object.keys(this.file.tags).map((key) => {
            return {
              key,
              ...this.file.tags[key],
            }
          })
          .sort((a, b) => a.name.localeCompare(b.name))
          : []
      },
      options() {
        return this.tags ? this.tags.filter((tag) => {
          if (!this.file.tags) {
            return true
          } else if (Object.values(this.file.tags).map(t=>t.name).includes(tag)) {
            return false
          }
          return true
        }) : []
      }
    },
    methods: {
      async onChangeNewTag () {
        if (this.newTag === '') {
          return
        }
        await putTag (this.mailKey, this.idx, this.newTag)

        this.newTag = ''
      },
      async removeTag (tag) {
        await removeTag (this.mailKey, this.idx, tag)
      },
      ...mapActions([
        'setMails',
      ]),
      async hideFile () {
        console.log(this.file.fileType)
        await hideFile (this.mailKey, this.idx, this.file.fileType)
      }
    }
  }
</script>

<style scoped>
  .row-tags,
  .row-tags td {
    border-top: none;
    padding: 0 10px 10px;
  }
  .badge-wrapper {
    display: inline-block;
    margin-top: 10px;
    padding: 0 5px 0 5px;
  }
  .badge {
    padding: 10px 11px;
    font-size: 15px;
  }
  #hideDiv {
    float: right;
    margin-right: 10px
  }
  #hide {
    /*background-color: ???*/
  }
</style>
