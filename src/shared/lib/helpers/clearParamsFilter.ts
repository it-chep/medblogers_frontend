export const clearParamsFilter = (urlParams: URLSearchParams) => {
    urlParams.delete('cities');
    urlParams.delete('specialities');
    urlParams.delete('social_media');
    urlParams.delete('can_barter');
    urlParams.delete('can_buy_advertising');
    urlParams.delete('can_sell_advertising');
    urlParams.delete('has_blogs');
    urlParams.delete('max_subscribers');
    urlParams.delete('min_subscribers');
    urlParams.delete('page');
}
