import React from "react"
import PropTypes from 'prop-types';
class Card extends React.Component{
    handleClick(){
    	this.props.xxx()
    }
	render(){
		return(
			<div style={{border:"1px solid #ccc",width:"300px",borderRadius:"3px"}}>
				<div style={{overflow:"hidden",padding:"3px 5px",borderBottom:"1px solid #ccc"}}>
					<h3 style={{float:"left"}} onClick={this.handleClick.bind(this)}>{this.props.title}</h3>
					<div style={{float:"right"}}>{this.props.extra}</div>
				</div>
				<div>
					{this.props.children}
				</div>
			</div>
			)
	}
}
Card.defaultProps = {
	title: 'default title',
	extra: <a href="http://www.baidu.com">百度</a>,
	children: <p>请传入 chilren 属性</p>,
}
Card.propTypes = {
	title: PropTypes.string,
  extra: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  style: PropTypes.object
};
export default Card