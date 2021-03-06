exports.initTracks = {
    tracks: [
        {singer: "Slipknot", song: "All hope is gone", genre: "Heavy Metal", year: "2008", id: 0},
        {singer: "Slipknot", song: "Psychosocial", genre: "Heavy Metal", year: "2008", id: 1},
        {singer: "Slipknot", song: "Duality", genre: "Metal", year: "2004", id: 2},
        {singer: "Slipknot", song: "Nero Forte", genre: "Heavy Metal", year: "2019", id: 3},
        {singer: "Limp Bizkit", song: "Behind blue eyes", genre: "New Metal", year: "2003", id: 4},
        {singer: "Linkin Park", song: "Numb", genre: "Rock", year: "2002", id: 5},
        {singer: "Limp Bizkit", song: "Break Staff", genre: "Rap-Rock", year: "1999", id: 6},
        {singer: "Scorpions", song: "Wind of change", genre: "Guitar Ballade", year: "1990", id: 7},
        {singer: "Linkin Park", song: "In the End", genre: "Rock", year: "2003", id: 8},
        {singer: "Linkin Park", song: "New Divide", genre: "Rock", year: "2009", id: 9},
        {singer: "Scorpions", song: "Still loving you", genre: "Guitar Ballade", year: "1984", id: 10},
        {singer: "Scorpions", song: "Send me an Angel", genre: "Rock", year: "1990", id: 11},
        {singer: "Scorpions", song: "Rock you like a hurricane", genre: "Rock", year: "1984", id: 12},
    ],
    nextId: 13,
    incrementId(){
        this.nextId++
    }
};

class Track{
    constructor(singer, song, genre, year){
        return {
            singer,
            song,
            genre,
            year,
        }
    }
    setId(id){
        this.id = id
    }
}

exports.addTrack = (singer, song, genre, year) => {
    const track = new Track(singer, song, genre, year);
    track.setId(initTracks.nextId);
    initTracks.incrementId();
    initTracks.tracks.push(track)
};

