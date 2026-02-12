# Messaging Service

This is a Next.js project that provides a messaging service with support for WhatsApp, Email, and SMS.

## Project Overview

This project is a web application that allows users to send and view messages through different channels: WhatsApp, Email, and SMS. It provides a simple UI to switch between the channels, send messages, and view the history of sent messages.

## Features

*   **Multi-channel Messaging**: Send messages via WhatsApp, Email, and SMS.
*   **Message History**: View the history of sent messages for each channel.
*   **User Identification**: Each user is assigned a unique ID to track their messages.
*   **Real-time Updates**: The message history updates in real-time after sending a new message.
*   **Toast Notifications**: Users receive toast notifications on successful message submission.

## Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/)
*   **API**: [ElysiaJS](https://elysiajs.com/)
*   **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
*   **UI**: [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
*   **State Management**: [React Query](https://tanstack.com/query/latest)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## Project Structure

The project follows a standard Next.js App Router structure.

```
/
├── public/              # Static assets
├── src/
│   ├── app/             # App Router pages and API routes
│   │   ├── api/         # API endpoints
│   │   └── ...
│   ├── components/      # React components
│   │   ├── ui/          # UI components from shadcn/ui
│   │   └── ...
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Library files, client, db connection, models
│   │   └── models/      # Mongoose models
│   └── ...
└── ...
```

## API Endpoints

All API endpoints are located under the `/api` prefix.

### Send Service (`/api/send`)

#### Get WhatsApp Messages

*   **Endpoint**: `GET /api/send/whatsapp`
*   **Description**: Fetches all WhatsApp messages for a given `customId`.
*   **Query Parameters**:
    *   `customId` (string, required): The unique identifier for the user.
*   **Response**: An array of WhatsApp message objects.

#### Get Email Messages

*   **Endpoint**: `GET /api/send/email`
*   **Description**: Fetches all email messages for a given `customId`.
*   **Query Parameters**:
    *   `customId` (string, required): The unique identifier for the user.
*   **Response**: An array of email message objects.

#### Get SMS Messages

*   **Endpoint**: `GET /api/send/sms`
*   **Description**: Fetches all SMS messages for a given `customId`.
*   **Query Parameters**:
    *   `customId` (string, required): The unique identifier for the user.
*   **Response**: An array of SMS message objects.

#### Send a WhatsApp Message

*   **Endpoint**: `POST /api/send/whatsapp`
*   **Description**: Creates and sends a new WhatsApp message.
*   **Request Body**:
    ```json
    {
      "customId": "string",
      "mobileNumber": "string",
      "message": "string"
    }
    ```
*   **Response**: The created WhatsApp message object.

#### Send an Email

*   **Endpoint**: `POST /api/send/email`
*   **Description**: Creates and sends a new email.
*   **Request Body**:
    ```json
    {
      "customId": "string",
      "emailAddress": "string",
      "subject": "string",
      "message": "string"
    }
    ```
*   **Response**: The created email message object.

#### Send an SMS

*   **Endpoint**: `POST /api/send/sms`
*   **Description**: Creates and sends a new SMS message.
*   **Request Body**:
    ```json
    {
      "customId": "string",
      "mobileNumber": "string",
      "message": "string"
    }
    ```
*   **Response**: The created SMS message object.

## Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   npm, yarn, pnpm, or bun
*   MongoDB instance (local or cloud)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  Set up environment variables. Create a `.env.local` file in the root of the project and add the following:
    ```
    MONGODB_URI=<your-mongodb-connection-string>
    ```

4.  Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.