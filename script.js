function fibonacci(num) {
// your code here
	if(n===0 || n===1) return n;

	return fibonacci(num-1)+fibonacci(num-2);
}

module.exports = fibonacci;
