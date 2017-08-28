<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Hej med dig</th>
          <th>Hej med dig</th>
          <th>Hej med dig</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>td</td>
          <td>td</td>
          <td>td</td>
        </tr>
        <tr>
          <td>td</td>
          <td>td</td>
          <td>td</td>
        </tr>
        <tr>
          <td>td</td>
          <td>td</td>
          <td>td</td>
        </tr>
      </tbody>
    </table>
    <!-- <table class="list">
                                        <thead>
                                          <tr>
                                            <slot name="list-header"></slot>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <slot name="list-content"></slot>
                                        </tbody>
                                      </table> -->
  </div>
</template>

<script>
export default {

}
</script>


<style lang="scss">
table {
  width: 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.03);
  margin: 15px 0;

  td,
  th {
    padding: 10px;
    text-align: left;
  }
  td:first-child,
  th:first-child {
    text-align: left;
  }
  td:last-child,
  th:last-child {
    text-align: right;
  }

  thead {
    tr {
      th {}
    }
  }
  tbody {
    tr {
      background: #f9f9f9;
      td {}
    }
    tr:nth-child(2n+1) {
      background: #fff;
    }
  }
}
</style>