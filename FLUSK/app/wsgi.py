from __init__ import app, init
import os

PORT = os.environ.get('PORT') or 5000

def appGenerator():
    init()
    return app

if __name__ == '__main__':
    init()
    app.run(port=PORT)