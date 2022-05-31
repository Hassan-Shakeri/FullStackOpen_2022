var _ = require('lodash');


const listWithNoBlog = []
const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  }
]
const listWithMoreBlogs = [
    {
      _id: "5a422a851b54a676234d17f7",
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7,
      __v: 0
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0
    },
    {
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12,
      __v: 0
    },
    {
      _id: "5a422b891b54a676234d17fa",
      title: "First class tests",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
      likes: 10,
      __v: 0
    },
    {
      _id: "5a422ba71b54a676234d17fb",
      title: "TDD harms architecture",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
      likes: 0,
      __v: 0
    },
    {
      _id: "5a422bc61b54a676234d17fc",
      title: "Type wars",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
      likes: 2,
      __v: 0
    }  
  ]

const dummy = (blogs) => {
    if(blogs){
        return 1
    }
  }


const totalLikes = (blogs) => {
    const total = blogs.reduce((sum,blog)=>{
    return sum + blog.likes
    },0)

    return blogs.length === 0 
    ? 0
    : total
}


const favoriteBlog = (blogs) => {
    if (blogs.length === 0){
        return 0
    } else {
    const maxlikes = blogs.reduce((acc,blog) => {
        return acc > blog.likes ? acc : blog.likes
    },0)
    const favBlog = blogs.filter(blog => blog.likes === maxlikes)
    const result = {
        title: favBlog[0].title,
        author: favBlog[0].author,
        likes: favBlog[0].likes
    }
    return result}
}


const mostBlogs = (blogs) => {
  const most =(blog)=>{return blog.author} 
  const myArray = _.groupBy(blogs, most)
  const authorBlogLength = _.mapValues(myArray, (obj) => obj.length)
  const entryArr = Object.entries(authorBlogLength)
  const maxblog = _.maxBy(entryArr, (obj) => obj)
  const result = {
      author: maxblog[0],
      blogs: maxblog[1]
  }
  return result
}




  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    listWithNoBlog,
    listWithOneBlog,
    listWithMoreBlogs
  }