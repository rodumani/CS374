<template>
  <div>
    <div class="badge-wrapper" v-for="tag in sortedTags">
      <el-tag :closable="true" @close="removeMailTag(tag)" color="#999999">{{tag.name}}</el-tag>
    </div>
    <div class="badge-wrapper" v-show="options.length > 0">
      <el-select class="new-tag"
                 v-model="newTag"
                 size="small"
                 filterable
                 allow-create
                 placeholder="New tag"
                 @change="onChangeNewTag">
        <el-option
                v-for="item in options"
                :key="item.tag"
                :label="item.tag"
                :value="item.tag">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
  import { putTag, removeMailTag, addTags } from '../firebase'
  import { mapState, mapActions } from 'vuex'

  export default {
    props: ['mailKey', 'idx', 'file', 'tags'],
    data () {
      return {
        newTag: '',
      }
    },
    computed: {
      sortedTags () {
        return this.file.tags
          ? Object.keys(this.file.tags).map((key) => {
            return {
              key,
              ...this.file.tags[key],
            }
          })
            .sort((a, b) => a.name.localeCompare(b.name))
          : []
      },
      options () {
        return this.tags ? this.tags.filter((tag) => {
          if (!this.file.tags) {
            return true
          } else if (Object.values(this.file.tags).map(t => t.name).includes(tag.tag)) {
            return false
          }
          return true
        }) : []
      },
      ...mapState({
        account: 'account',
      }),
    },
    methods: {
      async onChangeNewTag () {
        if (this.newTag === '') {
          return
        }
        await putTag(this.mailKey, this.idx, this.newTag)
        if (!this.tags.map(t => t.tag).includes(this.newTag)) {
          await addTags(this.account.address, this.newTag.substring(0, 20))
        }

        this.newTag = ''
      },
      async removeMailTag (tag) {
        await removeMailTag(this.mailKey, this.idx, tag)
      },
      ...mapActions([
        'setMails',
      ]),
    },
  }
</script>

<style scoped>
  .badge-wrapper {
    display: inline-block;
    margin-top: 10px;
    padding: 0 10px 0 0;
  }
</style>
