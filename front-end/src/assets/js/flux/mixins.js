import Fluxxor from 'fluxxor'
import React   from 'react'

export default [
  Fluxxor.FluxMixin(React),
  Fluxxor.StoreWatchMixin('MainStore')
]
