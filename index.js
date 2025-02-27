const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors({origin: "*", methods: ["GET"]}));

app.options("*", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.sendStatus(200);
});

app.get("/fetch-pdf/:id", async (req, res) => {
    const fileUrl = `https://drive.google.com/uc?export=download&id=${req.params.id}`;
    const response = await axios.get(fileUrl, {responseType: "arraybuffer"});

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Content-Disposition", "inline")
    res.setHeader("Content-Type", "application/pdf");
    res.send(response.data);
});

app.listen(3000, () => console.log("Proxy running on port 3000"));
