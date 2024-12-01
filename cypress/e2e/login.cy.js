describe('Login Feature', () => {
    it('should successfully log in with valid credentials', () => {
      // Visit the login page
      cy.visit('http://localhost:3000/login'); // Update the URL to your app's login page
  
      // Enter username and password
      cy.get('input[name="username"]').type('testuser'); // Update with your input selector
      cy.get('input[name="password"]').type('password123'); // Update with your input selector
  
      // Click the login button
      cy.get('button[type="submit"]').click(); // Update with your button selector
  
      // Assert the URL after login
      cy.url().should('include', '/dashboard'); // Update with your expected post-login URL
  
      // Assert a success message or element on the dashboard
      cy.contains('Welcome, testuser').should('be.visible'); // Update with your app's content
    });
  
    it('should show an error for invalid credentials', () => {
      // Visit the login page
      cy.visit('https://dribbble.com/session/new');
  
      // Enter incorrect username and password
      cy.get('input[name="username"]').type('wronguser');
      cy.get('input[name="password"]').type('wrongpassword');
  
      // Click the login button
      cy.get('button[type="submit"]').click();
  
      // Assert the error message
      cy.contains('Invalid username or password').should('be.visible'); // Update with your app's error message
    });
  });
  