const details = {
    age1: 2,
    age2: 3,
    age3: 0,
    age4: 0,
}

console.log(details)
for (const key in details) {
    if (details[key] === 0) {
        details[key] =' NA'
    }
    console.log(`${key} and ${details[key]}`)
}
console.log()