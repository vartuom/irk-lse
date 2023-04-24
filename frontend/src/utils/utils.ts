export const getNoun = (
    number: number,
    one = "час",
    two = "часа",
    five = "часов"
) => {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n >= 2 && n <= 4) {
        return two;
    }
    return five;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const debounce = (fn: Function, t: number) => {
    let timer: ReturnType<typeof setTimeout>;
    return function (...args: any[]) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(args), t);
    };
};
