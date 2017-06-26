import React from "react"
import Card from "./Card.js"
import "./main.css"
class App extends React.Component{
	
	handleChange(){
		this.card.handleShow()
		// this.setState({
		// 	display:!this.state.display
		// })
	}
	render(){
		return(
			<div>
				<Card title="mytitle" false="x" ref={card => this.card = card} >
					<p>fgghj</p>
					<p>fgghj</p>
					<p>fgghj</p>
					<p>fgghj</p>
				</Card>
				<button onClick={this.handleChange.bind(this)}>open</button>
			</div>
			)
	}
}

export default App 