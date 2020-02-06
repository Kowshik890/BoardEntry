package com.example.Boards.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.Boards.model.boardentry;

@Repository
public interface boardrepository extends CrudRepository<boardentry, Integer> {
	
	
	//@Query(value="SELECT id,bname from boardentry where id = (select max(id) from boardentry)")
	//@Query(value="select id,bname from boardentry where id>3")
	List<boardentry> findAll();
	
	boardentry save(boardentry board);
	
	//boolean deleteById(Integer id);
}
	
