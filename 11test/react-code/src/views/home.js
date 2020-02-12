import React from 'react';
class Home extends React.Component {
    state = {
        list: [],
        currentList: [],
        currentIndex: 0,
        title: [
            {
                name: '全部',
                index: 0
            },
            {
                name: '已结束',
                index: 1
            },
            {
                name: '正在进行',
                index: 2
            }]

    }
    async initData() {
        let res = await this.$http('get', '/allVote')
        this.setState({
            list: res.data.data
        })
    }
    tablist(index) {
        let { list } = this.state;
        this.setState({ currentIndex: index });
        let currentTime = new Date().getTime();
      
        let newlist = list.filter(v => {
            if (index === 1) return currentTime > v.deadline;
            if (index === 2) return currentTime <v.deadline;
            return v
        })
        this.setState({
            currentList: newlist
        })
      
    }
    render() {
        const { currentIndex, title, list, currentList } = this.state
        let newlist = currentIndex === 0 ? list : currentList
        return (
            <div className='home'>
                <p><span>&gt;</span><span>列表</span> <span onClick={()=>this.props.history.push('/add')}>发起投票</span></p>
                <div className='home_content'>
                    <div className="home_header">
                        {
                            title.map((item, index) => {
                                return <span key={index} className={currentIndex === index ? 'active' : ''} onClick={() => { this.tablist(item.index) }}>{item.name} </span>
                            })
                        }
                    </div>
                    <div className='home_item'>
                        {
                            newlist.map(v => {
                                return <div className="item" key={v.id} >
                                    <div>
                                        <img src={`http://q4.qlogo.cn/headimg_dl?dst_uin=${v.qqnumber}&spec=100`} alt="" />
                                    </div>
                                    <div>
                                        <p>{v.name}</p>
                                        <p>{v.title}</p>
                                    </div>
                                    <div>
                                        <p>截止到{this.Timer(v.deadline)}</p>
                                        <p style={{ textAlign: "right" }}>{v.isRadio === 1 ? '多选' : '单选'}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
     //时间戳转换时间的函数
     Timer = signtime => { 
        //把当前时间戳转成时间格式
        let str    = JSON.stringify(new Date(JSON.parse(signtime)));
        //拼接成想要的格式
        let newStr = str.slice(1,11)+' '+str.slice(12,20)
        return newStr
    }
    componentDidMount() {
        this.initData()
    }

}

export default Home
