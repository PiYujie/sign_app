<template>
	<div class="in_mess">
		<xheader2>报名情况</xheader2>
		<div class="title">
			<b :class="{'check':num == 1}" @click="checked(1)">显示全部</b>
			<b :class="{'check':num == 2}" @click="checked(2)">报名成功</b>
			<b :class="{'check':num == 3}" @click="checked(3)">报名失败</b>
		</div>
	</div>
</template>

<script>
	//公共组件
	import xheader2 from "../app-header2.vue";
	export default{
		components:{
			xheader2
		},
		data(){
			return {
				num:1
			}
		},
		methods:{
			checked(num){
				this.num = num
			}
		}
	}
</script>

<style scoped="scoped">
	.in_mess{
		display: flex;
		width: 100%;
		flex-direction: column;
	}
	.title{
		display: flex;
		padding: 1rem 2rem;
		height: 3rem;
		background-color: #e7e7e7;
	}
	.title b{
		display: flex;height: 3rem;
		flex: 1;
		color: #F64141;
		font-style: normal;
		align-items: center;
		border-radius: 0.2rem;
		justify-content: center;
		border: 1px solid #fff;
		font-size: 1.6rem;
	}
	.title .check{
		background-color: #F64141;
		color: #fff;
	}
</style>