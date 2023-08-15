const paginate = (packages) => {
  // const itemsPerPage = 2
  const itemsPerPage = 10
  const numberOfPages = Math.ceil(packages.length / itemsPerPage)

  const newpackages = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage
    return packages.slice(start, start + itemsPerPage)
  })

  return newpackages
}

export default paginate
