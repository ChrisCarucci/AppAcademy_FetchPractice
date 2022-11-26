/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here
const options = {
    method: 'GET'
}

fetch('/products', options)
    .then(res => {
        console.log(res.status)
    })



/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here

const option2 = {
    method: 'GET'
}

fetch('/products', option2)
    .then(res => {
        console.log(res.status + res.ok)

    })



/* =================== 3. Print the Content-Type Header =================== */

// Your code here
const option3 = {
    method: 'GET'
}

fetch('/products', option2)
    .then(res => {
        console.log(res.headers.get('Content-Type'))

    })


/* ============== 4. Print the body of the response as text =============== */

// Your code here
const option4 = {
    method: 'GET'
}

fetch('/products', option4)
    .then(res => {
        console.log(res.text)
    .then(console.log(result))
    }).catch(error => console.log("An error occurred", error))