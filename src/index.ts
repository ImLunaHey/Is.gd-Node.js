/**
 * Create a short URL
 * @param url The URL to shorten
 */
export const shorten = async (url: string) => {
    const _url = new URL('https://is.gd/create.php');
    _url.searchParams.append('format', 'simple');
    _url.searchParams.append('url', url);
    return fetch(_url.toString()).then(res => res.text());
};

/**
 * Create a custom short URL
 * @param url The URL to shorten
 * @param shortUrl The custom short URL to use
 */
export const custom = async (url: string, shortUrl: string) => {
    const _url = new URL('https://is.gd/create.php');
    _url.searchParams.append('format', 'simple');
    _url.searchParams.append('url', url);
    _url.searchParams.append('shorturl', shortUrl);
    return fetch(url.toString()).then(res => res.text());
};

/**
 * Lookup a short URL
 * @param shortUrl The short URL to lookup
 */
export const lookup = async (shortUrl: string) => {
    const _url = new URL('https://is.gd/forward.php');
    _url.searchParams.append('format', 'simple');
    _url.searchParams.append('shorturl', shortUrl);
    return fetch(_url.toString()).then(res => res.text());
};
