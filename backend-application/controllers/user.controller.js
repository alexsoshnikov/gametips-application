class UserController {
    async registration (req, res, next) {
        try {

        } catch (error) {

        }
    }

    async login (req, res, next) {
        try {

        } catch (error) {

        }
    }

    async logout (req, res, next) {
        try {

        } catch (error) {

        }
    }

    async activate (req, res, next) {
        try {

        } catch (error) {

        }
    }

    async refresh (req, res, next) {
        try {

        } catch (error) {

        }
    }

    // function for authenticated users only
    async getUsers (req, res, next) {
        try {
            res.json([1,2,3,4,5])
        } catch (error) {

        }
    }

}

module.exports = new UserController()