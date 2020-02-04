import React from 'react'
import LazyLoad from 'react-lazyload'
class Lazyimg extends React.Component{
    render(){
        return(
            <div style={{height:500,overflow:"scroll"}}>
                <LazyLoad height={800} overflow={true}>
                    <div>
                        <img width='90%' src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580819832370&di=51512075202905920a7b25a8d1c363f0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201606%2F14%2F20160614224510_HwyZv.thumb.700_0.jpeg" alt=""/>
                    </div>
                </LazyLoad>
                <LazyLoad height={800} overflow={true}>
                    <div>
                        <img width='90%' src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580819832370&di=b9964f69ea31965d9eb1f8c5a1b092fe&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201612%2F26%2F20161226202114_xCvni.jpeg" alt=""/>
                    </div>
                </LazyLoad>
                <LazyLoad height={800} overflow={true}>
                    <div>
                        <img width='90%' src="" alt=""/>
                    </div>
                </LazyLoad>
                <LazyLoad height={800} overflow={true}>
                    <div>
                        <img width='90%' src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580819832370&di=88d8c590fa78fe84de60051cb394ec9d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3Df5c070de30fae6cd0cb4ab693fb10f9e%2F04c10a7b02087bf4683ac600f7d3572c13dfcfdd.jpg" alt=""/>
                    </div>
                </LazyLoad>
                <LazyLoad height={800} overflow={true}>
                    <div>
                        <img width='90%' src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580819832369&di=77af769e9e082111d10bfcd77d574895&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F06%2F20160106184104_XK5U2.thumb.700_0.jpeg" alt=""/>
                    </div>
                </LazyLoad>
                
            </div>
        )
    }
}
export default Lazyimg