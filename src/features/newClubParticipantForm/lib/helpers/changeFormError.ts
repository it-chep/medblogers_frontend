import { IFormError } from "../../model/types";




export const changeFormError = (formError: IFormError[], setFormError: (formError: IFormError[]) => void) =>  {

    return {
        setErrorFieldDelete(field: string){
            return () => {
                const targetInd = formError.findIndex(error => error.field === field)
                if(targetInd >= 0){
                    const newFormError = [...formError]
                    newFormError.splice(targetInd, 1)
                    setFormError(newFormError)
                }   
            }
        }
    }

}