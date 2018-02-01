<template>
	<div class="head">
		<img src="/img/font/return1.png" @click="return_mine"/>
		<span><slot>设置</slot></span>
		<i> </i>
	</div>
</template>

<script>
	export default{
		methods:{
			return_mine(){
				location.href = '#/index/mine'
			}
		}
	}
</script>

<style scoped="scoped">
	.head{
		padding: 0 1.6rem;
		/*width: 100%;*/
		height:4.6rem;
		background-color: #F64141;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #FFFFFF;
		align-items: center;
		font: 2rem/4.6rem "微软雅黑";
	}
	.head i{
		display: flex;
	}
	.head i img{
		width: 2rem;height: 2rem;
	}
</style>