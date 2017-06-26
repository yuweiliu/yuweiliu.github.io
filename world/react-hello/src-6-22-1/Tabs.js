import React from "react";
class Tabs extends React.Component{
	constructor(){
		super()
		this.state = {
			tabs:4,
			show:0
		}
	}
	handleChange(num){

		this.setState({
			show: num
		})
	}
	
	render(){
		let styles = {
		tabs:{
			width:"300px",
			border:"1px solid #ccc",
			margin:"0 auto",
			overflow:"hidden"
		},
		box:{
			width:100*this.state.tabs+"%",
			marginLeft:this.state.show*100*(-1)+"%"
		},
		tab:{
			width:100/this.state.tabs+"%",
			float:"left"
		}
	}
		return(
			<div style={styles.tabs}>
				<button onClick={this.handleChange.bind(this,0)}>tab1</button>
				<button onClick={this.handleChange.bind(this,1)}>tab2</button>
				<button onClick={this.handleChange.bind(this,2)}>tab3</button>
				<div style={styles.box}>
					<div style={styles.tab}>content1</div>
					<div style={styles.tab}>content2</div>
					<div style={styles.tab}>content3</div>
				</div>
			</div>
			)
	}
}
export default Tabs