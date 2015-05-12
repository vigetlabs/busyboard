const CACHE = {}

export default (data, key) => {
  if (typeof CACHE[key] === 'undefined') CACHE[key] = data
  return CACHE[key]
}
