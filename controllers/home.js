

export const Home = (req, res) => {
    res.sendFile(__dirname, '/views/index.html');
}

export const Lomba = (req, res) => {
    res.send("Lomba Page");
}