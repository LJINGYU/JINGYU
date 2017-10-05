package com.imooc.test;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Result;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.sax.SAXTransformerFactory;
import javax.xml.transform.sax.TransformerHandler;
import javax.xml.transform.stream.StreamResult;

import org.xml.sax.SAXException;
import org.xml.sax.helpers.AttributesImpl;

import com.imooc.entity.Book;
import com.imooc.handler.SAXParserHandler;


public class SAXTestCreate {

	public ArrayList<Book> parseXML(){
		SAXParserFactory factory = SAXParserFactory.newInstance();
		//ͨ��factory��ȡSAXParserʵ��
		SAXParserHandler handler=null;
		try {
			SAXParser parser = factory.newSAXParser();
			//����SAXParserHandler����
			 handler = new SAXParserHandler();
			parser.parse("books.xml", handler);
			
		} catch (ParserConfigurationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SAXException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return handler.getBookList();
	}
	
	public void createXML() {
		Book b1 = new Book();
		b1.setId("1");
		b1.setName("火之歌");
		b1.setAuthor("马丁");
		b1.setYear("2014");
		b1.setPrice("89");
		Book b2 = new Book();
		b2.setId("2");
		b2.setName("瀹兵之歌");
		b2.setAuthor("");
		b2.setYear("2004");
		b2.setPrice("77");
		b2.setLanguage("English");
		ArrayList<Book> bookList = new ArrayList<Book>();
		bookList.add(b1);
		bookList.add(b2);
		// 鐢熸垚xml
		// 1.鍒涘缓涓?涓猅ransformerFactory绫荤殑瀵硅薄
		SAXTransformerFactory tff = (SAXTransformerFactory) SAXTransformerFactory
				.newInstance();
		try {
			// 2.閫氳繃SAXTransformerFactory瀵硅薄鍒涘缓涓?涓猅ransformerHandler瀵硅薄
			TransformerHandler handler = tff.newTransformerHandler();
			// 3.閫氳繃handler瀵硅薄鍒涘缓涓?涓猅ransformer瀵硅薄
			Transformer tr = handler.getTransformer();
//			 4.閫氳繃Transformer瀵硅薄瀵圭敓鎴愮殑xml鏂囦欢杩涜璁剧疆
//			// 璁剧疆xml鐨勭紪鐮?
			tr.setOutputProperty(OutputKeys.ENCODING, "UTF-8");
//			// 璁剧疆xml鐨勨?滄槸鍚︽崲琛屸??
		   tr.setOutputProperty(OutputKeys.INDENT, "yes");
			// 5.鍒涘缓涓?涓猂esult瀵硅薄
			File f = new File("src/res/newbooks.xml");
			if (!f.exists()) {
				f.createNewFile();
			}
			// 6.鍒涘缓Result瀵硅薄锛屽苟涓斾娇鍏朵笌handler鍏宠仈
			Result result = new StreamResult(new FileOutputStream(f));
			handler.setResult(result);
			// 7.鍒╃敤handler瀵硅薄杩涜xml鏂囦欢鍐呭鐨勭紪鍐橭
			// 鎵撳紑document
			handler.startDocument();
			AttributesImpl attr = new AttributesImpl();
			handler.startElement("", "", "bookstore", attr);
			
			for (Book book : bookList) {
				attr.clear();
				attr.addAttribute("", "", "id", "", book.getId());
				handler.startElement("", "", "book", attr);
				// 鍒涘缓name鑺傜偣
				if (book.getName() != null && !book.getName().trim().equals("")) {
					attr.clear();
					handler.startElement("", "", "name", attr);
					handler.characters(book.getName().toCharArray(), 0, book
							.getName().length());
					handler.endElement("", "", "name");
				}
				// 鍒涘缓year鑺傜偣
				if (book.getYear() != null && !book.getYear().trim().equals("")) {
					attr.clear();
					handler.startElement("", "", "year", attr);
					handler.characters(book.getYear().toCharArray(), 0, book
							.getYear().length());
					handler.endElement("", "", "year");
				}
				// 鍒涘缓author鑺傜偣
				if (book.getAuthor() != null && !book.getAuthor().trim().equals("")) {
					attr.clear();
					handler.startElement("", "", "author", attr);
					handler.characters(book.getAuthor().toCharArray(), 0, book
							.getAuthor().length());
					handler.endElement("", "", "author");
				}
				// 鍒涘缓price鑺傜偣
				if (book.getPrice() != null && !book.getPrice().trim().equals("")) {
					attr.clear();
					handler.startElement("", "", "price", attr);
					handler.characters(book.getPrice().toCharArray(), 0, book
							.getPrice().length());
					handler.endElement("", "", "price");
				}
				// 鍒涘缓language鑺傜偣
				if (book.getLanguage() != null && !book.getLanguage().trim().equals("")) {
					attr.clear();
					handler.startElement("", "", "language", attr);
					handler.characters(book.getLanguage().toCharArray(), 0, book
							.getLanguage().length());
					handler.endElement("", "", "language");
				}
				handler.endElement("", "", "book");
			}
			handler.endElement("", "", "bookstore");
			// 鍏抽棴document
			handler.endDocument();

		} catch (TransformerConfigurationException e) {
			e.printStackTrace();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (SAXException e) {
			e.printStackTrace();
		}
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		SAXTestCreate test = new SAXTestCreate();
		test.createXML();
	}

}
