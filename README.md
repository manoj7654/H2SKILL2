# YouTube Video Search API
This API allows users to search for YouTube videos, fetch updated video lists, and retrieve videos with pagination. It provides endpoints to search videos by title or description, retrieve paginated video lists, and fetch the latest updated videos.

## Prerequisites
To use this API, you need the following:

 * Node.js installed on your machine
 * MongoDB database connection string
 * YouTube Data API key(s)
### Installation
Clone the repository:

     git clone <repository-url>

### Install the dependencies:

        cd <project-folder>
        npm install

### Set up environment variables:

 * Create a .env file in the project root folder.

 * Define the following environment variables in the .env file:

        mongoUrl: MongoDB connection string.
        youtube_api_key1 and youtube_api_key2: YouTube Data API keys (you can obtain these from the Google Cloud Console).

### Start the server:

    npm start

## API Endpoints
`Search Video`

* method : GET

* Endpoint: /searchVideo?q=title or description

* Description: Search for YouTube videos by title or description.

* Query Parameters:
q (required): The search query string.
* Response:

        Status: 200 OK
        Body: Array of videos matching the search query.

`Video with Pagination`

* method : GET

* Endpoint: /pageVideo

* Description: Retrieve a paginated list of YouTube videos.

* Query Parameters:

        page (optional): The page number to retrieve (default: 1).
        limit (optional): The number of videos to fetch per page (default: 10).

* Response:

    Status: 200 OK

  Body:

        data: Array of videos for the current page.
        currentPage: The current page number.
        totalPages: The total number of pages.


## Implementation Details

* The application uses the Express.js framework to handle HTTP requests and routing.

* Mongoose is used for connecting to the MongoDB database and defining the video model schema.

* The YouTube Data API is used to fetch updated video lists.

* The application is designed to handle pagination for video lists and provide search functionality based on the video title or description.

* The .env file is used to store sensitive information and environment-specific configurations

## Dependencies

            "dependencies": {
            "cors": "^2.8.5",
            "dotenv": "^16.3.1",
            "express": "^4.18.2",
            "googleapi": "^1.0.2",
            "googleapis": "^122.0.0",
            "mongoose": "^7.3.4",
            "nodemon": "^3.0.1"
        }


# Docker Deployment and Run Guide

1.Prerequisites : For docker deployment and running of the Docker Container ensure that the Docker is install in our local system.

2. Build the Docker Images:

       docker build -t <image-name>:<tag> .
       Example:
       
       docker build -t manoj7654/h2skill_task2:0.0.1.RELEASE .

3. Run the Docker Image:

       docker run -p <host-port>:<container-port> -e <key>=<value> <image-name>:<tag>

       Example:
       docker container run -d -p 5000:5000 manoj7654/h2skill_task2:0.0.1.RELEASE 
4. Stop the Docker Container Image:

        docker stop <container-id>


### Deployment 

  [backend](https://scary-blue-trousers.cyclic.app/)