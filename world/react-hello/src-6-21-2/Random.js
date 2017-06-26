import React from "react"
let eats = ['白菜','香蕉','菠萝','西瓜','豆芽','豆腐','苹果','apple','banana','melon','origin','pees','doudou','ohohoh','success','oh it is hard'];
class Random extends React.Component{
	constructor(){
		super()
		this.state = {
			start:false,
			what:"小松子"
		}
	}
	handleChange(){
		if(this.state.start){
			clearInterval(this.timer)
		}else{
			this.timer = setInterval(this.random.bind(this),100)
		}
		this.setState({
			start:!this.state.start
		})
	}
	random(){
		this.setState({
			what:eats[Math.floor(Math.random()*eats.length)]
		})
	}
	render(){
		return(
			<div>
				<p>今天吃什么：{this.state.what}</p>
				<button onClick={this.handleChange.bind(this)}>{this.state.start ? "停止" : "开始"}</button>
			</div>
			)
	}
}
export default Random