import React from "react"
import img from "./images/a.jpg"
class APP extends React.Component{
 	styles(){
 		return{
 			h1:{
 				color:"green"
 			},
 			img:{
 				
 				width:"100px"
 			},
 			btn:{
 			
 				color:"white",
 				width:"100px",
 				height:"50px"
 			},
 			text:{
 				color:"green"
 			}
 			
 		}
 			
 			
	}
	render(){
		return(
			<div>
				<h1 style={this.styles().h1}>hello</h1>
				<img src={img} alt="" style={this.styles().img} />
				<button style={this.styles().btn}>1</button>
				<button style={{...this.styles().btn,...this.styles().text}}>2</button>
			</div>
			)
	}
}
export default APP