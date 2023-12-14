package fi.haagahelia.quizzer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FrontendController {
    @GetMapping("/app/**")
    public String renderFrontend() {
        return "frontend/index";
    }
}
