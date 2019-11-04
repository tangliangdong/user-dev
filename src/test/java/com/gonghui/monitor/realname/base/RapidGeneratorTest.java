//package com.gonghui.monitor.realname.base;
//
//import com.gonghui.pay.code.generator.rapid.RapidGenerator;
//import com.gonghui.pay.code.generator.rapid.model.DBConfig;
//import org.junit.Test;
//
///**
// * Created by Administrator on 2015/11/8.
// */
//
//public class RapidGeneratorTest {
//    @Test
//    public void testGeneratorOneTable() throws Exception {
//        RapidGenerator rapidGenerator = new RapidGenerator();
//        rapidGenerator.setAuthor("tangliangdong");
//        DBConfig dbConfig = new DBConfig();
//        dbConfig.setUrl("jdbc:mysql://192.168.1.221:3306/gongfupay-monitor-realname?useUnicode=true&amp;characterEncoding=UTF-8");
//        dbConfig.setUserName("root");
//        dbConfig.setPwd("gonghui");
//        dbConfig.setDriver("com.mysql.jdbc.Driver");
//        rapidGenerator.initDbConfig(dbConfig);
//        rapidGenerator.initOutRootPathConfig("E:\\download\\gongfupay-monitor-master-054b959467132ffd34987e6fa4ec7a68af85a964\\gongfupay-monitor-realname");
//        rapidGenerator.initPackage("com.gonghui.monitor.realname");
//        rapidGenerator.initModelName("project");
//        rapidGenerator.generatorOneTable("project");
//    }
//}