
export default class User {
    constructor(id, email, password, firstName, lastName, birthdate, profilePictureUrl) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.profilePictureUrl = profilePictureUrl;
    }
}