package com.chinook5.controller.converter;

import org.springframework.beans.propertyeditors.PropertiesEditor;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;

import java.beans.PropertyEditorSupport;
import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


public  abstract class CustomDateConverter {
	@InitBinder  
	public void InitBinder(WebDataBinder dataBinder){  
		dataBinder.registerCustomEditor(Date.class, new PropertyEditorSupport() {  
	        public void setAsText(String value) {  
	            try {
	            	if(value.length() > 16)
	            	{
	            		setValue(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(value));
	            	}else if(value.length() > 10){
	            		setValue(new SimpleDateFormat("yyyy-MM-dd HH:mm").parse(value));
	            	}else{
	            		setValue(new SimpleDateFormat("yyyy-MM-dd").parse(value));
	            	}
	            } catch(ParseException e) {  
	                setValue(null);  
	            }  
	        }  
	  
	        public String getAsText() {  
	            return new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format((Date) getValue());  
	        }          
	    });  
		
		//double类型
		dataBinder.registerCustomEditor(Double.class, new DoubleEditor());
		dataBinder.registerCustomEditor(BigDecimal.class, new BigDecimalEditor());
	}
	
}

class DoubleEditor extends  PropertiesEditor {
@Override
public void setAsText(String text) throws IllegalArgumentException {
    if (text == null || text.equals("")) {
text = "0";
}
setValue(Double.valueOf(text));
}
@Override
public String getAsText() {
      return getValue().toString();
}
}

class BigDecimalEditor extends  PropertiesEditor {
	@Override
	public void setAsText(String text) throws IllegalArgumentException {
		if (text == null || text.equals("")) {
			text = "0";
		}
		setValue(new BigDecimal(text));
	}
	@Override
	public String getAsText() {
		return getValue().toString();
	}
}