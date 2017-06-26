import React from "react"
import $ from "jquery"
class Text extends React.Component{
	constructor(){
		super()
		this.state={
			show:true
		}
	}
	handleShow(){
		this.setState({show:!this.state.show})
	}
	render(){

		return(
			<div>
				<p style={{display:this.state.show ? "block" : "none"}}>hello</p>
				<input type="text" ref={input => this.input = input}/>
				<button onClick={this.handleShow.bind(this)}>隐藏</button>
			</div>
			)
	}
}
export default Text