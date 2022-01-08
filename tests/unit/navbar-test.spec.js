import { mount } from '@vue/test-utils'
import Navbar from '@/components/Navbar'
import App from '@/App'

describe('Testing Navbar', () => {
  it('sollte die Navbar-Component haben', () => {
    const wrapper = mount(App)
    const navbar = wrapper.findComponent(Navbar)
    expect(navbar.exists()).toBeTruthy()
  })
})
