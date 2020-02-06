package com.example.Boards.model;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;


public class boardentryRowMapper implements RowMapper<boardentry> {
	
	@Override
	public boardentry mapRow(ResultSet row, int rowNum) throws SQLException {
		
		boardentry board = new boardentry();
		
		board.setId(row.getInt("id"));
		board.setBname(row.getString("bname"));
		return board;
	
}
}
