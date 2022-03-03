Use a service layer for your business logic.

In this layer there should not be any form of ‘SQL query’, use the data access/models layer for that.

Move your code away from the express.js router.
Don’t pass the req or res object to the service layer.
Don’t return anything related to the HTTP transport layer like a status code or headers from the service layer.