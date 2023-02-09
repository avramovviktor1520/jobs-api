const register = async (req, res) => {
    console.log(req.body);
    res.send('23');

}

const login = async (req, res) => {

}

module.exports = {
    register,
    login
}