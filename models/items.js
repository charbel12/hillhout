const db = require("../utils/database")

module.exports = class Item{
  constructor(name, subcategoryId, description, price, priority){
    this.name = name 
    this.subcategoryId = subcategoryId 
    this.description = description 
    this.price = price 
    this.priority = priority 
  }

  static findItem(id){
    return db.execute(
      'SELECT * FROM items where iditems = ? ', [id]
    )
  }

  static saveItem(item){
    console.log(item)
    return db.execute(
      'INSERT INTO items (name, subcategoryId, description, price, priority) VALUES (?,?,?,?,?)',
      [item.name,item.subcategoryId,item.description,item.price,item.priority] 
    )
  }

  static getAll(){
    return db.execute(
      'SELECT * FROM items;',
      []
    )
  }

  static getItemsBySubCategory(subcategoryId){
    return db.execute(
        'SELECT * FROM items where subcategoryId = ?;',
        [subcategoryId]
      )
  }

  static deleteItem(id){
    return db.execute(
        'DELETE FROM items where iditems = ?;',
        [id]
      )
  }

  static updateItem(item){
    const id = item.iditems
    return db.execute(
      `UPDATE items SET name = ?, subcategoryId = ?, description = ?, price = ?, priority = ? where iditems = ${id} `,
      [item.name,item.subcategoryId,item.description,item.price,item.priority]
    )
  }

}
