import CreateRezept from '@/views/CreateRezept'
import { mount } from '@vue/test-utils'

test('Input Setzen', async () => {
  const wrapper = mount(CreateRezept)
  const input = wrapper.find('input')
  await input.setValue('Spiegelei')
  expect(input.element.value).toBe('Spiegelei')
})
