const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/fetch-pdf/hello/:test", async (req, res) => {
    const fileUrl = `https://drive.google.com/uc?export=download&id=${req.params.test}`;
    const response = await axios.get(fileUrl, {responseType: "arraybuffer"});
    res.setHeader("Content-Type", "application/pdf");
    res.send(response.data);
});

app.listen(3000, () => console.log("Proxy running on port 3000"));
