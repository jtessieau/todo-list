const API = require('./api_url')

console.log(API)

exports.add = async function (task) {
    const response = await fetch(API + '/tasks', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    })
    const data = await response.text()

    return data
}

exports.delete = async function (task) {
    const response = await fetch(API + '/tasks', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    })
    const data = await response.text()

    return data
}
