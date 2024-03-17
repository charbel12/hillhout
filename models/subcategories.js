const db = require("../utils/database")

module.exports = class SubCategory{
  constructor(name, categoryId){
    this.name = name 
    this.category = categoryId 
  }


  static saveSubCategory(SubCategory){
    return db.execute(
      'INSERT INTO subcategories (name, categoryId) VALUES (?,?)',
      [SubCategory.name,SubCategory.categoryId]
    )
  }

  static getAllSubCategories(){
    return db.execute(
      'SELECT * FROM subcategories;',
      []
    )
  }

  static deleteSubCategory(id){
    return db.execute(
        'DELETE FROM subcategories where id = ?;',
        [id]
      )
  }

  static updateSubCategory(SubCategory){
    return db.execute(
      'UPDATE subcategories set (name, categoryId) VALUES (?,?)',
      [SubCategory.name,SubCategory.categoryId]
    )
  }

}
