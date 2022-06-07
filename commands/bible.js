const axios = require('axios');

const getVerse = async() => {
    const {data: res } = await axios.get('https://labs.bible.org/api/?passage=random&type=json');
    return JSON.stringify(res[0]);
}

module.exports = {
    name: 'verse',
    description: 'returns a random bible verse',
    async execute(message, args) {
        const data = JSON.parse(await getVerse());
        message.channel.send(`${data.bookname} ${data.chapter}:${data.verse}\n${data.text}`);
    }
}