const limit = 4

const usePagination = (pagesProducts, activePage) => {
  const iterationPageProducts = pagesProducts.slice(1, -1)
  const lastPageProduct = pagesProducts.at(-1)
  const hasMoreBefore = activePage >= limit
  const hasMoreAfter = activePage <= lastPageProduct - limit

  return {
    iterationPageProducts,
    lastPageProduct,
    hasMoreBefore,
    hasMoreAfter,
    range: {
      min: activePage - 1,
      max: activePage + 2,
    }
  }
}

export default usePagination