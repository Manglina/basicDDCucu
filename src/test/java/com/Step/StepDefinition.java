package com.Step;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.junit.Assertions;


public class StepDefinition 
   
{
	WebDriver driver;
	@Given("user launch browser")
	public void user_launch_browser() {
		System.setProperty("webdriver.chrome.driver", "D:\\eclipse-workspace\\CuCuDD\\LIB\\chromedriver-(1).exe ");
		driver=new ChromeDriver();
	
	}

	@Given("user enter url")
	public void user_enter_url() {
		driver.get("https://www.facebook.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	

	}

	@When("user enter \"(.*)\" and \"(.*)\"$")
	public void user_enter_userName_and_PassWord(String userName, String passWord) throws InterruptedException {
		driver.findElement(By.id("email")).sendKeys(userName);
		driver.findElement(By.id("pass")).sendKeys(passWord);
		
		Thread.sleep(1000);

	}

	@Then("user click login button")
	public void user_click_login_button() throws InterruptedException {
		driver.findElement(By.id("u_0_b")).click();
		Thread.sleep(3000);

	}

	@Then("user valid result successfully")
	public void user_valid_result_successfully() throws InterruptedException {
	Assert.assertFalse(driver.getCurrentUrl().contains("login_attempt"));
	System.out.println("Page Title Verified- user enter valid cridential");
		
			Thread.sleep(5000);
driver.close();
Thread.sleep(5000);

	

		
		
		
	}


   }
