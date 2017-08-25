<template>
  <div class="list">
    <div class="row">
      <div class="col-md-12">
        <h3 v-for="(item,index) in settings.filter" :class="setClass(index)" v-if="item.checked">{{item.text}}</h3>
        <list-category v-for="(category, key) in categories" :category="category" :key="key" :database="database" :settings="settings"></list-category>
      </div>
    </div>
  </div>
</template>

<script>
  import ListCategory from './ListCategory'
  export default {
    components: {
      "list-category": ListCategory
    },
    props: ['categories', 'sorting', "database", 'settings'],
    data() {
      return {

      }
    },
    created() {
    },
    methods: {
      setClass() {
        return "col-xs-" + Math.ceil(12 / (Object.keys(this.categories[0].documents[0]).length - 1));
      }
    }
  }

</script>

<style lang="scss">
  .list {
    background: #fff;
    padding: 15px 0 0 0;
    border-radius: 8px;
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.03);
    display: block;
    float: left;
    margin: 15px 0;
    width: 100%;
    h3 {
      letter-spacing: 2px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      font-size: 7pt;
      display: block;
      float: left;
      margin: 0px 0 15px 0px;
      padding: 0 10px 0 10px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .category-title {
      position: relative;
      background: #f2f2f2;
      float: left;
      width: 100%;
      display: block;
      padding: 10px 12px;
      p {
        margin: 0;
        color: #2a2a2a;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 11pt;
        letter-spacing: 2px;
      }
      input[type="text"] {
        padding: 5px 10px;
        background: #f9f9f9;
      }
      &:hover {
        cursor: pointer;
      }
    }
    .list-item {
      position: relative;
      display: block;
      float: left;
      width: 100%;
      padding: 15px 10px;
      overflow: hidden;
      background: #f9f9f9;
      p {
        font-size: 16px;
        letter-spacing: 1px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        margin: 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      &:hover {
        cursor: pointer;
        .list-item-overlay {
          right: 0;
        }
      }
      .list-item-overlay {
        position: absolute;
        width: 55px;
        top: 0;
        right: -100px;
        background: #fff;
        height: 100%;
        z-index: 9996;
        padding: 12px 6px;
        transition: right .3s ease-in-out;
        -webkit-box-shadow: -4px 2px 12px 0px rgba(0, 0, 0, 0.15);
        -moz-box-shadow: -4px 2px 12px 0px rgba(0, 0, 0, 0.15);
        box-shadow: -4px 2px 12px 0px rgba(0, 0, 0, 0.15);
        img {
          width: 24px;
          height: auto;
          margin: 0 auto;
          display: block;
        }
      }
      .list-item-overlay.animated {
        animation-duration: .3s;
      }
    }
    .list-item:last-child {
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
    .list-item:nth-child(2n+1) {
      background: #fff;
    }
  }
</style>