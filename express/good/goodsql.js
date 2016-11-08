var good={
	//增
	goodinsert:'INSERT INTO `iten1` (`id`,`name`,`words`,`price`,`redidue`) VALUES(?,?,?,?,?)',
	//删
	gooddelete: 'delete from iten1 where id=?',
	//改
	goodupdate:'UPDATE `iten1` SET  `name`=?,`words`=?,`price`=?,`redidue`=? WHERE `id`=?',
    //查
    goodAll: 'select * from iten1',
    goodById: 'select * from iten1 where id=?',
		dingAll:'select * from ding1',
		dingById: 'select * from ding1 where d_num=?',
		dingByUser_name: 'select * from ding1 where user_name=?',
		dingUpdate:'UPDATE `ding1` SET  `user_name`=?,`user_count`=?,`user_data`=?,`user_addr`=?,`user_get`=?,`id`=?,`names`=? ,`price`=? ,`sum`=?WHERE `d_num`=?',
		dingdelete: 'delete from ding1 where d_num=?'
}

module.exports=good;
