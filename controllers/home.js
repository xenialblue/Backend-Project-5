export const Home = (req, res) => {
    res.sendFile(__dirname, '/views/index.html');
}

export const Lomba = (req, res) => {
    res.send("Lomba Page");
}

export const Peserta = (req, res) => {
    res.send("Peserta Page");
}