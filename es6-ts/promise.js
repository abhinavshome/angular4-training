const bringGift = () => {
    return new Promise((rs, rj) => {
        setTimeout(() => {
            let giftOptions = ['bat', 'football', 'music player'];
            let gift = giftOptions[Math.floor(Math.random() * 3)]
            rs(gift);
        }, 2000);
    })
}

const makePlan = (gift) => {
    switch (gift) {
        case 'bat':
            console.log('I will play cricket');
            break;
        case 'football':
            console.log('I will play football');
            break;
        case 'music player':
            console.log('I will listen to my fav song');
            break;
    }
}

const crib = (reason) => console.log(`I didnt get the gift because ${reason}`);
bringGift().then(makePlan).catch(crib);

let url = 'http://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=b1b15e88fa797225412429c1c50c122a1';
fetch(url).then((res) => console.log(res));




