const COOKIE_ID_STORAGE_KEY = "cookie_id";

let cookieIdRequest: Promise<string | null> | null = null;

const isBrowser = () => typeof window !== "undefined";

const getLocalStorageItem = (key: string): string | null => {
    if (!isBrowser()) {
        return null;
    }

    try {
        return window.localStorage.getItem(key);
    } catch {
        return null;
    }
};

const setLocalStorageItem = (key: string, value: string) => {
    if (!isBrowser()) {
        return;
    }

    try {
        window.localStorage.setItem(key, value);
    } catch {}
};

export const getCurrentDomain = (): string => {
    if (!isBrowser()) {
        return "";
    }

    return window.location.hostname || "";
};

export const persistCookieId = (cookieId: string) => {
    if (!cookieId) {
        return;
    }

    setLocalStorageItem(COOKIE_ID_STORAGE_KEY, cookieId);
};

export const getStoredCookieId = (): string | null => {
    return getLocalStorageItem(COOKIE_ID_STORAGE_KEY);
};

export const ensureCookieId = async (
    createCookieId: (domain: string) => Promise<string>,
): Promise<string | null> => {
    const existingCookieId = getStoredCookieId();

    if (existingCookieId) {
        return existingCookieId;
    }

    if (cookieIdRequest) {
        return cookieIdRequest;
    }

    cookieIdRequest = (async () => {
        try {
            const cookieId = await createCookieId(getCurrentDomain());

            if (cookieId) {
                persistCookieId(cookieId);
            }

            return cookieId || null;
        } catch {
            return null;
        } finally {
            cookieIdRequest = null;
        }
    })();

    return cookieIdRequest;
};