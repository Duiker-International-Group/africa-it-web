CREATE TABLE IF NOT EXISTS contact_messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  ip TEXT,
  country TEXT,
  user_agent TEXT
);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created ON contact_messages (created_at);
