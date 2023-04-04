exports.createPages = async ({ actions, graphql, reporter}) => {
  // Collections Template 
    const result = await graphql(`
    {
        allContentfulCollection {
          nodes {
            collectionName
            slug
            productsReference {
              title
              slug
              compareAtPrice
              currentPrice
            }
            collectionBannerImage {
              url
            }
          }
        }
      }
    `)

    if (result.errors) {
        reporter.panic('Error loading collections', JSON.stringify(result.errors))
    }

    result.data.allContentfulCollection.nodes.forEach(collection => {
        actions.createPage({
            path: `/collections/${collection.slug}`,
            component: require.resolve('./src/templates/collection-template.js'),
            context: {
                slug: collection.slug
            }
        })
    })


    // Products Template 
    const resultProduct = await graphql(`
    {
      allContentfulProduct {
        nodes {
          compareAtPrice
          currentPrice
          description {
            description
          }
          slug
          title
          mainImage {
            url
          }
        }
      }
    }
  `)

  if (resultProduct.errors) {
    reporter.panic('Error loading collections', JSON.stringify(result.errors))
  }

  resultProduct.data.allContentfulProduct.nodes.forEach(product => {
    actions.createPage({
        path: `/${product.slug}`,
        component: require.resolve('./src/templates/product-template.js'),
        context: {
            slug: product.slug
        }
    })
  })
}