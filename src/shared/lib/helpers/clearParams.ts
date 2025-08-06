export const clearParams = (urlParams: URLSearchParams) => {
    urlParams.delete('city');
    urlParams.delete('speciality');
    urlParams.delete('social_media');
    urlParams.delete('max_subscribers');
    urlParams.delete('min_subscribers');
}