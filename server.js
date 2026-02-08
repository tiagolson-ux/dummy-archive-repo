const express = require("express");
const axios = require("axios");

// Note to self: create the app instance so we can define routes and start the server.
const app = express();

// Note to self: use a fixed port per the lab; keep it simple for beginners.
const PORT = 3000;

// Note to self: define the route that will fetch a random fun fact and return only the text.
app.get("/api/fun-fact", async (req, res) => {
  try {
    // Note to self: call the external API using axios and wait for the response.
    const response = await axios.get(
      "https://uselessfacts.jsph.pl/api/v2/facts/random"
    );

    // Note to self: pull only the 'text' field so our API stays clean and minimal.
    const factText = response.data.text;

    // Note to self: send back just the fact in the required JSON shape.
    res.json({ fact: factText });
  } catch (error) {
    // Note to self: if anything goes wrong, return a safe, generic error message.
    res.status(500).json({ error: "Could not fetch fun fact" });
  }
});

// Note to self: start the server and log so we know it is running.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
