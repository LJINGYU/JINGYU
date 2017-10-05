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
	//����һ��DocumentBuilder�Ķ���
	try {
		//����DocumentBuilder����
		//ͨ��DocumentBuilder�����parser��������books.xml�ļ�����ǰ��Ŀ��
		Document document = getDocumentBuilder().parse("books.xml");
		//��ȡ����book�ڵ�ļ���
		NodeList bookList = document.getElementsByTagName("book");
		//ͨ��nodelist��getLength()�������Ի�ȡbookList�ĳ���
		//System.out.println("һ����" + bookList.getLength() + "����");
		//����ÿһ��book�ڵ�
		for (int i = 0; i < bookList.getLength(); i++) {
			System.out.println("=================���濪ʼ������" + (i + 1) + "���������=================");
			//ͨ�� item(i)���� ��ȡһ��book�ڵ㣬nodelist������ֵ��0��ʼ
			Node book = bookList.item(i);
//			��ȡbook�ڵ���������Լ���
			NamedNodeMap attrs = book.getAttributes();
			System.out.println("�� " + (i + 1) + "���鹲��" + attrs.getLength() + "������");
//			����book������
			for (int j = 0; j < attrs.getLength(); j++) {
				
				//ͨ��item(index)������ȡbook�ڵ��ĳһ������
				Node attr = attrs.item(j);
				//��ȡ������
				//System.out.print("��������" + attr.getNodeName());
				//��ȡ����ֵ
				//System.out.println("--����ֵ" + attr.getNodeValue());
				if (attr.getNodeName().equals("id")) {
					
				}
			}
//			//ǰ�᣺�Ѿ�֪��book�ڵ�����ֻ����1��id����
//			//��book�ڵ����ǿ������ת����ת����Element����
//			Element book = (Element) bookList.item(i);
//			//ͨ��getAttribute("id")������ȡ����ֵ
//			String attrValue = book.getAttribute("id");
//			System.out.println("id���Ե�����ֵΪ" + attrValue);
			//����book�ڵ���ӽڵ�
			NodeList childNodes = book.getChildNodes();
			//����childNodes��ȡÿ���ڵ�Ľڵ����ͽڵ�ֵ
			//System.out.println("��" + (i+1) + "���鹲��" + 
			//childNodes.getLength() + "���ӽڵ�");
			for (int k = 0; k < childNodes.getLength(); k++) {
				//���ֳ�text���͵�node�Լ�element���͵�node
				if (childNodes.item(k).getNodeType() == Node.ELEMENT_NODE) {
					//��ȡ��element���ͽڵ�Ľڵ���
					//System.out.print("��" + (k + 1) + "���ڵ�Ľڵ�����" 
					//+ childNodes.item(k).getNodeName());
//					��ȡ��element���ͽڵ�Ľڵ�ֵ
					//System.out.println("--�ڵ�ֵ�ǣ�" + childNodes.item(k).getFirstChild().getNodeValue());
//					System.out.println("--�ڵ�ֵ�ǣ�" + childNodes.item(k).getTextContent());
				}
			}
			System.out.println("======================����������" + (i + 1) + "���������=================");
		}
	} 
	  catch (SAXException e) {
		e.printStackTrace(); 
	} catch (IOException e) {
		e.printStackTrace();
	}		
	}
	

	
	

	/**
	 * 生成xml
	 */
	public void createXML(){
		DocumentBuilder db = getDocumentBuilder();
		Document document = db.newDocument();
		document.setXmlStandalone(true);
		Element bookstore = document.createElement("bookStore");
		//向bookstore根节点中添加子节点book
		Element book = document.createElement("book");
		Element name = document.createElement("name");
//		name.setNodeValue("小王�?");
		name.setTextContent("�ഺ������");
		
		book.appendChild(name);
		book.setAttribute("id", "1");
		//将book节点添加到bookstore根节点中
		bookstore.appendChild(book);
		//将bookstore节点（已经包含了book）添加到dom树中
		document.appendChild(bookstore);
		//创建TransformerFactory对象
		TransformerFactory tff = TransformerFactory.newInstance();
		try {
			//创建Transformer对象
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
