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

  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
  }