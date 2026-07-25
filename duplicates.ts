function removeDuplicates(str: string): string {
    let result = "";
    const seen = new Set<string>();

    for (const char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }

    return result;
}

// Example usage
const string = "programming";
const after_removing = removeDuplicates(string);

console.log("Original string:", string);
console.log("After removing duplicates:", after_removing);