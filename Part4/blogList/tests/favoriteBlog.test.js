const listHelper = require ('../utils/list_helper')
const {listWithMoreBlogs,listWithOneBlog,listWithNoBlog} = require ('./likes.test')


describe('most favorite blog', ()=>{

    test('of empty list is zero',()=>{
        const result = listHelper.favoriteBlog(listWithNoBlog)
        expect(result).toBe(0)
    })
    test('when list has only one blog equals the likes of that',()=>{
        const result = listHelper.favoriteBlog(listWithOneBlog)
        expect(result).toEqual({
            title: "Go To Statement Considered Harmful",
			author: "Edsger W. Dijkstra",
			likes: 5
		})
    })

    test('of a bigger list is calculated right', () => {
        const result = listHelper.favoriteBlog(listWithMoreBlogs)
        expect(result).toEqual({
            title: "Canonical string reduction",
			author: "Edsger W. Dijkstra",
			likes: 12
		})
    })

})