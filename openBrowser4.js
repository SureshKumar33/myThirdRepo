var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until,

	chromedriver = require('chromedriver');
        chromedriver.start();
        driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

const curl = require("curl");
const jsdom = require("jsdom");
const url = "http://www.imdb.com/list/ls004489992/";



curl.get(url, null, (err,resp,body)=>{
  if(resp.statusCode == 200){
     parseData(body);
  }
  else{
     //some error handling
     console.log("Modified this js file for testing in Git hub");
     console.log("Modified this js file for testing in Git hub... haa haaa haaa");
  }
});

function parseData(html){
    const {JSDOM} = jsdom;
    const dom = new JSDOM(html);
    const $ = (require('jquery'))(dom.window);

    driver.get("http://google.com");
	// driver.executeScript("$('#customer_login_email').val('sonetsobuj@gmail.com'); "
 //             + "$('#customer_login_password').val('*******');");
    driver.executeScript("$('a').click();");
    //let's start extracting the data
    // var items = $(".list_item");
    // for(var i = 0; i < items.length; i++){
    //   var innerInfo = $(items[i]).children('.info');
    //   var movieName = $($(innerInfo).find('a')[0]).html();
    //   var movieYear = $($(innerInfo).find('.year_type')[0]).html();
    //   console.log(i + " -> " + movieYear + ":" + movieName);
    //}
}

//driver.get("http://www.imdb.com/list/ls004489992/");
// driver.sleep(1000);
// driver.findElement(By.xpath("//input[@name='q']")).sendKeys("Test");


