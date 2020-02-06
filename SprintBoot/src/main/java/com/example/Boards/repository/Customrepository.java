package com.example.Boards.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.example.Boards.model.boardentry;
import com.example.Boards.model.boardentryRowMapper;

@Repository
public class Customrepository {
	
	@Autowired
	private JdbcTemplate jdbctemplate;

	public List<boardentry> getart() {
 		
		String sql="SELECT * from boardentry";
 		RowMapper<boardentry> rowMapper = new boardentryRowMapper();
 		return this.jdbctemplate.query(sql, rowMapper);
 	}
}
