#!/usr/bin/env python3
"""Serve the static project for local editing or a local-network demonstration."""
import argparse
import functools
import http.server
import pathlib

def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port',type=int,default=8000)
    parser.add_argument('--host',default='127.0.0.1')
    args=parser.parse_args()
    directory=pathlib.Path(__file__).resolve().parents[1]/'dist'
    handler=functools.partial(http.server.SimpleHTTPRequestHandler,directory=str(directory))
    try:
        server=http.server.ThreadingHTTPServer((args.host,args.port),handler)
    except OSError as error:
        parser.exit(1,f'Could not start the local server: {error}\nTry a different port, such as --port 8001.\n')
    print(f'Serving {directory}\nOpen http://localhost:{args.port}\nPress Ctrl+C in this terminal to stop.',flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nServer stopped.')
    finally:
        server.server_close()

if __name__=='__main__':
    main()
