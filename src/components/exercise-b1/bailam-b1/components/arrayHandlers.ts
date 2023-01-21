export function countChiaHetCho3(numbers: number[]): number {
    // Làm Bài Tại Đây
    return numbers.reduce((count, number) => (number % 3 === 0 ? count + 1 : count + 0), 0);
}

export function sum(numbers: number[]): number {
    // Làm Bài Tại Đây
    return numbers.reduce((sum, number) => sum + number, 0);
}

export function hasNumber10(numbers: number[]): boolean {
    // Làm Bài Tại Đây
    return numbers.includes(10);
}

export function filterChiaHetCho7(numbers: number[]): number[] {
    // Làm Bài Tại Đây
    return numbers.filter((number) => number % 7 === 0);
}
