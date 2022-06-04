//will run 1st
console.log(`i come first`)

//will run 3rd
setTimeout(() => {
	console.log(`i come seconf`)
}, 0)

//will run 2nd
console.log(`i come last`)