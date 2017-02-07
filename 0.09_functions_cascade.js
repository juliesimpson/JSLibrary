// Cascade : repeatedly calling one method after another on an object 
// in one continuous line of code.

// Our object with the chainable methods​
​var userController = {
​
    currentUser: "",
​
    findUser: function (userEmail) {
        var arrayLength = usersData.length, i;
        for (i = arrayLength - 1; i >= 0; i--) {
            if (usersData[i].email === userEmail) {
                this.currentUser = usersData[i];
                break;
            }
        }
        return this;
    },
​
    formatName: function () {
        if (this.currentUser) {
            this.currentUser.fullName = titleCaseName(this.currentUser.firstName) + " " + titleCaseName(this.currentUser.lastName);
        }
        return this;
​
    },
​
    createLayout: function () {
        if (this.currentUser) {
            this.currentUser.viewData = "<h2>Member: " + this.currentUser.fullName + "</h2>"​
            + "<p>ID: " + this.currentUser.id + "</p>" + "<p>Email: " + this.currentUser.email + "</p>";
        }
        return this;
    },
​
    displayUser: function () {
        if (!this.currentUser) return;
​
        $(".members-wrapper").append(this.currentUser.viewData);
​
// Without chaining or cascading, the code would look like this:
var aUser = userController.findUser("test@test.com");
var formatUserName =  aUser.formatName();
var layoutHTML =  formatUserName.createLayout();
userController.displayUser(layoutHTML);