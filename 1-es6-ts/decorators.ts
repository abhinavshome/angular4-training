
const HasMusicSystem = (target) => {
    target.prototype.playMusic = () => console.log('O la la la!!');
}; 

@HasMusicSystem
class Car {
    playMusic;

    move() {
        console.log('moving..');
    }
}

@HasMusicSystem 
class Truck {}

let maruti = new Car();
maruti.move();
maruti.playMusic();