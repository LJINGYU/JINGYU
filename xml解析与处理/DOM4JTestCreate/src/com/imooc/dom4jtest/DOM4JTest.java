package com.imooc.dom4jtest;

import java.io.File;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;




import org.dom4j.Attribute;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.io.OutputFormat;
import org.dom4j.io.SAXReader;
import org.dom4j.io.XMLWriter;

import com.imooc.entity.Book;

public class DOM4JTest {
	private static ArrayList<Book> bookList = new ArrayList<Book>();
	/**
	 * @param args
	 */
	private void parseXML(){
		// ����books.xml�ļ�
				// ����SAXReader�Ķ���reader
				SAXReader reader = new SAXReader();
				try {
					// ͨ��reader�����read��������books.xml�ļ�,��ȡdocuemnt����
					Document document = reader.read(new File("src/res/books.xml"));
					// ͨ��document�����ȡ���ڵ�bookstore
					Element bookStore = document.getRootElement();
					// ͨ��element�����elementIterator������ȡ������
					Iterator it = bookStore.elementIterator();
					// ��������������ȡ���ڵ��е���Ϣ���鼮��
					while (it.hasNext()) {
						System.out.println("=====��ʼ����ĳһ����=====");
						Element book = (Element) it.next();
						// ��ȡbook���������Լ� ����ֵ
						List<Attribute> bookAttrs = book.attributes();
						for (Attribute attr : bookAttrs) {
							System.out.println("��������" + attr.getName() + "--����ֵ��"
									+ attr.getValue());
						}
						Iterator itt = book.elementIterator();
						while (itt.hasNext()) {
							Element bookChild = (Element) itt.next();
							System.out.println("�ڵ�����" + bookChild.getName() + "--�ڵ�ֵ��" + bookChild.getStringValue());
						}
						System.out.println("=====��������ĳһ����=====");
					}
				} catch (DocumentException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
	}
	
	private void createXML(){
		//1.����document���󣬴�������xml�ĵ�
		Document document = DocumentHelper.createDocument();
		//2.�������ڵ�rss
		Element rss = document.addElement("rss");
		//3.��rss�ڵ������version����
		rss.addAttribute("version", "2.0");
		//4.�����ӽڵ㼰�ڵ�����
		Element channel = rss.addElement("channel");
		Element title = channel.addElement("title");
		title.setText("<![CDATA[�Ϻ��ƶ���������ҵ�ٽ�������ʽ���� ]]>");
		//5.��������xml�ĸ�ʽ
		OutputFormat format = OutputFormat.createPrettyPrint();
		format.setEncoding("GBK");
		//6.����xml�ļ�
		File file = new File("rssnews.xml");
		XMLWriter writer;
		try {
			writer = new XMLWriter(new FileOutputStream(file), format);
			//�����Ƿ�ת�壬Ĭ��ֵ��true������ת��
			writer.setEscapeText(false);
			writer.write(document);
			writer.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	public static void main(String[] args) {
		new DOM4JTest().createXML();
	}
	

}
