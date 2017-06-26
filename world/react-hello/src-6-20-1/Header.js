import React from "react"
import Nav from "./Nav.js"
import img1 from "./images/a.jpg"
// function  Hello(){
// 	let age = 78787
// 	return(
// 		<div>
// 			<h1>hello world</h1>
// 			{
// 				age
// 			}
// 		</div>
// 		)
// }
let num = 88
let style = {color:"red",fontSize:num+"px"}
class Hello extends React.Component{
	render(){
		return(
			<div className = "box1">
				<h1 style={style}>hello</h1>
				<img src={img1} alt="" />
                <Nav />
			</div>

		)
	}

}
export default Hello