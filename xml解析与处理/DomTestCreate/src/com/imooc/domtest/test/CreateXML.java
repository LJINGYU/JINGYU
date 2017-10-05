package com.imooc.domtest.test;

import java.io.File;
import java.io.IOException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class CreateXML {
	
	public  DocumentBuilder getDocumentBuilder(){
		
		DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
		DocumentBuilder db=null;
		try {
			db = dbf.newDocumentBuilder();
		} catch (ParserConfigurationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return db;
	}
	
	public void XmlParser() {
	//创建一个DocumentBuilder的对象
	try {
		//创建DocumentBuilder对象
		//通过DocumentBuilder对象的parser方法加载books.xml文件到当前项目下
		Document document = getDocumentBuilder().parse("books.xml");
		//获取所有book节点的集合
		NodeList bookList = document.getElementsByTagName("book");
		//通过nodelist的getLength()方法可以获取bookList的长度
		//System.out.println("一共有" + bookList.getLength() + "本书");
		//遍历每一个book节点
		for (int i = 0; i < bookList.getLength(); i++) {
			System.out.println("=================下面开始遍历第" + (i + 1) + "本书的内容=================");
			//通过 item(i)方法 获取一个book节点，nodelist的索引值从0开始
			Node book = bookList.item(i);
//			获取book节点的所有属性集合
			NamedNodeMap attrs = book.getAttributes();
			System.out.println("第 " + (i + 1) + "本书共有" + attrs.getLength() + "个属性");
//			遍历book的属性
			for (int j = 0; j < attrs.getLength(); j++) {
				
				//通过item(index)方法获取book节点的某一个属性
				Node attr = attrs.item(j);
				//获取属性名
				//System.out.print("属性名：" + attr.getNodeName());
				//获取属性值
				//System.out.println("--属性值" + attr.getNodeValue());
				if (attr.getNodeName().equals("id")) {
					
				}
			}
//			//前提：已经知道book节点有且只能有1个id属性
//			//将book节点进行强制类型转换，转换成Element类型
//			Element book = (Element) bookList.item(i);
//			//通过getAttribute("id")方法获取属性值
//			String attrValue = book.getAttribute("id");
//			System.out.println("id属性的属性值为" + attrValue);
			//解析book节点的子节点
			NodeList childNodes = book.getChildNodes();
			//遍历childNodes获取每个节点的节点名和节点值
			//System.out.println("第" + (i+1) + "本书共有" + 
			//childNodes.getLength() + "个子节点");
			for (int k = 0; k < childNodes.getLength(); k++) {
				//区分出text类型的node以及element类型的node
				if (childNodes.item(k).getNodeType() == Node.ELEMENT_NODE) {
					//获取了element类型节点的节点名
					//System.out.print("第" + (k + 1) + "个节点的节点名：" 
					//+ childNodes.item(k).getNodeName());
//					获取了element类型节点的节点值
					//System.out.println("--节点值是：" + childNodes.item(k).getFirstChild().getNodeValue());
//					System.out.println("--节点值是：" + childNodes.item(k).getTextContent());
				}
			}
			System.out.println("======================结束遍历第" + (i + 1) + "本书的内容=================");
		}
	} 
	  catch (SAXException e) {
		e.printStackTrace(); 
	} catch (IOException e) {
		e.printStackTrace();
	}		
	}
	

	
	

	/**
	 * 鐢熸垚xml
	 */
	public void createXML(){
		DocumentBuilder db = getDocumentBuilder();
		Document document = db.newDocument();
		document.setXmlStandalone(true);
		Element bookstore = document.createElement("bookStore");
		//鍚慴ookstore鏍硅妭鐐逛腑娣诲姞瀛愯妭鐐筨ook
		Element book = document.createElement("book");
		Element name = document.createElement("name");
//		name.setNodeValue("灏忕帇瀛?");
		name.setTextContent("青春不言弃");
		
		book.appendChild(name);
		book.setAttribute("id", "1");
		//灏哹ook鑺傜偣娣诲姞鍒癰ookstore鏍硅妭鐐逛腑
		bookstore.appendChild(book);
		//灏哹ookstore鑺傜偣锛堝凡缁忓寘鍚簡book锛夋坊鍔犲埌dom鏍戜腑
		document.appendChild(bookstore);
		//鍒涘缓TransformerFactory瀵硅薄
		TransformerFactory tff = TransformerFactory.newInstance();
		try {
			//鍒涘缓Transformer瀵硅薄
			Transformer tf = tff.newTransformer();
			tf.setOutputProperty(OutputKeys.INDENT, "yes");
			tf.transform(new DOMSource(document),new StreamResult(new File("books1.xml")));
		} catch (TransformerConfigurationException e) {
			e.printStackTrace();
		} catch (TransformerException e) {
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) {
		CreateXML creatXml = new CreateXML();
		creatXml.createXML();
	}

}
