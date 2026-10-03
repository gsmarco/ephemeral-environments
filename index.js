const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`<h1>¡Hola desde mi ambiente efímero!</h1>
            <p>Hora del servidor: ${new Date().toLocaleString()}</p>`);
});

app.get("/health", (req, res) => res.json({ status: "ok" }));

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));