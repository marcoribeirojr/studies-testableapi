'use strict'

describe('Routes: Products', () => {
  const defaultProduct = {
      name : 'Default product'
    , description : 'product description'
    , price : 100
  }
  
  let request
  before(() => {
    return setupApp()
      .then(app => {
        request = supertest(app)
      })
  })

  describe('GET /products', () => {

    it('should return a list of products', done => {
        request
          .get('/products')
          .end((err, res) => {
            expect(res.body[0]).to.eql(defaultProduct)
            done(err)
          })
    })
  })

})
