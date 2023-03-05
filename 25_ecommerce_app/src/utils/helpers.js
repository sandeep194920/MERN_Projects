export const formatPrice = (number) => {
  const formattedNumber = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100) // note that we still need to divide by 100 but don't have to format the decimals
  return formattedNumber // it automatically adds the currency representation (Adds $ at the beginning)
}

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])
  // type companies and categories are arrays. But color type is array of arrays.
  // So we need to flatten if they are colors
  if (type === 'colors') {
    unique = unique.flat()
  }

  return ['all', ...new Set(unique)]
}
