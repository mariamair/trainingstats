/* eslint-disable no-undef */
/**
 * The script file of the frontend application.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

const form = document.querySelector('#trainingInformation')

form.addEventListener('submit', (event) => {
  saveInformationAndReloadPage(event)
})

async function saveInformationAndReloadPage(event) {
  event.preventDefault()
  console.log('har submittats')
  const values = readValues(event.target)
  const result = await saveInformation(values)
  console.log('result: ' + result)
  window.location.reload()
}

function readValues (form) {
  const values = { 
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

