/* eslint-disable */
import MSdk from './mises-js-sdk'

/**
 * MSdk test
 */
describe('MSdk test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('MSdk is instantiable', async () => {
    const sdk = await MSdk.newSdk()
    expect(sdk).toBeInstanceOf(MSdk)
  })
})
