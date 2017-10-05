package com.imooc.jdomtest;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

import org.jdom2.Document;
import org.jdom2.Element;
import org.jdom2.output.Format;
import org.jdom2.output.XMLOutputter;


public class JDOMTestCreate {

	private void createXML() {
		//1.鐢熸垚涓�涓牴鑺傜偣
		Element rss = new Element("rss");
		//2.涓鸿妭鐐规坊鍔犲睘鎬�
		rss.setAttribute("version", "2.0");
		//3.鐢熸垚涓�涓猟ocument瀵硅薄
		Document document = new Document(rss);
		
		Element channel = new Element("channel");
		rss.addContent(channel);
		Element title = new Element("title");
		title.setText("<![CDATA[上海移动互联网产业促进中心正式揭牌 ]]>");
		//可以转义特殊字符
		//title.addContent(new CDATA("<国内最新新闻>"));
 		//title.setContent(new CDATA("<国内最新新闻>"));
		channel.addContent(title);
		
		Format format = Format.getCompactFormat();
		format.setIndent("");
		format.setEncoding("GBK");
		
		//4.鍒涘缓XMLOutputter鐨勫璞�
		XMLOutputter outputer = new XMLOutputter(format);
		try {
			//5.鍒╃敤outputer灏哾ocument瀵硅薄杞崲鎴恱ml鏂囨。
			outputer.output(document, new FileOutputStream(new File("rssnews.xml")));
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) {
		JDOMTestCreate creater = new JDOMTestCreate();
		creater.createXML();
	}

}
