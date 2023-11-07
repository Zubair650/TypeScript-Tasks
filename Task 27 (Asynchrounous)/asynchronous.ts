{
    // const createPromise = (): Promise<string> => {
    //     return new Promise<string>((resolve, reject) => {
    //         const data: string = 'Something';
    //         if (data) {
    //             resolve(data)
    //         }
    //         else {
    //             reject('failed')
    //         }
    //     })
    // }
    // const getData = async (): Promise<string> => {
    //     const data : string = await createPromise();
    //     // console.log(data); 
    //     return data;
    // }
    // getData()

    type getTodo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }
    const GetToDO = async (): Promise<getTodo> => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
        const result = await res.json();
        // console.log(result);
        return result;
    }
    GetToDO();
}