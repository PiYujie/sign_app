<template>
	<div class="content">
		<div class="banner">
			<img src="/img/timg1.jpg" />
		</div>
		<div class="cont">
			<p>
				<a href="#/detail">
					<img src="/img/font/edu.png" />
					<em>创业教育</em>
				</a>
				<a href="#/detail">
					<img src="/img/font/new.png" />
					<em>科技创新</em>
				</a>
				<a href="#/detail">
					<img src="/img/font/race.png" />
					<em>科学竞赛</em>
				</a>
			</p>
			<p>
				<a href="#/detail">
					<img src="/img/font/act.png" />
					<em>文化活动</em>
				</a>
				<a href="#/detail">
					<img src="/img/font/leture.png" />
					<em>学术讲座</em>
				</a>
				<a href="#/detail">
					<img src="/img/font/read.png" />
					<em>名著阅读</em>
				</a>
			</p>
			<p>
				<a href="#/detail">
					<img src="/img/font/exam.png" />
					<em>考试预约</em>
				</a>
				<a href="#/detail">
					<img src="/img/font/star.png" />
					<em>科技创新</em>
				</a>
				<a href="#/detail">
					<img src="/img/font/star.png" />
					<em>科学竞赛</em>
				</a>
			</p>
		</div>
		<div class="notice">
			<img src="/img/notice.jpg"/>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	/*内容区样式设置*/
	
	.content {
		width: 100%;
		padding-bottom: 5rem;
		display: flex;
		flex-direction: column;
	}
	/*宣传图片*/
	
	.banner {
		width: 100%;
		height: 15rem;
		/*margin: 0.75rem 0;*/
	}
	
	.banner img {
		width: 100%;
		height: 100%;
	}
	/*内容区*/
	.cont {
		display: flex;
		flex-direction: column;
		/*margin: 1rem 0;*/
		border-bottom: 2px solid #E5E5E5;
		border-top: 2px solid #E5E5E5;
	}
	.cont p{
		height: 7rem;
		display: flex;
		margin: 0 1.8rem;
		/*border-bottom: 1px solid #E5E5E5;*/
	}
	.cont p a{
		display: flex;
		flex: 1;height: 7rem;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		color: #666;
		box-sizing: border-box;
		/*border-right: 1px solid #E5E5E5;*/
		padding: 1.3rem 0;
	}
	.cont p a img{
		display: flex;
		width: 2.4rem;height: 2.4rem;
	}
	.cont p a em{
		font-style: normal;
	}
	.notice{
		width: 100%;
	}
	.notice img{
		width: 100%;
	}
</style>