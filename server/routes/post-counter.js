import models from '../models'

export default {
  method : 'POST',
  path   : '/counter',
  handler(request, reply) {
    models.Counter.find({ where: { identifier: 'THE_ONE' } }).on('success', (counter) => {
      if(counter) {
        counter.update({ value: (parseInt(counter.value) + 1) })
      } else {
        counter = models.Counter.create({ identifier: 'THE_ONE', value: 1 })
      }
      reply({ counter: parseInt(counter.value) })
    }).on('error', (err) => {
      console.log('Post error:', err)
    })
  }
}
