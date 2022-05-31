const listHelper = require('../utils/list_helper')
const {listWithMoreBlogs} = require ('./likes.test')


describe('the author with most blogs is',()=>{

    test('of a bigger list is calculated right', () => {
        const result = listHelper.mostBlogs(listWithMoreBlogs)
        expect(result).toEqual({
            author: "Robert C. Martin",
            blogs: 3
          })
    })
})