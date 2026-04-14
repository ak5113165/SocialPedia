# FullStack Social Media App

Build a COMPLETE Fullstack Responsive MERN App with Auth, Likes, Dark Mode | React, MongoDB, MUI

Video: https://www.youtube.com/watch?v=K8YELRmUb5o

For all related questions and discussions about this project, check out the discord: https://discord.gg/2FfPeEk2mX

## Docker Setup

This project now includes containerization for the full stack:

- `client`: React app built and served by Nginx
- `server`: Express API
- `mongo`: MongoDB database for the containerized stack

### Prerequisites

- Docker
- Docker Compose

### Environment

The API container reads values from `server/.env`.

If you do not already have one, create it from the example:

```powershell
Copy-Item server/.env.example server/.env
```

For Docker Compose, `MONGO_URL` is overridden automatically to use the local `mongo` service. You only need to provide a valid `JWT_SECRET` in `server/.env`.

### Run With Docker

From the project root:

```powershell
docker compose up --build
```

After startup:

- frontend: [http://localhost:3000](http://localhost:3000)
- backend: [http://localhost:3001](http://localhost:3001)
- mongo: `mongodb://localhost:27017/socialpedia`

### Stop Containers

```powershell
docker compose down
```
