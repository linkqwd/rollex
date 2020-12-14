import packagejson from 'package';


describe('npm modules version are pinned', () => {

    const { dependencies={}, devDependencies={}, peerDependencies={}, optionalDependencies={} } = packagejson;
    const verReg = /^[a-z0-9].+$/;
    // describe('test dependencies', () => {
    //     test.each(Object.keys(dependencies))(
    //         'test %s', (mod) => expect(dependencies[mod]).toMatch(verReg)
    //     );
    // });

    describe('test devDependencies', () => {
        test.each(Object.keys(devDependencies))(
            'test %s', (mod) => expect(devDependencies[mod]).toMatch(verReg)
        );
    });

    describe('test peerDependencies', () => {
        test.each(Object.keys(peerDependencies))(
            'test %s', (mod) => expect(peerDependencies[mod]).toMatch(verReg)
        );
    });

    // describe('test optionalDependencies', () => {
    //     test.each(Object.keys(optionalDependencies))(
    //         'test %s', (mod) => expect(optionalDependencies[mod]).toMatch(verReg)
    //     );
    // });
});
