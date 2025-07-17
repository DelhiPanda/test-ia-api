<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

# Test IA API

A NestJS API with MongoDB integration for managing items and orders.

## Features

- Create and manage items with stock tracking
- Create orders with multiple items
- Automatic stock validation and updates
- MongoDB integration with Mongoose
- Input validation with class-validator
- RESTful API endpoints

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (running on localhost:27017)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

2. Make sure MongoDB is running on `localhost:27017`

3. Start the development server:
```bash
npm run start:dev
```

The API will be available at `http://localhost:3000`

## API Endpoints

### Items

#### Create a new item
```http
POST /items
Content-Type: application/json

{
  "name": "Sample Item",
  "description": "A sample item description",
  "price": 29.99,
  "stock": 100,
  "isActive": true
}
```

#### Get all items
```http
GET /items
```

#### Get item by ID
```http
GET /items/:id
```

### Orders

#### Create a new order
```http
POST /orders
Content-Type: application/json

{
  "items": [
    {
      "itemId": "item_mongodb_id_here",
      "quantity": 2
    }
  ],
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "shippingAddress": "123 Main St, City, Country"
}
```

#### Get all orders
```http
GET /orders
```

#### Get order by ID
```http
GET /orders/:id
```

## Database Schema

### Item Schema
- `name` (required): Item name
- `description`: Item description
- `price` (required): Item price (minimum 0)
- `stock` (required): Available stock (minimum 0)
- `isActive`: Whether the item is active (default: true)
- `createdAt`: Timestamp when created
- `updatedAt`: Timestamp when last updated

### Order Schema
- `items` (required): Array of order items
  - `itemId`: Reference to Item document
  - `quantity`: Quantity ordered (minimum 1)
  - `price`: Price at time of order
- `totalAmount` (required): Total order amount
- `status`: Order status (pending, confirmed, shipped, delivered, cancelled)
- `customerName`: Customer name
- `customerEmail`: Customer email
- `shippingAddress`: Shipping address
- `createdAt`: Timestamp when created
- `updatedAt`: Timestamp when last updated

## Business Logic

- When creating an order, the system validates that sufficient stock is available
- Stock is automatically reduced when an order is created
- Total amount is calculated based on item prices and quantities
- Orders are created with 'pending' status by default

## Error Handling

The API includes comprehensive error handling:
- Validation errors for invalid input data
- Not found errors for non-existent resources
- Bad request errors for business logic violations (e.g., insufficient stock)

## Development

```bash
# Start in development mode
npm run start:dev

# Build the application
npm run build

# Start in production mode
npm run start:prod

# Run tests
npm run test
```
