export const fetchData = (url: string, method: "GET" | "POST" | "PUT" | "DELETE", data?: BodyInit | null, customHeaders?: [string, string][]): Promise<Response> => {
    try {
        const headers: HeadersInit = [["Content-type", "application/json"], ...(customHeaders || [])];

        return fetch(url, {
            headers,
            body: data ?? null,
            method
        });
    } catch (ex) {
        throw ex;
    }
};
