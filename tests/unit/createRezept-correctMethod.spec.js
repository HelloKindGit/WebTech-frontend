import CreateRezept from '@/views/CreateRezept'
import { shallowMount } from '@vue/test-utils'

describe('CreateRezept', () => {
  it('Click auf den Button löst die richtige Methode aus', () => {
    const mockMethod = jest.spyOn(CreateRezept.methods, 'submitRezept')
    shallowMount(CreateRezept).find('button').trigger('click')
    expect(mockMethod).toHaveBeenCalled()
  })
})
