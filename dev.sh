#!/bin/bash
export PATH="/usr/local/bin:/usr/bin:/bin:$PATH"
exec /usr/local/bin/node node_modules/.bin/next dev --port "${PORT:-3000}"
