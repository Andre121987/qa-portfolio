# ✅ Test Execution Report - Login Functionality

**Project:** Demo Web Application  
**Author:** Andrea Vela  
**Date:** 27-08-2025  
**Version:** 1.0  

---

## 🔎 Test Execution Summary
- **Total Test Cases:** 5  
- **Passed:** 3  
- **Failed:** 2  
- **Blocked:** 0  

---

## 📋 Test Case Execution Details

| TC ID | Test Case Description                               | Preconditions               | Steps                                                                 | Expected Result                                     | Actual Result                      | Status |
|-------|-----------------------------------------------------|-----------------------------|----------------------------------------------------------------------|-----------------------------------------------------|------------------------------------|--------|
| TC01  | Login with valid credentials                        | User registered in system   | 1. Open login page <br> 2. Enter valid email and password <br> 3. Click Login | User redirected to dashboard                        | User redirected correctly           | ✅ PASS |
| TC02  | Login with invalid password                         | User registered in system   | 1. Open login page <br> 2. Enter valid email and invalid password <br> 3. Click Login | Error message displayed: *Invalid credentials*      | Error message not displayed         | ❌ FAIL |
| TC03  | Login with empty fields                             | None                        | 1. Open login page <br> 2. Leave fields empty <br> 3. Click Login    | Error message: *Fields cannot be empty*             | Error message displayed             | ✅ PASS |
| TC04  | Password field masked                               | None                        | 1. Open login page <br> 2. Enter text in password field              | Entered text should be hidden (masked with •••)     | Password shown in plain text        | ❌ FAIL |
| TC05  | Logout redirects to login page                      | User logged in              | 1. Click Logout button                                               | User redirected to login page                       | User redirected correctly           | ✅ PASS |

---

## ⚠️ Observations
- **Defect #1 (TC02):** Error message not displayed when password is invalid.  
- **Defect #2 (TC04):** Password field does not mask input text.  

---

## 📑 Next Steps
- Log defects in `Bug-Reports/`.  
- Re-test failed cases after fixes.  
- Expand execution to cross-browser validation.  
