# Negative Test Cases – Login

These test cases validate incorrect or invalid login attempts.

## Test Case 1
- **Title:** Login with incorrect password  
- **Precondition:** User account exists with valid username and password.  
- **Steps:**  
  1. Navigate to the login page.  
  2. Enter valid username.  
  3. Enter incorrect password.  
  4. Click "Login".  
- **Expected Result:** System displays error message: *"Invalid username or password."*  
- **Status:** Pending

## Test Case 2
- **Title:** Login with empty fields  
- **Steps:**  
  1. Navigate to the login page.  
  2. Leave username and password blank.  
  3. Click "Login".  
- **Expected Result:** System prompts user to fill in required fields.  
- **Status:** Pending

## Test Case 3
- **Title:** Login with invalid username format  
- **Steps:**  
  1. Navigate to the login page.  
  2. Enter special characters (e.g., `@@@@`) as username.  
  3. Enter any password.  
  4. Click "Login".  
- **Expected Result:** Validation error is displayed for username.  
- **Status:** Pending
