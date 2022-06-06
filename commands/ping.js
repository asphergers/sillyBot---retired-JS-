module.exports = {
    name: 'ping',
    description: 'test command for pinging',
    execute(message, args) {
        message.channel.send("pong");
        console.log("pong");
    }
}