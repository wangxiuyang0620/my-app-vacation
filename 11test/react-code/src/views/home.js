import React from 'react';
import {connect} from 'react-redux';
class Home extends React.Component{
    state={
        currentIndex:0,
        title:['全部','已结束','正在进行'],
        callback:jtem=>{
           
            return true
        }
    }
    render(){
        const {list} = this.props
        const {currentIndex,title,callback} = this.state
        return(
            <div>
               <p>列表 <span>发起投票</span></p>
               <div>
                   <div>
                       {
                           title.map((item,index)=>{
                               return <span key={index} className={currentIndex===index?'active':''} onClick={()=>this.setState({currentIndex:index})}>{item} </span>
                           })
                       }
                   </div>
                   <div>
                       {
                           console.log(list)
                       }
                    {
                        // list.filter(callback).map(item=>{
                        //         return  <div key={item.VoteId}>
                        //         <p>{item.VoteId}</p>
                        //         <p>{item.title}</p>
                        //     </div>
                            
                        // })
                    }
                </div>
               </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.initData(this)
    }

}
let a = state =>{
    return{
        list :state.list
    }
}
let b = dispatch =>{
    return{
        async initData(that){
            let res =await that.$http('get','/allVote')
            if(res.data.code === 0){
                dispatch({type:"CHANGE_LIST",list:res.data.data})
            }
          
        }
    }
}
export default connect(a,b)(Home)