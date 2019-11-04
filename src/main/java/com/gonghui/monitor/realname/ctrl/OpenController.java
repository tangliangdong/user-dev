package com.gonghui.monitor.realname.ctrl;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Administrator
 * @data 2019/11/4
 * @time 10:26
 */
@RestController
@RequestMapping("open")
public class OpenController {

    @PostMapping("test")
    public String test(){
        System.out.println("你好世界");
        return "hello world";
    }


}
