const express = require("express");
const app = express();

app.use(express.json());

// Data handphone dengan ID tetap
let handphones = [
    { id: 1, merk: "Samsung", tipe: "Galaxy S22", harga: 12000000 },
    { id: 2, merk: "Apple", tipe: "iPhone 14", harga: 15000000 },
    { id: 3, merk: "Xiaomi", tipe: "Mi 11", harga: 7000000 }
];

// ROUTE HOME
app.get("/", (req, res) => {
    res.send("API HANDPHONE - SELAMAT DATANG");
});

// GET semua handphone
app.get("/handphones", (req, res) => {
    res.json(handphones);
});

// GET handphone by id
app.get("/handphones/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const hp = handphones.find(h => h.id === id);

    if (!hp) {
        return res.status(404).json({ message: "Handphone tidak ditemukan" });
    }

    res.json(hp);
});

// POST (Tambah handphone dengan ID manual)
app.post("/handphones", (req, res) => {
    const { id, merk, tipe, harga } = req.body;

    // Cek ID sudah ada
    const exists = handphones.find(h => h.id === id);
    if (exists) {
        return res.status(400).json({ message: "ID sudah ada, gunakan ID lain" });
    }

    const hpBaru = { id, merk, tipe, harga };
    handphones.push(hpBaru);
    res.status(201).json(hpBaru);
});

// PUT (Edit handphone)
app.put("/handphones/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const hp = handphones.find(h => h.id === id);

    if (!hp) {
        return res.status(404).json({ message: "Handphone tidak ditemukan" });
    }

    const { merk, tipe, harga } = req.body;
    hp.merk = merk;
    hp.tipe = tipe;
    hp.harga = harga;

    res.json({ message: "Data berhasil diupdate", data: hp });
});

// DELETE (Hapus handphone)
app.delete("/handphones/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const hpExists = handphones.find(h => h.id === id);

    if (!hpExists) {
        return res.status(404).json({ message: "Handphone tidak ditemukan" });
    }

    handphones = handphones.filter(h => h.id !== id);
    res.json({ message: "Data berhasil dihapus" });
});

// PORT SERVER
app.listen(3000, () => {
    console.log("Server sudah berjalan di port 3000");
});
