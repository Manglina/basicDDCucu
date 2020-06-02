$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resource/features/DDlogin.feature");
formatter.feature({
  "name": "FB login feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "user validated login with valid cridential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter url",
  "keyword": "And "
});
formatter.step({
  "name": "user enter \"\u003cuserName\u003e\" and \"\u003cpassWord\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click login button",
  "keyword": "Then "
});
formatter.step({
  "name": "user valid result successfully",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "passWord"
      ]
    },
    {
      "cells": [
        "mangmanglina",
        "lingggg"
      ]
    },
    {
      "cells": [
        "linaglinagggg",
        "linaglina"
      ]
    },
    {
      "cells": [
        "herleyquinnnn",
        "herleyquinn123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user validated login with valid cridential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter url",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enter_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"mangmanglina\" and \"lingggg\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enter_userName_and_PassWord(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user valid result successfully",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_valid_result_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user validated login with valid cridential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter url",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enter_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"linaglinagggg\" and \"linaglina\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enter_userName_and_PassWord(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user valid result successfully",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_valid_result_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user validated login with valid cridential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter url",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enter_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"herleyquinnnn\" and \"herleyquinn123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enter_userName_and_PassWord(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user valid result successfully",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_valid_result_successfully()"
});
formatter.result({
  "status": "passed"
});
});