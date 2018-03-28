import Mock from 'mockjs';

export default {
  mockData () {
    Mock.mock('/api/getTable', {
      "code": "000",
      "datas|1-20": [
        {
          "id|+1": 0,
          "date": '@date("yyyy-MM-dd")',
          "name": "@cname",
          "address": "@county(true)"
        }
      ],
      totalCount: function(){
          return this.datas.length
      }
    });
  }
};
