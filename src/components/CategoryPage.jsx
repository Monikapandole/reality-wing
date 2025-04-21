import React from 'react'
import { useParams } from 'react-router-dom'

function CategoryPage() {
    const { name } = useParams(); // This will be the slug, like "shared-rooms"

  const displayName = name.replace(/-/g, " ");
  return (
    <div>CategoryPage-{displayName}</div>
  )
}

export default CategoryPage