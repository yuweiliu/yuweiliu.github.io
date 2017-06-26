import React from "react"
class App extends React.Component{
	constructor(){
		super()
		this.state = {
			num:10,
			male:true,
			height:true
		}
	}
	handleClick(){
		this.setState({
			num:this.state.num-1
		})
		console.log(this.state.num)
	}
	handleClick1(num){
		this.setState({
			num:this.state.num+num
		})
	}
	handlechange(){
		this.setState({
			male:!this.state.male,
			height:!this.state.height
		})
	}
	render(){
		let styles = {
			width:"100px",
			height: this.state.height ? '500px' :'0px',
			background:"red",
			transition:"all 0.75s"
		}
			return(
				<div>
					{this.state.num}
					<button onClick={this.handleClick.bind(this,-1)}>减1</button>
					<button onClick={this.handleClick1.bind(this,+1)}>加1</button>
					<p onClick={this.handlechange.bind(this)}>性别：{this.state.male ? '男' : '女'}</p>
					<div style={styles}></div>
				</div>
			)
	}

}

export default App