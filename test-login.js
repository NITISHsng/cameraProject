// test-login.js
// Simple script to test login functionality

async function testLogin() {
  console.log('Testing login functionality...');
  
  // Test admin login
  const adminTest = await testAdminLogin();
  console.log('Admin login test:', adminTest.success ? 'PASSED' : 'FAILED', adminTest.message);
  
  // Test operator login
  const operatorTest = await testOperatorLogin();
  console.log('Operator login test:', operatorTest.success ? 'PASSED' : 'FAILED', operatorTest.message);
  
  // Test invalid credentials
  const invalidTest = await testInvalidLogin();
  console.log('Invalid login test:', invalidTest.success ? 'PASSED' : 'FAILED', invalidTest.message);
  
  console.log('Login testing completed.');
}

async function testAdminLogin() {
  try {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userType: 'admin',
        userId: 'admin1', // Replace with a valid admin ID in your database
        password: 'admin123' // Replace with the correct password
      })
    });
    
    const data = await response.json();
    
    if (response.ok) {
      return { success: true, message: 'Admin login successful', data };
    } else {
      return { success: false, message: `Admin login failed: ${data.error}`, data };
    }
  } catch (error) {
    return { success: false, message: `Admin login error: ${error.message}` };
  }
}

async function testOperatorLogin() {
  try {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userType: 'operator',
        operatorId: 'OP001', // Replace with a valid operator ID in your database
        password: 'operator123' // Replace with the correct password
      })
    });
    
    const data = await response.json();
    
    if (response.ok) {
      return { success: true, message: 'Operator login successful', data };
    } else {
      return { success: false, message: `Operator login failed: ${data.error}`, data };
    }
  } catch (error) {
    return { success: false, message: `Operator login error: ${error.message}` };
  }
}

async function testInvalidLogin() {
  try {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userType: 'admin',
        userId: 'invalid_user',
        password: 'wrong_password'
      })
    });
    
    const data = await response.json();
    
    // For invalid login, we expect a 401 status code
    if (!response.ok && response.status === 401) {
      return { success: true, message: 'Invalid login correctly rejected', data };
    } else {
      return { success: false, message: 'Invalid login test failed - should have been rejected', data };
    }
  } catch (error) {
    return { success: false, message: `Invalid login test error: ${error.message}` };
  }
}

// Run the tests
testLogin();

// Instructions:
// 1. Start your Next.js development server with 'npm run dev'
// 2. Run this script with Node.js: 'node test-login.js'
// 3. Check the console output for test results
// 4. Update the test credentials with valid values from your database