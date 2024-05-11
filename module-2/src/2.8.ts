{
  type MyToDo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const fetchData = async (): Promise<MyToDo> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    return data;
  };

  const displayData = async () => {
    const res = await fetchData();
    console.log(res);
  };

  displayData();

  interface CustomError {
    message: string;
  }

  const myPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = 'Hi there';

      if (data) {
        resolve(data);
      }

      const error: CustomError = { message: 'Error' };
      reject(error);
    });
  };

  const displayPromise = async (): Promise<string | undefined | any> => {
    try {
      const result: string = await myPromise();
      console.log(result);
    } catch (error) {
      console.log((error as CustomError).message);
    }
  };

  displayPromise();
}
