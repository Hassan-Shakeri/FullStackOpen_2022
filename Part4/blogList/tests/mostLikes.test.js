
const listHelper = require('../utils/list_helper')
const {listWithMoreBlogs} = require ('../utils/list_helper')


describe('the author with most likes',()=>{

    test('and most loved', () => {
        const result = listHelper.mostLikes(listWithMoreBlogs)
        expect(result).toEqual({
            author: "Edsger W. Dijkstra",
            likes: 17
          })
    })
})