import React, { Component } from 'react'
import { DatePicker, Button } from 'antd';
class Add extends Component {
    state = {
        title: "",
        description: '',
        isRadio: 1,
        anonymous: 2,
        deadline: null,
        option: []
    }
    render() {
        const { anonymous, isRadio, title, description, option } = this.state
        return (
            <div className='addhome'>
                <div className="addhome-header">发起投票</div>
                <div className='addcontent'>
                    <div className='addtitle'>标题:<input type="text" value={title} onChange={(e) => this.setState({ title: e.target.value })} /></div>
                    <div className='adddes'>描述:<input type="text" value={description} onChange={(e) => this.setState({ description: e.target.value })} /></div>
                    <div>
                        选项：
                    <div>
                            {
                                option.map(item => <div key={item.id}>{item.value}<span onClick={() => this.deleteOption(item.id)} className='jian'>-</span></div>)
                            }
                        </div>
                        <div><input ref="optionVal" type="text" /> <span onClick={this.addOption} className='jia'>+</span></div>
                    </div>
                    <div className='addradio'>单/多选:
                     <select value={isRadio} onChange={e => this.setState({ isRadio: e.target.value })}>
                            <option value="1">单选</option>
                            <option value="2">多选</option>
                        </select>
                    </div>
                    <div className='addradio'>是否匿名:
                     <select value={anonymous} onChange={e => this.setState({ anonymous: e.target.value })}>
                            <option value="1">匿名</option>
                            <option value="2">不匿名</option>
                        </select>
                    </div>
                    <div>截止日期： <DatePicker onChange={(date, dateString) => this.setState({ deadline: new Date(dateString).getTime() })} showTime={true} /></div>
                   
                </div>
                
                <Button onClick={() => this.submit()}>提交</Button>
            </div>
        )

    }
    addOption = () => {
        let { option } = this.state;

        option.push({
            id: new Date().getTime() + option.length,
            value: this.refs.optionVal.value
        })
        this.setState({ option: [...option] })
    }
    deleteOption = (id) => {
        let { option } = this.state;
        let index = option.findIndex(item => item.id === id)
        option.splice(index, 1);
        this.setState({ option: [...option] })
    }
    submit = async () => {
        let typeNull = [];
        Object.keys(this.state).forEach(item=>{
            if(this.state[item] === '') typeNull.push(item)
        })
        if(typeNull.length>0) return alert(typeNull[0]+'不能为空')
        let { anonymous, isRadio, title, description, option, deadline } = this.state
        let res = await this.$http('post', '/add', { anonymous, isRadio, title, description, option, deadline })
        if (res.data.code === 1) {
            this.props.history.push('/home')
            return
        }
        alert(res.data.msg)
    }
}
export default Add