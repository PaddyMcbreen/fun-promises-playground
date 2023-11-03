
const fs = require("fs/promises")

function readFile(){
    const secretFile =  fs.readFile("D:/NorthCoders/3rdNov/fun-promises-playground/challenges/secret-message.txt", (err, data) => {
        if (err){
            console.log({status: 404, msg: 'File not found!'})
        } else {
            console.log(data)
        }
    })
    
.then((result) => {
    let body = ''
    body += result.toString()

    console.log(body)
})
.catch(() => {
    console.log({status: 404, msg: 'File not found! - check path'})
})
    }

    readFile()



