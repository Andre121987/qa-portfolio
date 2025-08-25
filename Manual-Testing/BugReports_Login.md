# Bug Reports – Login Functionality

## Bug 1: Login accepts invalid password
- **ID:** BUG-001
- **Title:** User can log in with invalid password
- **Severity:** Critical
- **Priority:** High
- **Environment:** Chrome 126 / Windows 10
- **Precondition:** User has a valid account.
- **Steps to Reproduce:**
  1. Open the login page.
  2. Enter a valid username.
  3. Enter an incorrect password.
  4. Click the "Login" button.
- **Expected Result:** System should reject login and show *"Invalid username or password"*.
- **Actual Result:** User is logged in successfully.
- **Status:** Open

---

## Bug 2: Error message not displayed when fields are empty
- **ID:** BUG-002
- **Title:** Missing validation messages on empty login form
- **Severity:** Medium
- **Priority:** Medium
- **Environment:** Firefox 128 / macOS
- **Steps to Reproduce:**
  1. Open the login page.
  2. Leave username and password fields empty.
  3. Click "Login".
- **Expected Result:** System should show *“Username is required”* and *“Password is required”*.
- **Actual Result:** Nothing happens, no message displayed.
- **Status:** Open

---

## Bug 3: Locked account shows generic error
- **ID:** BUG-003
- **Title:** Locked account does not show proper error message
- **Severity:** High
- **Priority:** Low
- **Environment:** Edge / Windows 11
- **Steps to Reproduce:**
  1. Open the login page.
  2. Enter credentials for a locked account.
  3. Click "Login".
- **Expected Result:** System should show *“Your account is locked. Contact support.”*
- **Actual Result:** System shows *“Invalid credentials”*.
- **Status:** Open
