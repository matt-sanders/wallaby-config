import {shallowMount} from '@vue/test-utils'
import file1 from './file1'

describe('Test 1', () => {
  it('display the message', () => {
    const wrapper = shallowMount(file1)
    expect(wrapper.find('h2').text()).toEqual('Hello world 2')
  })
})