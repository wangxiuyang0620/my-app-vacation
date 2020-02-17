import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react';
export default class Count extends Component {
    state = {
        list: this.props.location.state,
        num: 0

    }
    render() {
        const { list, num } = this.state
        // console.log(list)
        return (
            <div className='count'>
                <p><span onClick={() => this.props.history.push('/home')}>&gt;</span><span>统计</span></p>
                <div className='items_content'>
                    <div className='box-header'>
                        <div className='countzuo'>
                            <p style={{ margin: 0 }}>
                                <img src={`http://q4.qlogo.cn/headimg_dl?dst_uin=${list.list.qqnumber}&spec=100`} alt="" />

                            </p>

                        </div>
                        <div className='countyou'>
                            <p>
                                {list.list.anonymous == 1 ? '匿名发起者' : list.list.name}
                            </p>
                            <p style={{ margin: 0 }}>{list.list.title}</p>
                            <p>{num}人参与</p>
                        </div>
                    </div>
                    <div>
                       
                    <ReactEcharts option = {this.chartResult()} style={{width:'100%',height:300}}></ReactEcharts>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount = ()=>this.init();

    init= async ()=>{
       let id = this.state.list.list.id
        let res = await this.$http('post','/chart/user',{id})
        const {code,data} = res.data
        console.log(data)
        if(code === 0){
            this.setState({num:data.list})
            return
        }
        
    }
    chartResult =()=>{
        const option = this.state.list.option;

        let obj = {tooltip: {trigger: 'axis',axisPointer: {type: 'shadow'}},
            xAxis: {type: 'category',data:[],axisTick:{alignWithLabel: true}},
            yAxis: {type: 'value'},
            series: [{name: '选项',barWidth: '60%',data: [],type: 'bar'}]
        }

        option.forEach(item=>{
            obj.xAxis.data.push(item.option_name)
            obj.series[0].data.push(item.count)
        })

        return  obj
    }
}
