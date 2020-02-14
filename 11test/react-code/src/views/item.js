import React from 'react';
import { Checkbox, Radio } from 'antd';
//多选组件
function CheckHtml(props){

        return  <Checkbox.Group style={{width:'100%'}} onChange={props.checkFunc}>
            {
                props.options.map(item=>{
                    return <div key={item.option_id}>
                            <Checkbox value={item.option_id}>{item.option_name}</Checkbox>
                            <Unit count={item.count} allcount={props.allcount}/>
                        </div>
                })
            }
            </Checkbox.Group>
}
//单选组件
function RadioHtml(props){

        return <Radio.Group style={{width:'100%'}}  onChange={props.radioFunc}>
        {
        props.options.map(item=>{
            return <div  key={item.option_id}>
                    <Radio value={item.option_id}>{item.option_name}</Radio>
                    <Unit count={item.count} allcount={props.allcount}/>
                </div>

            })
        }
      </Radio.Group>  
}
function Unit(props){
    const {count,allcount} = props;
    let str = Math.ceil(count/allcount*80)+'%';
    return <div>
        <span className="gray">
            <span className="blue" style={{width:str}}></span>
        </span> 
        <span className="text">{count}票</span>
    </div>
}
class Item extends React.Component {
    state = {
        option: [],
        list: this.props.location.state,
        submitData:[]

    }
    async initData() {
        let id = this.state.list.id;
        let res = await this.$http('post', '/list', { id })
        this.setState({
            option: res.data.data
        })
    }
    async submit() {
        const {submitData} = this.state;
        let res = await this.$http('post', '/sub',{submitData})
        if(res.data.code === 0){
            this.initData()
        }
        alert(res.data.msg)
    }
   
    // 单选函数赋值
    radioFunc = e => this.setState({submitData:[e.target.value]})

    //多选元素赋值
    checkFunc = checkedValues => this.setState({submitData:[...checkedValues]})
    render() {
        let { list, option } = this.state
        let allcount = 0
        option.forEach(item => allcount += item.count);
        return (
            <div className='items'>
                <p onClick={() => this.props.history.push('/home')}><span>&gt;</span><span>投票详情</span> <span >统计</span></p>
                <div className='items_content'>
                    <div className='box-header'>
                        <div className='zuo'>
                            <p style={{ margin: 0 }}>
                                <img src={`http://q4.qlogo.cn/headimg_dl?dst_uin=${list.qqnumber}&spec=100`} alt="" />
                                {list.anonymous == 1?'匿名发起者':list.name}
                            </p>
                            <p style={{ margin: 0 }}>{list.title}</p>
                        </div>
                        <div className='you'>
                            截止到{this.Timer(list.deadline)}
                        </div>
                    </div>
                    <div className='box'>
                      
                  {
                        list.isRadio == 1? 
                        <RadioHtml options={option} radioFunc={this.radioFunc} allcount={allcount}/>:
                        <CheckHtml options={option} checkFunc={this.checkFunc} allcount={allcount}/>
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
{/* <div className='box'>

{
    this.state.option.map((item, index) => {
        return <div className='box-item' key={index}>
            <div className='left'><span className={currentIndex===index ? 'col' :''} onClick={()=>this.setState({currentIndex:index})} ></span>{item.option_name}</div>
            <div className='right'>{item.count}票</div>
        </div>
    })
}

</div> */}