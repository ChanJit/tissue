let healthcare = require('./healthcare.json')
let pollution = require('./pollution.json')
let results = require('./results.json')
let jobs = require('./jobscount.json')

export const getPollution = (country, state) => {
  let pollutionObj = {}

  for (let i in pollution) {
    pollutionObj[i] = {}
    pollutionObj[i].data = []

    for (let j of pollution[i]['UnKnown']) {
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
    let response = pollutionObj[country][state]
    if (!response && state.length > 5) {
      let states = getStates(country)
      let index = states.findIndex(val => val.indexOf(state) >= 0)
      if (index >= 0) {
        response = pollutionObj[country][states[index]]
      }
    }
    return response
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
        for (let j of healthcare[i].child[u][
          'Component of health care surveyed'
        ]) {
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
    let response = healthcareObj[country][state]
    if (!response && state.length > 5) {
      let states = getStates(country)
      let index = states.findIndex(val => val.indexOf(state) >= 0)
      if (index >= 0) {
        response = healthcareObj[country][states[index]]
      }
    }
    // There is possibility that a state dont have that information
    return response
  } else if (country && !state) {
    return healthcareObj[country].data
  }

  return healthcareObj
}

export const getLivingCost = (country, state) => {
  let livingCost = Object.assign({}, results)
  let response

  if (country && state) {
    response = livingCost[country].child[state]
    if (!response && state.length > 5) {
      let states = getStates(country)
      let index = states.findIndex(val => val.indexOf(state) >= 0)
      if (index >= 0) {
        response = livingCost[country].child[states[index]]
      }
    }
  } else if (country && !state) {
    // delete livingCost[country].child
    response = livingCost[country]
  }

  if (response) {
    let responseData = {}
    for (let i in response) {
      responseData[i] = []
      if (Array.isArray(response[i])) {
        for (let u of response[i]) {
          responseData[i].push({
            text: u[0],
            currency: u[1].slice(-2),
            price: parseFloat(
              u[1].replace(',', '').substring(0, u[1].length - 2)
            ),
            range: u[2].trim()
          })
        }
      }
    }
    response = responseData
  }

  return response
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

export const getStateJobProfile = (country, state) => {
  let stateProfile = jobs.find(job => {
    if (job['Country'] === country && job['City name'].indexOf(state) >= 0) {
      return job
    }
  })

  return stateProfile
}

export const getCurrency = country => {
  if (country.toLowerCase() === 'malaysia') {
    return 'RM'
  } else if (country.toLowerCase() === 'australia') {
    return 'AUD'
  } else if (country.toLowerCase() === 'singapore') {
    return 'SGD'
  }
  return 'HELLO?'
}
