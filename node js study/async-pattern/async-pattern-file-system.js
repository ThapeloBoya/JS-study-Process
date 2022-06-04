//async - operates asynchronously via event-loop , will always return a value
//await - waits for the promise, can be used within the async block
//promise handles async operations

const { readFile, writeFile } = require('fs').promises

async function start() {
    try {
        const first = await readFile('./file-system/first.txt', 'utf8')

        await writeFile('./file-system/forth.txt', `i am the forth text and ${first}`, { flag: 'a' })

        console.log(first)
    } catch (error) {
        console.log(error)
    }
}

start()