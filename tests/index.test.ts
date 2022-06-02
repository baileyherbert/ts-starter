import { message } from '../src/index';

describe('index', function() {
	it('says hello world', function() {
		expect(message).toBe('Hello world!');
	})
});
