const remove = (data:Array<any>, filterFunction:Function) => {
    return data.filter(element => filterFunction(element));
}

const drop = (data:Array<any>, n:number) => {
    return data.slice(n,data.length);
}

const compact = (data:Array<any>) => {
    return data.filter(element => (element!=null)||(element!="")||(element!=0));
}

const fill = (data:Array<any>, value) => {
    return data.map( number => number = value);
}

const head = (data:Array<any>) => {
    return data[0];
}

const join = (data:Array<any>, seperator:String) => {
    let resultString = "";
    data.forEach(element => resultString+(new String(element))+seperator);
    return resultString;
}

const tail = (data:Array<any>) => {
    return data[data.length-1];
}

const nth = (data:Array<any>, nth:number) => {
    return data[nth];
}

const pull = (data:Array<any>, values:Array<any>) => {
    return data.filter(datavalue => checkifinArray(datavalue,values));
}

const checkifinArray = (element:any, values:Array<any>) => {
    values.forEach(value => {if(value==element)return true});
    return false;
}

const concat = (data:Array<any> , values:Array<any>) => {
    values.forEach(value => data.push(value));
    return data;
}