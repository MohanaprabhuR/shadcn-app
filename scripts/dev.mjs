import net from "node:net";
import { spawn } from "node:child_process";

const HOST = process.env.HOST ?? "127.0.0.1";
const START_PORT = Number(process.env.START_PORT ?? 3000);
const MAX_TRIES = Number(process.env.MAX_TRIES ?? 50);

function isPortAvailable(port, host) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.unref();
    server.on("error", () => resolve(false));
    server.listen({ port, host }, () => {
      server.close(() => resolve(true));
    });
  });
}

async function findAvailablePort() {
  for (let i = 0; i < MAX_TRIES; i += 1) {
    const port = START_PORT + i;
    if (await isPortAvailable(port, HOST)) return port;
  }
  throw new Error(
    `No available port found from ${START_PORT} to ${START_PORT + MAX_TRIES - 1} on ${HOST}`,
  );
}

const port = await findAvailablePort();
process.env.PORT = String(port);

const nextArgs = ["dev", "--turbopack", "-H", HOST, "-p", String(port)];

const child = spawn("next", nextArgs, {
  stdio: "inherit",
  env: process.env,
  shell: process.platform === "win32",
});

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 0);
});

