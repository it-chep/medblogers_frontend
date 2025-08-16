import { IFormError } from "../../model/types";




export const changeFormError = (formError: IFormError[], setFormError: (formError: IFormError[]) => void) =>  {

    return {
        setErrorField(field: string){
            return (text: string) => {
                const targetInd = formError.findIndex(error => error.field === field)
                if(targetInd >= 0){
                    const newFormError = [...formError]
                    newFormError[targetInd].text = text;
                    setFormError(newFormError)
                }   
            }
        }
    }

}