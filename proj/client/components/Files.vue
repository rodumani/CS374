<template>
  <Layout>
    <div class="col-md-2 no-padding tags">
      <ul>
        <li class="active">All</li>
        <li>Unclassified</li>
        <li v-for="tag in tags">
          {{tag}}
        </li>
      </ul>
    </div>
    <div class="col-md-10 no-padding files">
      <table class="table">
        <thead>
        <tr>
          <th>File</th>
          <th>Sender</th>
          <th>Title</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="file in files">
          <td>{{file.name}}</td>
          <td>{{file.sender}}</td>
          <td>{{file.title}}</td>
          <td>{{file.date}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </Layout>
</template>

<script>
  import Layout from '../views/Layout'

  export default {
    components: {
      Layout,
    },
    data () {
      return {
        tags: ['a', 'b', 'c'],
        files: [
          { name: '20170543_HW1.py', sender: 'Changje Jeong', title: '[CS101] HW1', date: '2017-05-04 12:00:00' },
          { name: '20170543_HW1.py', sender: 'Changje Jeong', title: '[CS101] HW1', date: '2017-05-04 12:00:00' },
          { name: '20170543_HW1.py', sender: 'Changje Jeong', title: '[CS101] HW1', date: '2017-05-04 12:00:00' },
          { name: '20170543_HW1.py', sender: 'Changje Jeong', title: '[CS101] HW1', date: '2017-05-04 12:00:00' },
          { name: '20170543_HW1.py', sender: 'Changje Jeong', title: '[CS101] HW1', date: '2017-05-04 12:00:00' },
          { name: '20170543_HW1.py', sender: 'Changje Jeong', title: '[CS101] HW1', date: '2017-05-04 12:00:00' },
          { name: '20170543_HW1.py', sender: 'Changje Jeong', title: '[CS101] HW1', date: '2017-05-04 12:00:00' },
          { name: '20170543_HW1.py', sender: 'Changje Jeong', title: '[CS101] HW1', date: '2017-05-04 12:00:00' },
          { name: '20170543_HW1.py', sender: 'Changje Jeong', title: '[CS101] HW1', date: '2017-05-04 12:00:00' },
          { name: '20170543_HW1.py', sender: 'Changje Jeong', title: '[CS101] HW1', date: '2017-05-04 12:00:00' },
          { name: '20170543_HW1.py', sender: 'Changje Jeong', title: '[CS101] HW1', date: '2017-05-04 12:00:00' },
          { name: '20170543_HW1.py', sender: 'Changje Jeong', title: '[CS101] HW1', date: '2017-05-04 12:00:00' },
          { name: '20170543_HW1.py', sender: 'Changje Jeong', title: '[CS101] HW1', date: '2017-05-04 12:00:00' },
          { name: '20170543_HW1.py', sender: 'Changje Jeong', title: '[CS101] HW1', date: '2017-05-04 12:00:00' },
          { name: '20170543_HW1.py', sender: 'Changje Jeong', title: '[CS101] HW1', date: '2017-05-04 12:00:00' },
          { name: '20170543_HW1.py', sender: 'Changje Jeong', title: '[CS101] HW1', date: '2017-05-04 12:00:00' },
          { name: '20170543_HW1.py', sender: 'Changje Jeong', title: '[CS101] HW1', date: '2017-05-04 12:00:00' },
          { name: '20170543_HW1.py', sender: 'Changje Jeong', title: '[CS101] HW1', date: '2017-05-04 12:00:00' },
        ],
      }
    },
  }
</script>

<style scoped>
  .no-padding {
    padding: 0;
  }
  .tags {
    overflow-y: scroll;
    height: calc(100vh - 74px);
    border-right: 1px solid lightgray;
  }
  .files {
    overflow-y: scroll;
    height: calc(100vh - 74px);
  }
  li {
    list-style-type: none;
    width: 100%;
    height: 35px;
    line-height: 35px;
    cursor: pointer;
    padding-left: 10px;
  }
  li a {
    text-decoration: none;
    color: black;
  }
  li:hover {
    background-color: #eee;
  }
  li.active {
    border-right: 5px solid #337ab7;
    background-color: #eee;
  }
  ul {
    width: 100%;
    padding: 0;
  }
</style>
