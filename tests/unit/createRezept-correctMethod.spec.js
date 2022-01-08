import CreateRezept from '@/views/CreateRezept'
import { shallowMount } from '@vue/test-utils'

describe('CreateRezept', () => {
  it('Click auf den Button löst die richtige Methode aus', async () => {
    const mockMethod = jest.spyOn(CreateRezept.methods, 'submitRezept')
    await shallowMount(CreateRezept).find('button').trigger('click')
    expect(mockMethod).toHaveBeenCalled()
  })
})
