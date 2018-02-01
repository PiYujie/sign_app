## Sign up and sign in system —— 报名签到系统
### 前后端分类
#### 前端——用户端
* 登录
	+ 学号、密码登录，验证码验证（两次密码输入错误后）
* 注册 
	+ 将客户端与学号进行绑定
* 增
	1. 进行报名——添加报名信息
		+ 参加比赛
		+ 参加活动
		+ 参加考试
	2. 进行签到——添加签到信息
* 改
	1. 在考试预约截止时间内可修改预约信息，如手机号等
	2. 在考试预约截止时间内可放弃预约考试
	3. 在报名截止时间内可修改报名信息，如爱好、特长等
	4. 在报名截止时间内可放弃报名
	5. 个人信息修改，如：头像、密码、昵称等
	6. 不可修改学号、姓名、性别、年龄、学院、专业、年级
* 查
	1. 个人信息显示
	2. 活动信息显示
		+ 考试预约信息
		+ 最新活动信息
		+ 活动签到信息
* 签到
	+ 通过客户端的扫一扫功能进行签到，上传当前绑定账号者学号
	
#### 后端——管理员端
* 增
	1. 添加活动
	2. 添加考试信息
	3. 添加报名信息
	4. 新增学生
* 删
	1. 删除活动
	2. 删除报名信息
	3. 删除考试信息
	4. 删除学生
* 改
	1. 修改学生信息
	2. 修改修改报名要求
	3. 修改考试预约要求
	4. 修改活动信息
* 查
	1. 查询活动信息
	2. 查询报名信息
	3. 查询考试信息
	4. 查询学生信息
	5. 查询管理员信息
* 导出
	+ 将报名信息导出成为Excel表格
- - - 
### 数据字典
#### 管理员表 manager
|列名|类型|长度|描述|
|-|-|-|-|
|man_id|varchar|10|管理员ID，主键|
|man_name|varchar|15|管理员用户名，可为空|
|man_pass|varchar|15|管理员密码|
|man_img|varchar|200|头像|
|man_type|varchar|200|管理员身份，1：发布者；0：超级管理员|

#### 学生信息表 student
|列名|类型|长度|描述|
|-|-|-|-|
|stu_id|varchar|11|学生ID，主键|
|stu_name|varchar|15|学生姓名|
|stu_pass|varchar|15|学生密码|
|sex|varchar|4|性别|
|birthday|varchar|20|出生日期，以此计算年龄|
|major|varchar|20|专业|
|academy|varchar|20|所属学院|
|grade|int|4|年级|
|phone_number|int|11|手机号码，可为空|
|stu_img|varchar|200|头像，存储图片路径|
|credit|float|5|学分，默认为0|
|work_time|float|5|义工时长，默认为0|
|email|varchar|50|邮箱|



#### 活动表 activity
|列名|类型|长度|描述|
|-|-|-|-|
|active_id|varchar|10|活动编号，主键|
|active_name|varchar|15|活动名称|
|begin_time|varchar|20|开始时间|
|stop_time|varchar|20|报名截止时间|
|address|varchar|20|举行地址|
|active_type|varchar|20|所属类型|
|num|int|4|人数|
|describe|varchar|500|描述，可为空|
|act_from|varchar|100|主办单位|
|condition|varchar|200|报名条件|
|reward|varchar|200|活动奖励：义工、学分|
|qrcode|varchar|200|二维码|


#### 报名表 sign_up
|列名|类型|长度|描述|
|-|-|-|-|
|up_id|varchar|10|报名编号，主键|
|up_type|varchar|15|报名类型：考试、竞赛、社团|
|status|varchar|20|报名状态：审核中、报名成功、报名失败|
|stu_id|varchar|11|学号|
|sign_in|int|1|签到，0：未签到；1：签到成功；2：无效签到|
|in_time|varchar|200|报名时间|
|up_time|varchar|200|签到时间|
