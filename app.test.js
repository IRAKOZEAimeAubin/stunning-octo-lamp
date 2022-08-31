const { greeting } = require( './app' );

test( 'should return greeting text', () => {
    const greetingText = greeting( 'Aubin', 24 );
    expect( greetingText ).toBe('Hello, my name is Aubin I am 24 years old!');
})