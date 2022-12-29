const paginate = (followers) => {
  const itemsPerPage = 9
  // if followers / itemsPerPage is a decimal then we need to round it of (ceil or floor) so the remaining data goes to next page
  const pages = Math.ceil(followers.length / itemsPerPage)
  /*
So if the itemsPerPage is 9, and if followers are 100, then pages will be 100/9 -> 11.111 (ceil value is 12 pages)
Meaning, we will have 12 pages, and last page will have one item

11 pages * 9 items -> 99 items for 11 pages, and remaining one item in last page
*/

  // Now let's create that array(big array) of arrays(small arrays)

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage
    const end = start + itemsPerPage
    return followers.slice(start, end)
  })
  return newFollowers
}

export default paginate
