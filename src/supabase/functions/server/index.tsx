/**
 * ============================================================================
 * MAIN SERVER - Hono Edge Function
 * ============================================================================
 * TIER 2 ADDITIONS:
 * ✅ Lead capture system with Copper CRM integration
 * ✅ Lead backup to database
 * ✅ Lead statistics endpoint
 * ============================================================================
 */

import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import leads from "./leads.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-e8e0d145/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ========== TIER 2: Lead Capture Routes ==========
app.route("/make-server-e8e0d145/leads", leads);

Deno.serve(app.fetch);