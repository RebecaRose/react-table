
export function handleVerifyNumber(value: string) {
    let isVerified = 0;
    let response = value;
    do{
        if(response.indexOf("R$") > -1){
            response = response.replace("R$", "");
        } else if(response.indexOf(" ") > -1){
            response = response.replace(" ", "");
        } else if(response.indexOf(".") > -1){
            response = response.replace(".", "");
        } else if(response.indexOf(",") > -1){
            response = response.replace(",", ".");
            isVerified = 1;
        } else{
            isVerified = 1;
        }
    } while(isVerified === 0)

    return parseFloat(response);
}
