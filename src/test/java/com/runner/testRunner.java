package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"src/test/resource/features/DDlogin.feature"},
				glue= {"com.Step"},
				plugin = {"pretty" ,"html:test-outout" ,
				        "json:json_outout/cucumber.json" ,
				        "junit:junit_xml/cucumber.xml"},
				        dryRun= false,
				        monochrome=true,
				        strict=true)
public class testRunner {
	

}
