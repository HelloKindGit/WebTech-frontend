import { mount } from '@vue/test-utils'
import Rezepte from '@/views/Rezepte'
import CreateRezept from '@/views/CreateRezept'

describe('Testing Rezepte.vue', () => {
  it('Sollte die korrekte Überschrift haben.', () => {
    const wrapper = mount(Rezepte)
    expect(wrapper.text()).toMatch('Rezepte')
  })
})

describe('Testing CreateRezept.vue', () => {
  it('Sollte die korrekte Überschrift haben.', () => {
    const wrapper = mount(CreateRezept)
    expect(wrapper.text()).toMatch('RezeptName: Okay! Beschreibung: Okay! Vorbereitungszeit: Gib eine Zeit an! ' +
      'Kochzeit: Gib eine Zeit an! Portionen: Gib die Anzahl der Portionen an! Kategorie: Gib eine Kategorie an! Upload Rezept')
  })
})
