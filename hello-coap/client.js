const coap  = require('coap') 
    , req   = coap.request('coap://localhost/12345')
 
req.on('response', function(res) {
  res.pipe(process.stdout)
})
 
req.end()