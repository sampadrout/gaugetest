# Wordpress Login tests

This is to test the both valid and invalid login

* Open Wordpress application

## Valid WP Login

Tags: ui, login, validlogin

This is the test scenario for valid login

* Login to wordpress web

    | username              | password  | environment |
    |-----------------------|-----------|-------------|
    | sampad.qa@gmail.com   | Zz123456! | default     |
    | sampad.qa@gmail.com   | Zz123456! | qa          |
    | sampad.qa@gmail.com   | Zz123456! | uat         |
    
* Signout user

## Invalid WP Login

Tags: ui, login, invalidlogin

This is the test scenario for invalid login

* Click on Log In link
* Enter invalid user name as 

    | username            | environment |
    |---------------------|-------------|
    | sampad_d@test.com   | default     |
    | sampad_qa@test.com  | qa          |
    | sampad_uat@test.com | uat         |

* Verify error message displayed