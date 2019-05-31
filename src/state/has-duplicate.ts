export function hasDuplicate<T>(items: readonly T[]): boolean {
    return !items.every((x, i): boolean => items.indexOf(x) === i);
}
