# psw-wojna-online
## Wojna Online

### Run the full application with Docker

From the repository root:

```bash
docker compose up --build
```

Open the frontend at http://localhost:3000. The stack contains the Next.js
frontend, Express/Socket.IO backend, and Mosquitto MQTT broker.

For a remote deployment, create a `.env` file next to `docker-compose.yml` and
set these URLs to the public address of the server before building:

```env
PUBLIC_API_URL=http://YOUR_SERVER_IP:4000
PUBLIC_SOCKET_URL=http://YOUR_SERVER_IP:4000
PUBLIC_MQTT_WS_URL=ws://YOUR_SERVER_IP:9001
```

To stop it:

```bash
docker compose down
```

The SQLite database is stored in the `backend-data` Docker volume. To use a
different JWT secret, set `JWT_SECRET` before starting Compose.

### Netlify

`netlify.toml` configures the Next.js frontend for Netlify. Netlify should be
given these build-time environment variables, pointing to a separately hosted
backend and MQTT broker:

- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_SOCKET_URL`
- `NEXT_PUBLIC_MQTT_WS_URL`

The backend is not suitable for Netlify Functions as-is because it requires a
long-lived Socket.IO server, MQTT, and persistent SQLite storage.
