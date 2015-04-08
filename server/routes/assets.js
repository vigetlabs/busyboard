import url from 'url'

const isDevelopment = (process.env.NODE_ENV === 'development')

// set up asset handling for development and production
const assetHost = url.format({
  hostname : 'localhost',
  port     : 8001,
  protocol : 'http'
})

const devAssetHandler = {
  proxy: {
    mapUri(request, callback) {
      return callback(null, url.resolve(assetHost, request.raw.req.url))
    },
    passThrough: true
  }
}

const productionAssetHandler = {
  directory: {
    path: './front-end/public/assets'
  }
}

export default {
  path    : '/assets/{path*}',
  method  : 'GET',
  handler : isDevelopment ? devAssetHandler : productionAssetHandler,
  config  : {
    cache: {
      expiresIn : isDevelopment ? 0 : 3153600000,
      privacy   : 'public'
    }
  }
}
