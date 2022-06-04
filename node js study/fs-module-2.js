const {readFile, writeFile} = require('fs')

//provide a call back, to run when the process is done
readFile('./content/first.txt','utf8',(err,result) =>{
if(err){
	console.log(err)
	return
}
const first = result;

readFile('./content/second.txt','utf8',(err,result) =>{
if(err){
	console.log(err)
	return
}
const second = result;


writeFile(
	'./content/thrid.txt',`third third file: ${first}, ${second}`, 
(err,result) =>{
if(err){
	console.log(err)
	return
}
const first = result;
}
	 )
 } )
  } )
