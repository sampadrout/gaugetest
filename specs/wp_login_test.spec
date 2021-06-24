# Wordpress Login tests

This is to test the both valid and invalid login

* Open Wordpress application

## Valid WP Login

Tags: login

This is the test scenario for valid login

* Login to wordpress web

    | username              | password  |
    |-----------------------|-----------|
    | sampad.qa@gmail.com   | Zz123456! |
    
* Signout user

## Invalid WP Login

Tags: login

This is the test scenario for invalid login

* Click on Log In link
* Enter invalid user name as 

   |username        |
   |----------------|
   |sampad@test.com |

* Verify error message displayed