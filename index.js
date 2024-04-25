const keep_alive = require('./keep_alive.js')
const mySecret = process.env['TOKEN']
const tmi = require('tmi.js');
const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: 'BotTutor',
    password: process.env.TOKEN
  },
  channels: ['sibertutor''ahmetenis23']
});
client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
  if (self) return;
  if (message.toLowerCase() === '!dc') {
    client.say(channel, `@${tags.username}, https://discord.gg/CVnB7uxf3A`);
  }
});
client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
  if (self) return;
  if (message.toLowerCase() === '!yt') {
    client.say(channel, `@${tags.username}, youtube.com/@siberTutor`);
  }
});
client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
  if (self) return;
  if (message.toLowerCase() === '!insta') {
    client.say(channel, `@${tags.username}, instagram.com/sibertutor`);
  }
});
client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
  if (self) return;
  if (message.toLowerCase() === '') {
    client.say(channel, `@${tags.username}, abimiz plat`);
  }
});
https://imgur.com/a/6WGj5V8
client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
  if (self) return;
  if (message.toLowerCase() === '') {
    client.say(channel, `@${tags.username}, https://imgur.com/a/GBT87Hh`);
  }
});
client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
  if (self) return;
  if (message.toLowerCase() === '') {
    client.say(channel, '!game valo');
  }
});
