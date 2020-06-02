Feature: FB login feature

Scenario Outline: user validated login with valid cridential
Given user launch browser
And user enter url
When user enter "<userName>" and "<passWord>"
Then user click login button
And user valid result successfully

Examples:
	|	userName	 	|	passWord			|
	|mangmanglina	| lingggg				|
	|linaglinagggg|linaglina			|
	|herleyquinnnn|herleyquinn123	|
