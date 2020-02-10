import React from 'react';
import ReactEcharts from 'echarts-for-react'
class Work extends React.Component {
  state = {
    option: {}
  }
  async initEcharts(){
    let res = await this.$http('get','/work/echarts')
    console.log(res.data.data)
        const {code,msg,data} = res.data
        if(code === 200 ){
            let options = {
                title : {
                    text: '用户角色分析',
                    subtext: '角色和用户占比',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} {b} : {c} ({d}%)"
                },
                legend: {
                    orient : 'vertical',
                    x : 'left',
                    data:data.legend
                },
                calculable : true,
                series : [
                    {
                        name:'角色',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:data.series
                    }
                ]
            }
            this.setState({option:options})
            return
        }
        alert(msg)
    }
  componentDidMount=()=>this.initEcharts()
  render() {
    const { option } = this.state
    return (
      <div>
        <ReactEcharts option={option} style={{ width: 500, height: 300 }}></ReactEcharts>
      </div>
    );
  }

}
export default Work
