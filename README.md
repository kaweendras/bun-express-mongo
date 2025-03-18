# 🍥 Bun Express API

A REST API project built with Express.js running on the Bun JavaScript runtime.

## ⚠️ Disclaimer

This project is only for learning/testing purposes and should not be used in production environments.

## Getting Started

To install Bun:

```bash
curl -fsSL https://bun.sh/install | bash
```

To install dependencies:

```bash
bun install
```

To run the development server:

```bash
bun run dev
```

## Features

- Express.js web server
- MongoDB integration with Mongoose
- CORS support
- API documentation with Swagger
- Environment variable configuration with dotenv
- TypeScript support

## API Documentation

When running the server, access the Swagger documentation at `/api-docs` endpoint.

## Project Structure

```
src/
 ├── index.ts      # Main entry file
 └── ...           # Other source files
```

This project was created using `bun init` in bun v1.2.5. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
