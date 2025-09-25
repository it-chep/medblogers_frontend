export const clearParamsFilterFreelancer = (urlParams: URLSearchParams) => {
    urlParams.delete('cities');
    urlParams.delete('specialities');
    urlParams.delete('price_category');
    urlParams.delete('societies');
    urlParams.delete('experience_with_doctors'); 
    urlParams.delete('page');
}