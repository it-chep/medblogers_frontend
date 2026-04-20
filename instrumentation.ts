import { SERVER_URL_API } from "@/src/app/env/env";

const FETCH_PATCH_FLAG = Symbol.for("medblogers.fetch.patch");

type PatchedFetch = typeof fetch & {
    [FETCH_PATCH_FLAG]?: boolean;
};

const normalizeSource = (value?: string) => {
    if (!value) {
        return "";
    }

    return value
        .replace(/^https?:\/\//, "")
        .replace(/\/.*$/, "")
        .trim();
};

export function register() {
    if (typeof window !== "undefined") {
        return;
    }

    const source = normalizeSource(process.env.NEXT_PUBLIC_DOMAIN);
    const currentFetch = globalThis.fetch as PatchedFetch;

    if (currentFetch[FETCH_PATCH_FLAG] || !source) {
        return;
    }

    const originalFetch = globalThis.fetch.bind(globalThis);

    const patchedFetch: PatchedFetch = async (input, init) => {
        if (typeof input !== "string" || !input.startsWith(SERVER_URL_API)) {
            return originalFetch(input, init);
        }

        const requestHeaders = new Headers(init?.headers);
        requestHeaders.set("X-Medblogers-Source", source);

        return originalFetch(input, {
            ...init,
            headers: requestHeaders,
        });
    };

    patchedFetch[FETCH_PATCH_FLAG] = true;
    globalThis.fetch = patchedFetch as typeof fetch;
}