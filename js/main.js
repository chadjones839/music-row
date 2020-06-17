// Create an array for each record label

let jumpStopRecords = [];
let chattenRecords = [];
let polarRecords = [];



// create factory function for each possible genre

const createFunkArtist = (name, age) => {
    let artist = { 
        name: name,
        age: age,
        genre: 'funk'
    }
    jumpStopRecords.push(artist)
    return artist
}
 
const createRapArtist = (name, age) => {
    let artist = {
        name: name,
        age: age,
        genre: 'rap'
    }
    jumpStopRecords.push(artist)
    return artist
}
 
const createCountryArtist = (name, age) => {
    let artist = {
        name: name,
        age: age,
        genre: 'country'
    }
    chattenRecords.push(artist)
    return artist
}
 
const createBluegrassArtist = (name, age) => {
    let artist = {
        name: name,
        age: age,
        genre: 'bluegrass'
    }
    chattenRecords.push(artist)
    return artist
}
 
const createPopArtist = (name, age) => {
    let artist = {
        name: name,
        age: age,
        genre: 'pop'
    }
    polarRecords.push(artist)
    return artist
}
 


// Invoke the appropriate function for each artist and place the resulting object in the corresponding array

const bruceAtkins = createCountryArtist("Bruce Atkins", 23)
const jensenBrown = createPopArtist("Jensen Brown", 20)
const dreFunks = createFunkArtist("Dre Funkz", 25)
const dustaGrimes = createRapArtist("Dusta Grimes", 21)
const bartholomewDanielson = createBluegrassArtist("Bartholomew Danielson", 23)
const avileeDallas = createCountryArtist("Avilee Dallas", 19)
const austinKinkaid = createPopArtist("Austin Kinkaid", 22)
const loyonceBranis = createRapArtist("Loyonce Branis", 27)

console.log(jumpStopRecords)
console.log(chattenRecords)
console.log(polarRecords)