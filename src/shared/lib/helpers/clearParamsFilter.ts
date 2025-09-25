export const clearParamsFilter = (urlParams: URLSearchParams) => {
    urlParams.delete('cities');
    urlParams.delete('specialities');
    urlParams.delete('social_media');
    urlParams.delete('max_subscribers');
    urlParams.delete('min_subscribers');
    urlParams.delete('page');
}