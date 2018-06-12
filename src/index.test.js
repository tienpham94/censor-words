import censorWords from '.'

test('says hello world', () => {
    expect(censorWords()).toBe('Hello world')
})