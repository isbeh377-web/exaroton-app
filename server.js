const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Servir los archivos HTML y sw.json desde root
app.use(express.static(__dirname));

// Servir carpeta PWA (iconos)
app.use('/PWA', express.static(path.join(__dirname, 'PWA')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/install-app.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'install-app.html'));
});

app.get('/manifest.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'manifest.json'));
});

app.get('/sw.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'sw.js'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
