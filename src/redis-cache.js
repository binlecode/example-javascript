// this is a simple exmaple of using redis for cache
//
// prerequisit:
// brew install redis
// npm install axios redis

const redis = require("redis");
const redisPort = 6379
const client = redis.createClient(redisPort);
const axios = require("axios");
const util = require("util");

//log error to the console if any occurs
client.on("error", (err) => {
    console.log(err);
});

console.log('redis connected');

let searchTerm = 'redis';

// promisify redis get function to build async flow
client.get = util.promisify(client.get);

const hit_or_miss = async (searchTerm) => {
    let data = await client.get(searchTerm);

    if (data) {
        console.log("cache hit, data retrieved from the cache:\n" + data.length);
    } else {
        const jobs = await axios.get(`https://jobs.github.com/positions.json?search=${searchTerm}`);
        console.log('cache miss, push result to cache');

        await client.setex(searchTerm, 600, JSON.stringify(jobs.data));
        console.log('result cached');
    }
}

client.del = util.promisify(client.del);

// this is a simple cache - delete - recache cycle

hit_or_miss(searchTerm)    // at first a cache miss, followed by a caching
.then(async () => {
    await hit_or_miss(searchTerm);  // this time, a cache hit

    await client.del(searchTerm);
    console.log('cache deleted');

    await hit_or_miss(searchTerm);  // a cache miss again
})
.then(() => {
    console.log('stopping redis client');
    client.quit();
});


