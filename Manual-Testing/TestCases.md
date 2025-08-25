# Manual Test Cases - Login

## Test Case 1: Valid Login
**Preconditions:** User has a valid account  
**Steps:**  
1. Navigate to Login page  
2. Enter valid username and password  
3. Click Login button  
**Expected Result:** User is redirected to the dashboard  

---

## Test Case 2: Invalid Password
**Preconditions:** User has a valid account  
**Steps:**  
1. Navigate to Login page  
2. Enter valid username and invalid password  
3. Click Login button  
**Expected Result:** Error message is displayed: "Invalid username or password"  

---

## Test Case 3: Empty Fields
**Steps:**  
1. Navigate to Login page  
2. Leave username and password blank  
3. Click Login button  
**Expected Result:** Validation message is displayed for required fields  
