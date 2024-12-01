describe("Signup Feature", () => {
  const user = {
    name: "Test User",
    email: "testuser@example.com",
    
    password: "password123",
  };

  it("should successfully sign up with valid details", () => {
    // Visit the signup page
    cy.visit("http://localhost:3000/signup"); // Update URL as needed

    // Fill out the signup form
    cy.get('input[name="name"]').type(user.name); // Update selector based on your app
    cy.get('input[name="email"]').type(user.email);
    cy.get('input[name="password"]').type(user.password);
    cy.get('input[name="confirmPassword"]').type(user.password);

    // Submit the form
    cy.get('button[type="submit"]').click(); // Update selector as needed

    // Assert successful signup (e.g., redirected to dashboard or success message)
    cy.url().should("include", "/dashboard"); // Update with your expected redirect
    cy.contains("Welcome, Test User").should("be.visible"); // Update as per your app
  });

  it("should show an error when email is already registered", () => {
    // Visit the signup page
    cy.visit("http://localhost:3000/signup");

    // Fill out the signup form with an already registered email
    cy.get('input[name="name"]').type(user.name);
    cy.get('input[name="email"]').type(user.email); // Same email as before
    cy.get('input[name="password"]').type(user.password);
    cy.get('input[name="confirmPassword"]').type(user.password);

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Assert error message for duplicate email
    cy.contains("Email is already registered").should("be.visible");
  });

  it("should show validation errors for invalid inputs", () => {
    // Visit the signup page
    cy.visit("http://localhost:3000/signup");

    // Submit the form without filling in any fields
    cy.get('button[type="submit"]').click();

    // Assert validation errors
    cy.contains("Name is required").should("be.visible"); // Update as per your app
    cy.contains("Email is required").should("be.visible");
    cy.contains("Password is required").should("be.visible");

    // Enter mismatched passwords
    cy.get('input[name="password"]').type(user.password);
    cy.get('input[name="confirmPassword"]').type("differentPassword");
    cy.get('button[type="submit"]').click();
    cy.contains("Passwords do not match").should("be.visible");
  });
});
