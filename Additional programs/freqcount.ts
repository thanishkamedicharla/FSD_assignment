function countFrequency(str: string): Map<string, number> {
    const frequencyMap = new Map<string, number>();

    for (const char of str) {
        if (frequencyMap.has(char)) {
            frequencyMap.set(char, frequencyMap.get(char)! + 1);
        } else {
            frequencyMap.set(char, 1);
        }
    }

    return frequencyMap;
}

// Example usage
const input = "hello world";
const result = countFrequency(input);

console.log("Character frequency:");
result.forEach((count, char) => {
    console.log(`${char}: ${count}`);
});