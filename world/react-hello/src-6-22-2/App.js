import React from "react"
import Test from "./Test.js"
class App extends React.Component{
	constructor(){
		super()
		this.state = {
			num:0,
			destory:false
		}
		console.log("constructor")
	}

	componentWillMount(){
		console.log(26366)
	}
	shouldComponentUpdate(nextProps,nextState){
		console.log("should",nextProps,nextState)
		if(nextState.num>10){
			return false
		}
		return true
	}
	componentWillUpdate(){
		console.log("will update")
	}
	componentDidUpdate(){
		console.log("did update")
	}
	render(){
		console.log("render")
		return(
			<div>
				<button onClick={()=>this.setState({destory:true})}>销毁</button>
				{this.state.destory ? null : <Test num={this.state.num} />}
				<Test num= {this.state.num} />
				heiio{this.state.num}
				<button onClick={()=>this.setState({num:this.state.num+1})}>按钮</button>
			</div>
			)
	}
	componentDidMount(){
	console.log(432345)

	}
}


export default App