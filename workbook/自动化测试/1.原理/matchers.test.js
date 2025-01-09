// test('测试对象内容相等',() => {
//     const data = {one:1}
//     expect(data).toEqual({one:1})
// })

test('测试null',() => {
    const data = null;
    expect(data).toBeNull()
})


test('测试undefined',() => {
    const data = undefined;
    expect(data).toBeUndefined()
})

test('测试defined',() => {
    const data = 1;
    expect(data).toBeDefined()
})

test('测试toBeTruthy',() => {
    const data = 1;
    expect(data).toBeTruthy()
})


test('测试toBeFalsy',() => {
    const data = 0;
    expect(data).toBeFalsy()
})

test('not 匹配器',() => {
    const data = 1;
    expect(data).not.toBeFalsy()
})

// 数字匹配器 toBeGreaterThan  toBeGreaterThanOrEqual  toBeLessThan  toBeLessThanOrEqual
test('大于',() => {
    const data = 10;
    expect(data).toBeGreaterThan(9)
})
test('大于等于',() => {
    const data = 10;
    expect(data).toBeGreaterThanOrEqual(10)
})

// toBeCloseTo  匹配浮点数
test('toBeCloseTo',() => {
    const data = 0.1 + 0.2;
    expect(data).toBeCloseTo(0.3)
})

// String
test('toMatch',() => {
    const data = 'hello world';
    expect(data).toMatch('hello')
})

// Array Set
test('toContain', () => {
    const arr = [1,2,3,4];
    const data = new Set(arr)
    expect(data).toContain(3)
})

// 异常
const throwNewErrorFunc = () => {
    throw new Error('this is a new error')
}

test('toThrow', () => {
    expect(throwNewErrorFunc).toThrow('this is a new error')
})