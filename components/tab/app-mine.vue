<template>
	<div class="mine">
		<header>
			<img src="/img/animal1.jpg"/>
			<span><img src="/img/1.jpg"/></span>
		</header>
		<a href="#"><img src="/img/font/star.png"/><span>个人信息</span></a>
		<a href="#"><img src="/img/font/signin2.png"/><span>报名查询</span></a>
		<a href="#"><img src="/img/font/change.png"/><span>签到查询</span></a>
		<a href="#" class="bottom"><img src="/img/font/shezhi.png"/><span>设置</span></a>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	/*我的页面*/
	.mine{
		display: flex;
		flex-direction: column;
	}
	.mine header{
		width: 100%;
		height: 10rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 1.5rem;
		position: relative;
	}
	.mine header img{
		width: 100%;height: 100%;
	}
	.mine header span{
		position: absolute;
		bottom: -2.5rem;right: 5rem;
	}
	.mine header span img{
		width: 5rem;height: 5rem;
		border-radius: 5rem;
	}
	.mine a{
		display: flex;
		align-items: center;
		height: 5rem;
		color: #666;
		font-size: 1.6rem;
		border-top: 1px solid #d8b2b2;
	}
	.mine a img{
		display: flex;
		padding:0 1rem;
		align-items: center;
	}
	.bottom{
		border-bottom: 1px solid #d8b2b2;
	}
</style>