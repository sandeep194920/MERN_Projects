export const formatPrice = (number) => {
  const formattedNumber = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100) // note that we still need to divide by 100 but don't have to format the decimals
  return formattedNumber // it automatically adds the currency representation (Adds $ at the beginning)
}

export const getUniqueValues = () => {}
