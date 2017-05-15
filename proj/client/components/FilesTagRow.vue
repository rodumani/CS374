<template>
  <tr class="row-tags">
    <td colspan="4">
      <div class="badge-wrapper" v-for="tag in file.tags">
        <span class="badge badge-default">{{tag.name}}</span>
      </div>
      <div class="badge-wrapper">
        <el-select class="new-tag"
                   v-model="newTag"
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
    </td>
  </tr>
</template>

<script>
  import { putTag, getMails } from '../firebase'
  import { mapActions } from 'vuex'

  export default {
    props: ['mailKey', 'idx', 'file', 'tags'],
    data () {
      return {
        newTag: '',
      }
    },
    computed: {
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

        const mails = await getMails()
        this.setMails(mails)
      },
      ...mapActions([
        'setMails',
      ])
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
</style>
