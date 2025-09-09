# API Testing with Postman

This folder contains a Postman Collection to test the JSONPlaceholder API.

## How to use
1. Open Postman
2. Import `PostmanCollection.json`
3. Run the collection manually or using the Collection Runner

## Tests included
- Verify status codes (200, 404)
- Validate response body structure
- Assert response time is under 1s


Postman Collection with Variables
- Collection: [API-Testing.postman_collection.json](API-Testing/API-Testing.postman_collection.json)
- Environment: [JSONPlaceholder.postman_environment.json]((API-Testing/JSONPlaceholder.postman_environment.json)

This exercise shows:
- Usage of environment variables (`baseUrl`, `postId`)
- Automatic variable assignment using `pm.environment.set`
- Chaining requests (POST → GET with dynamic ID)
