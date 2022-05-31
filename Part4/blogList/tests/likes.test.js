const listHelper = require('../utils/list_helper')
const {listWithMoreBlogs,listWithOneBlog,listWithNoBlog} = require ('../utils/list_helper')


describe('total likes', () => {

     
    test('of empty list is zero',()=>{
        const result = listHelper.totalLikes(listWithNoBlog)
        expect(result).toBe(0)
    })
    test('when list has only one blog equals the likes of that',()=>{
        const result = listHelper.totalLikes(listWithOneBlog)
        expect(result).toBe(5)
    })


    test('of a bigger list is calculated right', () => {
      let result = listHelper.totalLikes(listWithMoreBlogs)
      expect(result).toBe(36)
    })
  })

  module.exports = {
    listWithMoreBlogs,
    listWithOneBlog,
    listWithNoBlog
  }