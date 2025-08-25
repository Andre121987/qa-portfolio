# Test Cases – Login Functionality

## Test Case 1: Successful login with valid credentials
- **Precondition:** User has a valid account.
- **Steps:**
  1. Open the login page.
  2. Enter a valid username.
  3. Enter a valid password.
  4. Click on the "Login" button.
- **Expected Result:** User is redirected to the dashboard/homepage.

---

## Test Case 2: Login with invalid password
- **Precondition:** User has a valid account.
- **Steps:**
  1. Open the login page.
  2. Enter a valid username.
  3. Enter an invalid password.
  4. Click on the "Login" button.
- **Expected Result:** System shows an error message: *“Invalid username or password”*. User is not logged in.

---

## Test Case 3: Login with empty fields
- **Precondition:** None.
- **Steps:**
  1. Open the login page.
  2. Leave username and password fields empty.
  3. Click on the "Login" button.
- **Expected Result:** System shows validation messages like *“Username is required”* and *“Password is required”*.

---

## Test Case 4: Login with locked user account
- **Precondition:** User account is locked.
- **Steps:**
  1. Open the login page.
  2. Enter locked user credentials.
  3. Click on the "Login" button.
- **Expected Result:** System shows message *“Your account is locked. Contact support.”* User is not logged in.

---
