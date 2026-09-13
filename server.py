#!/usr/bin/env python3
"""
Lightweight Zero-Dependency Local Web Server for BaZi Web Application
Usage: python3 server.py [port]
"""

import http.server
import socketserver
import os
import sys
import webbrowser

DEFAULT_PORT = 8080

class BaZiHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS and disable aggressive caching for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

def run_server(port=DEFAULT_PORT):
    # Ensure current working directory is the script directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)

    for p in range(port, port + 20):
        try:
            with socketserver.TCPServer(("", p), BaZiHandler) as httpd:
                url = f"http://localhost:{p}"
                print("=" * 60)
                print(f" 八字排盘与五经研索系统 (BaZi Metaphysics Web App)")
                print(f" 本地运行地址: {url}")
                print(f" 内置五大经典名著: 《三命通会》《滴天髓》《穷通宝鉴》《子平真诠》《渊海子平》")
                print(" 按 Ctrl+C 可停止运行服务器")
                print("=" * 60)
                sys.stdout.flush()
                try:
                    httpd.serve_forever()
                except KeyboardInterrupt:
                    print("\n服务器已停止。")
                break
        except OSError:
            continue

if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_PORT
    run_server(port)
