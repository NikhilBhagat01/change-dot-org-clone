# Change.org Clone

This is a Node.js project that uses Redis and MongoDB.

## Prerequisites

- Node.js
- Redis
- MongoDB

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/NikhilBhagat01/change-dot-org-clone.git
   cd change-dot-org-clone
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start Redis and MongoDB servers.

4. Create a `.env` file in the root directory and add the following:
   ```env
   MONGODB_URI=your_mongodb_uri
   REDIS_HOST=your_redis_host
   REDIS_PORT=your_redis_port
   ```

## Usage

1. Start the application:

   ```sh
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.
