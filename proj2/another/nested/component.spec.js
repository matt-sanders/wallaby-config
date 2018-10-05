import {shallowMount} from '@vue/test-utils'
import DeepComponent from './component'

describe('DeepComponent', () => {
  it('should display the correct message', () => {
    const wrapper = shallowMount(DeepComponent)
    expect(wrapper.find('div').text()).toEqual('barbar')
  })
})