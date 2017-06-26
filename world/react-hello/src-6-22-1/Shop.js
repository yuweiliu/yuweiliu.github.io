import React from "react"
class Shop extends React.Component{
	constructor(){
		super()
		this.state = {

			data:[
				{name:"裤子",price:30,num:12},
				{name:"裤子",price:30,num:12},
				{name:"裤子",price:30,num:12}

				]
		}
	}
	handlenum(index,num){
		let newData = this.state.data
		newData[index].num = newData[index].num+num
		if(newData[index].num<=0){
			newData[index].num = 0
		}
		this.setState({
			data: newData
		})
	}
	move(index){
		console.log(index)
		let newData = this.state.data
		newData.splice(index,1)
		this.setState({
			data: newData
		})
	}
	render(){
		let result = 0;
		this.state.data.forEach( item => result=result+(item.price*item.num))
		return(
			<div>
			{
				this.state.data.length === 0 ? '没有数据' :
				<table>
					<thead>
						<tr>
							<th>商品名称</th>
							<th>价钱</th>
							<th>数量</th>
							<th>小计</th>
							<th>删除</th>
						</tr>
					</thead>
					<tbody>
						{
							this.state.data.map((item,index) =>
							<tr key={index}>
								<th>{item.name} </th>
								<th>{item.price} </th>
								<th>
									<button onClick={this.handlenum.bind(this,index,-1)}>-</button>
									{item.num} 
									<button onClick={this.handlenum.bind(this,index,1)}>+</button>
								</th>
								<th>{item.price*item.num}</th>
								<th><button onClick={this.move.bind(this,index)}>删除</button></th>
							</tr>
							)
							
					}
						<tr><th>总价：{result}</th></tr>	
					</tbody>
				</table>
			}
				
			</div>	
			)
	}
}
export default Shop