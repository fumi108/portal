#!/usr/bin/env python3
import http.server, os, sys

ALLOWED_PUT_PATHS = {'/memo.md', '/services.js'}
SERVE_DIR = os.path.dirname(os.path.abspath(__file__))

class PortalHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=SERVE_DIR, **kwargs)

    def do_PUT(self):
        if self.path not in ALLOWED_PUT_PATHS:
            self.send_error(403, 'Forbidden'); return
        filename = self.path.lstrip('/')
        target = os.path.realpath(os.path.join(SERVE_DIR, filename))
        if not target.startswith(os.path.realpath(SERVE_DIR)):
            self.send_error(403, 'Forbidden'); return
        length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(length)
        with open(target, 'wb') as f:
            f.write(body)
        self.send_response(204); self.end_headers()

    def log_message(self, fmt, *args):
        sys.stderr.write(f"[portal] {self.address_string()} - {fmt % args}\n")

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
    print(f"Serving at http://localhost:{port}/  (PUT {ALLOWED_PUT_PATHS} enabled)")
    http.server.HTTPServer(('', port), PortalHandler).serve_forever()
