// Given a string "s" containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
//     1. Open brackets must be closed by the same type of brackets.
//     2. Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([)]"
// Output: false

// Example 5:
// Input: s = "{[]}"
// Output: true

// Solution
// Grab a character from the start of the string
// Ensure that the character has a match later in the string
// Maintain a stack to keep track of the opening brackets as you encounter them
// Once you encounter a closing bracket it must match the character of the last opening bracket
const isValid = (s) => {
	const stack = [];

	for (let i=0; i<s.length; i++) {
		const char = s[i];
		// Check if it is a closing bracket, if so then compare to the stack
		// Otherwise then add the character to the stack
		if (char === ']') {
			if ('[' !== stack.pop()) {
				return false;
			}
		} else if (char === ')') {
			if ('(' !== stack.pop()) {
				return false;
			}
		} else if (char === '}') {
			if ('{' !== stack.pop()) {
				return false;
			}
		} else {
			stack.push(char);
		}
	}

	if (stack.length) {
		return false;
	} else {
		return true;
	}
}

console.log("Expecting true:", isValid("()"));
console.log("Expecting true:", isValid("()[]{}"));
console.log("Expecting false:", isValid("(]"));
console.log("Expecting false:", isValid("([)]"));
console.log("Expecting true:", isValid("{[]}"));
