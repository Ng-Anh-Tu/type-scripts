// Generics
function showStringData(a: string): string {
    return a
}

function showNumberData(a: number): number {
    return a
}

function showData<T>(a: T): T {
    return a
}

showData<string>("string")

const arrNum = [1, 2, 3, 5, 8, 13] //Fibonacci

function arr_map(arr: number[], callback: (item: number) => number): number[] {
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        const newItem = callback(arr[i])
        temp.push(newItem)
    }
    return temp
}

function we17304_map<T>(arr: T[], callback: (item: T) => T): T[] {
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        const newItem = callback(arr[i])
        temp.push(newItem)
    }
    return temp
}



const arrNum2 = [13, 1, 3, 5, 8, 2] //Fibonacci
const arrStr2 = ["b", "cb", "ab", "e"]
arrNum2.sort((a, b) => {
    return b - a
})

console.log(arrNum2);

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
}

selectionSort(arrStr2)
console.log(arrStr2);

function selection<T>(arr:T[],callBack?:(item:T,item2:T)=>number):T[]{
    for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        if(callBack(arr[j],arr[i])<0){
            [arr[j],arr[i]]=[arr[i],arr[j]];
        }
    }
}
return arr;
}
function ascendingOrder(item: number, item2: number): number {
    return item- item2;
  }
  selection(arrNum2, ascendingOrder);
  console.log(arrNum2);
//   arrStr1.sort();
  
  arrStr2.sort().reverse();
  console.log(arrStr2);


