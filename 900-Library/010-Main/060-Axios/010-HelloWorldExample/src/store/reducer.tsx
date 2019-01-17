
export default function reducer (state: any, action: any) {
    switch(action.type){
        case "REQUEST":
            console.log("request");
            return state;
        default:
            console.log("request done");
            return state;
    }
}
