module.exports = class UserDto {

    id; creator; title; description; videoURLs; createDate;

    constructor(model) {
        this.id = model._id
        this.creator = model.creator
        this.title = model.title
        this.description = model.description
        this.videoURLs = model.videoURLs
        this.createDate = model.createDate
    }
}