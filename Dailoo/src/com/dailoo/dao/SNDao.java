package com.dailoo.dao;

import java.util.List;

import com.dailoo.domain.SerialNumber;

public interface SNDao extends Dao{

	/**
	 * 新增一筆序號
	 * @param sn 序號Bean
	 */
	void addSN(SerialNumber sn);

	/**
	 * 找出所有的序號
	 * @return 序號的List集合
	 */
	List<SerialNumber> findAllSN();

	/**
	 * 根據Code找出序號
	 * @param code 序號代碼
	 * @return 序號Bean
	 */
	SerialNumber findSNByCode(String code);

}
