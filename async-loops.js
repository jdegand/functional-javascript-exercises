function loadUsers(userIds, load, done) {
     var users = []
     for (var i = 0; i < userIds.length; i++) {
       users.push(userIds[i])
     }
     return load(users)
   }

module.exports = loadUsers
