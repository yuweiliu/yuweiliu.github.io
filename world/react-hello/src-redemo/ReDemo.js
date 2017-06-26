import React from "react"
import $ from "jquery"
import Text from "./Text.js"
class ReDemo extends React.Component{
	handleChange(){
			document.querySelector("h1").style.color="red"
			$("h1").toggle("slow")
			console.log(this.h)
			this.input.focus()
			this.input.value = ""
			this.text.handleShow()
			console.log(this.text)
		}
	render(){
		
		return(
			<div>
				<Text ref={text => this.text = text} />
				<h1 ref={xxx => this.h = xxx}>123</h1>
				<input type="text" ref={input => this.input = input}/>
				<button onClick={this.handleChange.bind(this)}>按钮</button>
			</div>
			)
	}
}
export default ReDemo