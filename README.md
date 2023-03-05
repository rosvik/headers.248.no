<img src="https://user-images.githubusercontent.com/1774972/216169511-d7fea8e0-a5bc-45e3-bd4a-eb78b477b030.svg" width="150" alt="248">

# http.248.no

This is the project files for [http.248.no](https://http.248.no), a super simple site that returns [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers), including [Cloudflare headers](https://developers.cloudflare.com/fundamentals/get-started/reference/http-request-headers/). It's powered by [Cloudflare Workers](https://workers.cloudflare.com/).

## Installation

1. Clone the repo `git clone https://github.com/rosvik/http.248.no.git && cd http.248.no`
2. `npm install`
3. `npm start`

## Publish

1. Install wrangler `npm install -g wrangler`
2. Authenticate `wrangler login`
3. `wrangler publish`
