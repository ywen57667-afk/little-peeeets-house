# little-peeeets-house
 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index 7ab5c7f7f2ccea835d09a505f1f748b7240d068b..250ef865e75e953f89f5ba501cf9fa11bb54e838 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,19 @@
-# ceci-pets-store
\ No newline at end of file
+# ceci-pets-store
+
+## Run
+
+This project now includes a real backend login API (SQLite + cookie session) and static pages.
+
+```bash
+python3 app.py
+```
+
+Open:
+
+- `http://127.0.0.1:4179`
+
+## Demo auth notes
+
+- Register + login are backed by `auth.db` (SQLite).
+- Session is stored in an HTTP-only cookie.
+- This is a lightweight demo auth suitable for local dev.
 
EOF
)
