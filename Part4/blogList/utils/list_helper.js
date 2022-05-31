var _ = require('lodash');


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
  console.log(result)
  return result
}

  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
  }