const listHelper = require('../utils/list_helper')
const {listWithMoreBlogs} = require ('../utils/list_helper')


describe('the author with most blogs',()=>{

    test('and most loved', () => {
        const result = listHelper.mostBlogs(listWithMoreBlogs)
        expect(result).toEqual({
            author: "Robert C. Martin",
            blogs: 3
          })
    })
})