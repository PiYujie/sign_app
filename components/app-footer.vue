<template>
	<div class="footer">
		<a href="#/index/home" >
			<img src="/img/font/shouye.png"/>
			<span>首页</span>
		</a>
		<a href="#/index/activity">
			<img src="/img/font/activity1.png"/>
			<span>活动</span>
		</a>
		<a href="#/index/signin">
			<img src="/img/font/signin1.png"/>
			<span>报名</span>
		</a>
		<a href="#/index/mine" class="footer-check">
			<img src="/img/font/mine.png"/>
			<span>我的</span>
		</a>
	</div>
</template>

<script>
	export default{
	}
</script>

<style>
	/*底部样式设置*/
	.footer{
		height: 5rem;width: 100%;
		background-color: #F64141;
		border-top: 1px solid #d8b2b2;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.footer a{
		display: flex;
		flex: 1;height: 5rem;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #fff;
		font-size: 1.5rem;
	}
	.footer a img{
		width: 2.5rem;height: 2.5rem;
	}
</style>