import React from "react"
import propTypes from "prop-types"
class Btn extends React.Component{
	render(){
		console.log(this.props.children)
		let styles = {
			background:this.props.bg, 
			color:this.props.col
		}
		return(

			<button style={styles}>{this.props.children}</button>
			)
	}
}
Btn.defaultProps = {
	bg:"pink",
	col:"green"
}
Btn.propTypes = {
	bg:propTypes.string,
	col:propTypes.string
}
//判断是否数据类型正确，不正确给提示
export default Btn