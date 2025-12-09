


export const getShortTitle = (title: string, maxSize: number): string => {
    if(title.length < maxSize){
        return title
    }
    const words = title.split(' ')
    let shortTitle = ''
    let i = 0;
    let length = words.length;
    while (i < length){
        const shortTitleLength = shortTitle.length + words[i].length;
        if(shortTitleLength > maxSize){
            break
        }   
        shortTitle += ' ' + words[i++]
    }
    
    return shortTitle.trim() + '...'
}