import React from "react"
class Test extends React.Component{
	componentDidMount(){
	console.log(432345)

	}
	componentWillReceiveProps(nextProps){
		console.log("text receive",nextProps)
	}
	render(){
		console.log("test render")
		return(
			<div>
				hello{this.props.num}
			</div>
			)
	}
}
export default Test