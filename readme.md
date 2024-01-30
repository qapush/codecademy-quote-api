## Project Overview

The core objective of this project was to create an Express.js web API. The API is designed to store and serve quotes. This project was developed as part of my learning journey on Codecademy, where I honed my skills in handling HTTP requests, managing routes.

## Features

* **Random Quote Generation**: The API features a GET endpoint (/api/quotes/random) that provides a random quote from the collection, offering users a surprise element each time they access it.

* **Filtered Quotes:** Users can retrieve quotes based on specific authors using the GET endpoint (/api/quotes) with query parameters, allowing for a more tailored experience.

* **Adding New Quotes:** Through a POST request to /api/quotes, users can contribute new quotes to the collection, enhancing the database and community engagement.

* **Dynamic Data Handling:** The API handles data dynamically, allowing for future expansions like updating or deleting quotes, or adding additional data points like the year of the quote.

## Technologies

* Express.js: Utilized for creating the web server and API routes.
* Node.js: The runtime environment for running the server and handling backend logic.
* JavaScript: The primary programming language for developing the API logic.
* Postman: for testing endpoints.

## Setup and Installation

1. Clone the Repository: Start by cloning this repository to your local machine.
2. Install Dependencies: Run npm install to install the required Node modules.
3. Start the Server: Execute `node server.js` to start the server and interact with the API at localhost:4001.
