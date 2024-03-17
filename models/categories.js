const db = require("../utils/database")

module.exports = class Category{
  constructor(name){
    this.name = name 
  }


  static saveCategory(Category){
    return db.execute(
      'INSERT INTO subcategories (name, categoryId) VALUES (?,?)',
      [Category.name]
    )
  }

  static getAllCategories(){
    return db.execute(
      'SELECT * FROM subcategories;',
      []
    )
  }

  static deleteCategory(id){
    return db.execute(
        'DELETE FROM subcategories where id = ?;',
        [id]
      )
  }

  static updateCategory(SubCategory){
    return db.execute(
      'UPDATE subcategories set (name, categoryId) VALUES (?,?)',
      [SubCategory.name,SubCategory.categoryId]
    )
  }

}
