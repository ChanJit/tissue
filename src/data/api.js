let healthcare = require('./healthcare.json')
let pollution = require('./pollution.json')
let results = require('./results.json')

export const getPollution = (country, state) => {
  let pollutionObj = {}

  for (let i in pollution) {
    pollutionObj[i] = {}
    healthcareObj[i].data = []

    for (let j of healthcare[i]['UnKnown']) {
      pollutionObj[i].data.push({
        text: j[0],
        price: j[2],
        level: j[3].substring(1)
      })
    }

    for (let u in pollution[i].child) {
      if (healthcare[i].child[u] !== null) {
        pollutionObj[i][u] = []
        for (let j of pollution[i].child[u]['UnKnown']) {
          pollutionObj[i][u].push({
            text: j[0],
            price: j[2],
            level: j[3].substring(1)
          })
        }
      }
    }
  }

  if (country && state) {
    return pollutionObj[country][state]
  } else if (country && !state) {
    return pollutionObj[country].data
  }

  return pollutionObj
}

export const getHealthcare = (country, state) => {
  let healthcareObj = {}
  // healthcare
  for (let i in healthcare) {
    healthcareObj[i] = {}

    healthcareObj[i].data = []

    for (let j of healthcare[i]['Component of health care surveyed']) {
      healthcareObj[i].data.push({
        text: j[0],
        price: j[2],
        level: j[3].substring(1)
      })
    }

    for (let u in healthcare[i].child) {
      if (healthcare[i].child[u] !== null) {
        healthcareObj[i][u] = []
        for (let j of healthcare[i].child[u]['Component of health care surveyed']) {
          healthcareObj[i][u].push({
            text: j[0],
            price: j[2],
            level: j[3].substring(1)
          })
        }
      }
    }
  }
  if (country && state) {
    return healthcareObj[country][state]
  } else if (country && !state) {
    return healthcareObj[country].data
  }

  return healthcareObj
}

export const getLivingCost = (country, state) => {
  let livingCost = Object.assign({}, results)
  if (country && state) {
    return livingCost[country].child[state]
  } else if (country && !state) {
    delete livingCost[country].child
    return livingCost[country]
  }
  return livingCost
}

export const getCountries = () => {
  let countries = []
  for (let i in results) {
    countries.push(i)
  }
  return countries
}

export const getStates = country => {
  let states = []
  for (let i in results[country].child) {
    if (i) states.push(i)
  }
  return states
}
