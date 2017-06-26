import React from "react"
class Card extends React.Component{
	constructor(){
		super()
		this.state = {
			display:false
		}
	}
	handleShow(){
		this.setState({
			display:!this.state.display
		})

		
	}
	styles(){
 		return{
 			main:{
 				backgroundColor:"gray",
 				opacity:"0.5",
 				position:"fixed",
 				left:"0px",
 				top:"0px",
 				width:"100%",
 				height:"100%"
 			},
 			card:{
 				position:"fixed",
 				zIndex:"8",
 				left:"500px",
 				top:"200px",

 			}
 			
 		}
 			
 			
	}
	render(){
		return(
			<div style={{display:this.state.display ? "block" : "none"}}>
				<div className="main" style={this.styles().main}></div>
				<div className="card" style={this.styles().card}>
					<div style={{overflow:"hidden",padding:"20px 10px",borderBottom:"1px solid #202121"}}>
						<h3>{this.props.title}</h3>
						<p className="p1" onClick={this.handleShow.bind(this)}>{this.props.false}</p>
					</div>
					<div style={{padding:"20px 10px"}}>
						{this.props.children}
					</div>
					<div style={{overflow:"hidden"}}>
						<button style={{float:"right",marginRight:"10px"}} onClick={this.handleShow.bind(this)}>取消</button>
						<button style={{float:"right",marginRight:"10px"}} onClick={this.handleShow.bind(this)}>关闭</button>
					</div>
				</div>
			</div>
			)
	}
}

export default Card 