



export const scrollingBL = () => {
    let isOne = true;
    return () => {
        if(isOne && (window.location.hash === '#blacklist')){
            const blackList = document.querySelector('#black_list_scroll')
            if(blackList){
                const top = blackList.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({top, behavior: 'smooth'})
            }
            isOne = false;
        }
    }
}