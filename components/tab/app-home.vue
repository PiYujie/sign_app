<template>
	<div class="content">
			<div class="banner">
				<img src="/img/timg1.jpg"/>
			</div>
			<div class="cont">
				<a href="#/detail">
					<img src="/img/timg.jpg"/>
					<p>
						<b>铃声叮当梦悠长—“铃动校园”风铃节</b>
						<em>内容简介</em>
					</p>
				</a>
				<a href="#">
					<img src="/img/logo.png"/>
					<p>
						<b>标题</b>
						<em>感和使命使,学校面向全校学生公开招募优秀学生作为2018 年寒假招生宣传志愿者,以寒假社会实践形式,回到高中母校对辽宁工程技术大学进行宣传推介</em>
					</p>
				</a>
				<a href="#">
					<img src="/img/logo.png"/>
					<p>
						<b>标题</b>
						<em>感和使命使,学校面向全校学生公开招募优秀学生作为2018 年寒假招生宣传志愿者,以寒假社会实践形式,回到高中母校对辽宁工程技术大学进行宣传推介</em>
					</p>
				</a>
				<a href="#">
					<img src="/img/logo.png"/>
					<p>
						<b>标题</b>
						<em>感和使命使,学校面向全校学生公开招募优秀学生作为2018 年寒假招生宣传志愿者,以寒假社会实践形式,回到高中母校对辽宁工程技术大学进行宣传推介</em>
					</p>
				</a>
				<a href="#">
					<img src="/img/timg.jpg"/>
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
			.content{
				width: 100%;
				padding-bottom: 5rem;
				display: flex;
				flex-direction: column;
			}
			/*宣传图片*/
			.banner{
				width: 100%;
				height: 15rem;
				margin: 0.75rem 0;
			}
			.banner img{
				width: 100%;height: 100%;
			}
			.cont{
				display: flex;
				flex-direction: column;
				margin-top: 1rem;
			}
			.cont a{
				height:5.2rem;
				padding: 0.95rem 1rem;
				display: flex;
				justify-content: flex-start;
				border-top: 2px solid #e8e8ea;
				color: #666;
			}
			.cont a img{
				display: flex;
				height: 5.2rem;width: 5.2rem;
			}
			.cont a p{
				padding:0 1rem;
				height: 5.2rem;width: 100%;
				display: flex;flex: 6;
				flex-direction: column;
				justify-content: center;
			}
			.cont a p b{
				height: 1.5rem;
				color: #55585e;
				font-size: 1.3rem;
			}
			.cont a p em{
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