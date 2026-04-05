

interface IColor{
    fontColor: string;
    bgColor: string; 
}

export const getColorByCoopId: (id: string) => IColor = (id: string) => {
    switch (id){
        case '1':
            return {
                bgColor: '#003360',
                fontColor: '#2D99FC'
            }
        case '2':
            return {
                bgColor: '#004643',
                fontColor: '#19EFE4'
            }
        case '3':
            return {
                bgColor: '#00596F',
                fontColor: '#60DBFF'
            }
        default:
            return {
                bgColor: '#175290',
                fontColor: '#2D99FC'
            }
    }
}