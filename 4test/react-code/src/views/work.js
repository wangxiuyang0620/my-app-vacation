import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'

export default class work extends Component {
    state={
        option: {
            title: {
                text: "对数轴示例",
                x: "center"
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c}"
            },
            legend: {
                x: 'left',
                data: ["2的指数", "3的指数"]
            },
            xAxis: [
                {
                    type: "category",
                    name: "x",
                    splitLine: {show: false},
                    data: ["一", "二", "三", "四", "五", "六", "七", "八", "九"]
                }
            ],
            yAxis: [
                {
                    type: "log",
                    name: "y"
                }
            ],
             toolbox: {
                show: true,
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: true
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            calculable: true,
            series: [
                {
                    name: "3的指数",
                    type: "line",
                    data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
         
                },
                {
                    name: "2的指数",
                    type: "line",
                    data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
         
                }
            ]
         }
                            
    }
    render() {
        const {option} = this.state
        return <div>
                <ReactEcharts option={option} style={{width:500,height:300}}></ReactEcharts>
            </div>
    }
}
