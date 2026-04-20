export const fetchServer: typeof fetch = (input, init) => {
    if (typeof window !== "undefined") {
        return fetch(input, init);
    }

    const source = process.env.NEXT_PUBLIC_DOMAIN
        ?.replace(/^https?:\/\//, "")
        .replace(/\/.*$/, "")
        .trim();

    if (!source) {
        return fetch(input, init);
    }

    const requestHeaders = new Headers(init?.headers);
    requestHeaders.set("X-Medblogers-Source", source);

    return fetch(input, {
        ...init,
        headers: requestHeaders,
    });
};
