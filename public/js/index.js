/* eslint-disable no-undef */
/**
 * The script file of the frontend application.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

const form = document.querySelector('#trainingInformation')

setTodaysDate()
setDefaultMinutes(60)

function setTodaysDate() {
  let today = new Date(Date.now())
  today = today.toISOString()
  today = today.substring(0, 10)

  form.querySelector('#date').setAttribute('value', today)
  form.querySelector('#date').setAttribute('max', today)
}

function setDefaultMinutes(minutes) {
  form.querySelector('#minutes').setAttribute('value', minutes)
}

form.addEventListener('submit', (event) => {
  saveInformationAndReloadPage(event)
})

async function saveInformationAndReloadPage(event) {
  event.preventDefault()
  const values = readValues(event.target)
  const result = await saveInformation(values)
  console.log('result: ' + result)
  window.location.reload()
}

function readValues (form) {
  const values = { 
    username: form.querySelector('#username').value,
    date: form.querySelector('#date').value,
    type: form.querySelector('#type').value,
    minutes: form.querySelector('#minutes').value
  }
  return values
}

async function saveInformation (values) {
  console.log(values)
  try {
    const res = await window.fetch('/training', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
  
    if (!res.ok) {
      throw new Error ('Could not save information')
    } 
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

