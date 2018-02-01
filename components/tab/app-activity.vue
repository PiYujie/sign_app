<template>
	<div class="content">
		<h3>
			最新活动
		</h3>
		<div class="cont">
			<a href="#/detail">
				<img src="/img/timg.jpg" />
				<p>
					<b>铃声叮当梦悠长—“铃动校园”风铃节</b>
					<em>内容简介</em>
				</p>
			</a>
			<a href="#">
				<img src="/img/logo.png" />
				<p>
					<b>标题</b>
					<em>感和使命使,学校面向全校学生公开招募优秀学生作为2018 年寒假招生宣传志愿者,以寒假社会实践形式,回到高中母校对辽宁工程技术大学进行宣传推介</em>
				</p>
			</a>
			<a href="#">
				<img src="/img/logo.png" />
				<p>
					<b>标题</b>
					<em>感和使命使,学校面向全校学生公开招募优秀学生作为2018 年寒假招生宣传志愿者,以寒假社会实践形式,回到高中母校对辽宁工程技术大学进行宣传推介</em>
				</p>
			</a>
			<a href="#">
				<img src="/img/logo.png" />
				<p>
					<b>标题</b>
					<em>感和使命使,学校面向全校学生公开招募优秀学生作为2018 年寒假招生宣传志愿者,以寒假社会实践形式,回到高中母校对辽宁工程技术大学进行宣传推介</em>
				</p>
			</a>
			<a href="#">
				<img src="/img/timg.jpg" />
				<p>
					<b>铃声叮当梦悠长—“铃动校园”风铃节</b>
					<em>内容简介</em>
				</p>
			</a>
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
		align-items: center;
		justify-content: center;
	}
	.content h3{
		height: 5rem;width: 20rem;
		text-align: center;
		font-size: 2rem;line-height: 5rem;
		background:url(/img/font/xian.png) no-repeat;
		background-size: 20rem 7rem;
		color: #333;
	}
	.cont {
		display: flex;
		flex-direction: column;
	}
	.cont a {
		height: 5.2rem;
		padding: 0.95rem 1rem;
		display: flex;
		justify-content: flex-start;
		border-bottom: 2px solid #e8e8ea;
		color: #666;
	}
	
	.cont a img {
		display: flex;
		height: 5.2rem;
		width: 5.2rem;
	}
	
	.cont a p {
		padding: 0 1rem;
		height: 5.2rem;
		width: 100%;
		display: flex;
		flex: 6;
		flex-direction: column;
		justify-content: center;
	}
	
	.cont a p b {
		height: 1.5rem;
		color: #55585e;
		font-size: 1.3rem;
	}
	
	.cont a p em {
		height: 1.5rem;
		font-size: 1rem;
		font-style: normal;
		width: 100%;
		overflow: hidden;
		color: #909090;
		/*white-space: nowrap;
				text-overflow: ellipsis;*/
	}
</style>