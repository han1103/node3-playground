const https = require('https')
const url = 'https://api.darksky.net/forecast/a63d658f467233abfdf890a326223e0f/40,-75'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk
        //process.stdout.write(chunk);
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()