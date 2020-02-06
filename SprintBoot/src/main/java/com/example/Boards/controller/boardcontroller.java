package com.example.Boards.controller;

import com.example.Boards.model.boardentry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Boards.repository.Customrepository;
import com.example.Boards.repository.boardrepository;


import java.util.List;

import javax.sql.DataSource;

@RestController
@CrossOrigin
public class boardcontroller {

	@Autowired
    DataSource dataSource;
	
	@Autowired
	boardrepository dao;
	
	@Autowired
	Customrepository repo;
	
	 @CrossOrigin
	 @RequestMapping(path="/boards/all", method=RequestMethod.GET)
	    public List<boardentry> findAll() {
	        return dao.findAll();
	    }
	    
	    @CrossOrigin
	    @PostMapping("/boards/add")
		public boardentry addboard(@RequestBody boardentry board) {
		    return dao.save(board);
		    
		}
	    
	    @DeleteMapping("/boards/{id}")
	    public boolean deleteboard(@PathVariable("id") Integer id) {
	         dao.deleteById(id);
	         return true;
	    }
	    
	    @PutMapping("/boards/add")
	    public boardentry updateboard(@RequestBody boardentry board) {
	        return dao.save(board);
	    }
	    
	    @GetMapping("/lastboard")
		public ResponseEntity<List<boardentry>> getart() {
			List<boardentry> list = repo.getart();
			return new ResponseEntity<List<boardentry>>(list, HttpStatus.OK);
			
			//System.out.println(List.id);
		}
	    
	    
}
