/*
 * This is a program that calculates the energy released when
 * an object of a certain mass is converted to energy. 
 *
 * @author  Feyi Akomolafe
 * @version 1.0
 * @since   2024-02-21
 */

import { createPrompt } from 'bun-promptx'

// input
const objectMassString = createPrompt("Enter the mass of an object(kg): ")

// error checking
const objectMass = parseFloat(objectMassString.value || "-1")
if (isNaN(objectMass) == true || objectMass < 0) {
  console.log("Invalid input.")
} else {
  // process
  const speedOfLight = 2.99e8
  let energyReleased = objectMass * Math.pow(speedOfLight, 2)
  energyReleased = energyReleased.toExponential() 
  // output
  console.log(`${objectMass} kg of mass would produce ${energyReleased} J of energy`)
}

console.log("\nDone.")

