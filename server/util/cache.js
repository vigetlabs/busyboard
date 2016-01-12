import fs     from 'fs'
import path   from 'path'
import moment from 'moment'

export const getPath = (key) => {
  return path.join(__dirname, `../cache/${key}.json`)
}

export const read = (key, limit) => {
  if (!fs.existsSync(getPath(key))) return false
  let data = fs.readFileSync(getPath(key))
  let parsedData = JSON.parse(data)
  if (!parsedData.timestamp) return false
  if (moment.unix(parsedData.timestamp).add(limit, 'minutes').unix() < moment().unix()) {
    return false
  } else {
    return parsedData[key]
  }
}

export const write = (key, data) => {
  let toWrite = {
    timestamp : moment().unix()
  }
  toWrite[key] = data
  fs.writeFileSync(getPath(key), JSON.stringify(toWrite))
  console.log(`Wrote ${key} to cache/${key}.json at ${moment().format('h:mm:ss a, MMMM Do YYYY')}`)
}
