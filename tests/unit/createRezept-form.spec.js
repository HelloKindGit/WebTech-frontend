import CreateRezept from '@/views/CreateRezept'
import { mount } from '@vue/test-utils'

test('Input Setzen', () => {
  const wrapper = mount(CreateRezept)
  const input = wrapper.find('input')
  input.setValue('Spiegelei')
  expect(input.element.value).toBe('Spiegelei')
})
