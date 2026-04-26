export const getCategories=async()=>{

  const res=await fetch('https://openapi.programming-hero.com/api/news/categories')
  const categoryData=await res.json()

  return categoryData.data


}


export const getCategoryWiseNews=async(id)=>{

  const res=await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
  const categoryNews=await res.json()

  return categoryNews.data
}

export const getDetailsNews=async(id)=>{

  const res=fetch( `https://openapi.programming-hero.com/api/news/${id}`)
  const detailsNews=await res.json()

return detailsNews
}