


export const getShortTitle = (title: string): string => {
    if(title.length < 100){
        return title
    }
    const words = title.split(' ')
    let shortTitle = ''
    let i = 0;
    let length = words.length;
    while (i < length){
        const shortTitleLength = shortTitle.length + words[i].length;
        if(shortTitleLength > 50){
            break
        }   
        shortTitle += words[i++]
    }
    
    return shortTitle + '...'
}