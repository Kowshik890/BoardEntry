package com.example.Boards.model;

import javax.persistence.*;

//@XmlRootElement
@Entity

public class boardentry {

	@Id
	private int id;
	private String bname;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getBname() {
		return bname;
	}
	public void setBname(String bname) {
		this.bname = bname;
	}
	
	public boardentry() {
		
	}
}
