const db = require("../utils/database")

module.exports = class User{
  constructor(full_name, email, passowrd, phone_number){
    this.full_name = full_name 
    this.email = email 
    this.passowrd = passowrd 
    this.phone_number = phone_number 
  }

  static find(email){
    return db.execute(
      'SELECT * FROM users where email = ? ', [email]
    )
  }

  static save(user){
    return db.execute(
      'INSERT INTO users (full_name, email, password, phone_number) VALUES (?,?,?,?)',
      [user.full_name,user.email,user.password,user.phone_number]
    )
  }

}
