# cn.console

> ### 一个简单js的log管理者
> ### 可通用cn.switch或console.switch设置是否开启打印
> ### 默认开启状态：cn.switch = true;
> ### 想要关闭打印：cn.switch = false;
> ### 如您想使用更多的功能，告诉我，我加。。
> ### 微信: 15011021101


---
## npm 下载
	// 第一种方式
	npm i cn.console --save
	
	// 第二种方式
	
	git clone https://github.com/cncod/cn.console.git

	// 第三种方式，下载zip，解压即可
	https://github.com/cncod/cn.console/archive/master.zip


## 引入库
	// 第一种方式
	import cn from 'cn.console'
	
	// 第二种方式，直接 require就行，cn是全局变量
	require('cn.console')

	// 第三种方式
	<script type="text/javascript" src="cn.console.js">


## 示例
	//  
	cn.log('王晓维')
	cn.error('王晓维')
	
	// 
	console.log('王晓维')
	console.error('王晓维')


>### cn 等同于 console, console原本有什么方法，在里都可以使用
>### 看个人习惯使用方式, 它们本身指向相同
	
	


