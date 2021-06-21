import express from 'express'
// import  from 'express'
const app = express()

app.get('/test', (resquest, response) => {
response.send('Ola NLW')
})

app.post('/test', (resquest, response) => {
    response.send('Ola NLW')
})

app.listen(3000, () => console.log('Server is Running NLW'))
