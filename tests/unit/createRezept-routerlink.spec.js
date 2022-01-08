import { mount } from '@vue/test-utils'
import Rezepte from '@/views/Rezepte'

test('CreateRezept-Button drücken', () => {
  const mockRouter = {
    push: jest.fn()
  }
  const wrapper = mount(Rezepte, {
    props: {
      isAuthenticated: true
    },
    global: {
      mocks: {
        $router: mockRouter
      }
    }
  })
  wrapper.find('button').trigger('click')
  expect(mockRouter.push).toHaveBeenCalledTimes(1)
  expect(mockRouter.push).toHaveBeenCalledWith('createRezept')
})
