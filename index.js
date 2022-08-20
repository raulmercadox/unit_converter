/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convert = document.getElementById('convert')

convert.addEventListener('click', function() {
  const quantity = Number(document.getElementById('quantity').value)
  
  const length = document.getElementById('length')
  const volume = document.getElementById('volume')
  const mass = document.getElementById('mass')
  
  length.textContent = `${quantity} meters = ${(quantity * 3.281).toFixed(3)} feets | ${quantity} feets = ${(quantity / 3.281).toFixed(3)} meters`
  
  volume.textContent = `${quantity} liters = ${(quantity * 0.264).toFixed(3)} gallons | ${quantity} gallons = ${(quantity / 0.264).toFixed(3)} liters`
  
  mass.textContent = `${quantity} kilograms = ${(quantity * 2.204).toFixed(3)} pounds | ${quantity} pounds = ${(quantity / 2.204).toFixed(3)} kilograms`
})