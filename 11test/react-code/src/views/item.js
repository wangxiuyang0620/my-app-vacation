import React from 'react'
class Item extends React.Component {
    state = {
        option: [],
        list: this.props.location.params.v,
        currentIndex:8
    }
    async initData() {
        let id = this.state.list.id;
        let res = await this.$http('post', '/list', { id })
        this.setState({
            option: res.data.data
        })
    }
    async submit(){
        let res  = await this.$http('post','/sub')
        alert(res.data.msg)
    }
    render() {
        let { list ,currentIndex} = this.state
        return (
            <div className='items'>
                <p onClick={()=>this.props.history.push('/home')}><span>&gt;</span><span>投票详情</span> <span >统计</span></p>
                <div className='items_content'>
                    <div className='box'>
                        <div className='box-header'>
                            <div className='zuo'>
                                <p style={{ margin: 0 }}>
                                    <img src={`http://q4.qlogo.cn/headimg_dl?dst_uin=${list.qqnumber}&spec=100`} alt="" />
                                </p>
                                <p style={{ margin: 0 }}>{list.title}</p>
                            </div>
                            <div className='you'>
                                截止到{this.Timer(list.deadline)}
                            </div>
                        </div>
                        {
                            this.state.option.map((item, index) => {
                                return <div className='box-item' key={index}>
                                    <div className='left'><span className={currentIndex===index ? 'col' :''} onClick={()=>this.setState({currentIndex:index})} ></span>{item.option_name}</div>
                                    <div className='right'>{item.count}票</div>
                                </div>
                            })
                        }

                    </div>
                    <button onClick={()=>this.submit()}>提交</button>
                </div>
            </div>
        )
    }
    //时间戳转换时间的函数
    Timer = signtime => {
        //把当前时间戳转成时间格式
        let str = JSON.stringify(new Date(JSON.parse(signtime)));
        //拼接成想要的格式
        let newStr = str.slice(1, 11) + ' ' + str.slice(12, 20)
        return newStr
    }

    componentDidMount = () => this.initData()
}
export default Item