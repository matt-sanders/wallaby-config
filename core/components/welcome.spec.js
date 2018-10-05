import {shallowMount} from '@vue/test-utils'
import Welcome from './welcome'

describe('Welcome', () => {
  it('should have a message', () => {
    const wrapper = shallowMount(Welcome)
    expect(wrapper.find('h1').text()).toEqual('Welcome')
  })
})