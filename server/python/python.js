const {PythonShell} = require("python-shell")
const path = require("path")

module.exports = function (filename, data) {
    const options = {
        scriptPath: path.dirname(__filename),
        args: JSON.stringify(data)
    }

    PythonShell.run(filename, options, (error, response) => {
        if (error) return console.log("Python Error", error)

        console.log("Response: ", response)

        return {user: 123}
    })

}