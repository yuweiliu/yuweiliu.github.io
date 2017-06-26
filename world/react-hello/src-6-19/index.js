import React from "react"
import ReactDOM from "react-dom";
import Header from "./Header.js"
import "./main.css"
import "./box1.css"
// let obj = {
// 	name :"jie",
// 	age :2489374,
// 	tall :75788
// }
// let name = "liuywei"
// let male = true
// let arr = <h1>我是你</h1>

// let ele  = <div id="aaa"><h1>hello</h1>{name}{arr}<p>world姓名：{obj.name}</p><p>{male ? '男':'女'}</p></div>
ReactDOM.render(
	<div>
		<Header />
	</div>,
	document.getElementById("root")
	)