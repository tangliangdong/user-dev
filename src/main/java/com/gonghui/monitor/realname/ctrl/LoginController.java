package com.gonghui.monitor.realname.ctrl;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Administrator
 * @data 2019/11/20
 * @time 10:04
 */
@RestController
@RequestMapping("login")
public class LoginController {

    @GetMapping("index")
    public String index(){
        return "<html>hello world</html>";
    }
}
