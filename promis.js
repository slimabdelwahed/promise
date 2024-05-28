/*function asyncTask( taskName,delay){
    return new Promise ((resolve,reject) => {
        setTimeout( () => {console.log (`${taskName} completed after ${delay} milliseconds`);
        resolve(`${taskName} result`);

        }, delay )
    } )
}


async function runTasks() {
    try {
      console.log('Starting tasks...');
      
  
      const result1 = await asyncTask('Task 1', 2000);
      console.log('Result of Task 1:', result1);
  
    
      const result2 = await asyncTask('Task 2', 1500);
      console.log('Result of Task 2:', result2);
  
   
      const result3 = await asyncTask('Task 3', 1000);
      console.log('Result of Task 3:', result3);
  
      console.log('All tasks completed!');
    } catch (error) {
      console.error('Error:', error);
    }
  
  
  runTasks();*/

 /* async function iterateWithAsyncAwait( array){
    try{
for (i=0;i<array.length;i++) {await delay (1000);
    if (array[i] === 0) {
        throw new Error('Encountered 0 in the array');
      }
    
   console.log(array[i]);}

    
    console.log( 'iteration completed')}
    catch (error) {
        console.error('Error:', error);
      }
  } 
  function delay(ms){

    return new Promise(resolve => setTimeout(resolve, ms));
  }
const array= [2,9,8,4,3,2,0];
iterateWithAsyncAwait (array);*/


/*async function awaitCall(){
try{
console.log ('fetching data');
const data = await fetchDataFromAPI()
console.log(data )
}
catch (error) {
    console.error('Error:', error);
}
}
    function fetchDataFromAPI() {
        return new Promise((resolve, reject) => {
      
          setTimeout(() => {
            resolve({ name: 'asma', age: 32 }); 
          }, 2000);
        });
      } ;

awaitCall();*/


/*function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = new Error("Failed to fetch data from the API");
            reject(error);
          }, 2000);
        });
      }
      async function awaitCall() {
        try {
            const data = await fetchData();
            console.log("Received data:", data);
          } catch (error) {
            console.error("Error fetching data:", error.message);
            console.log("Failed to fetch data from the API. Please try again later.");
          }
        }
        awaitCall();*/

        async function parallelCalls(urls) {
          try{
const fetchPromesses = urls.map(url => fetch(url).then(response => response.json()));
const result= await Promise.all (fetchPromesses);
        console.log (result)  }
      catch (error){
          console.log ('error fetching data')


      }  }
      const urls = [
          'https://jsonplaceholder.typicode.com/posts/1',
          'https://jsonplaceholder.typicode.com/posts/2',
          'https://jsonplaceholder.typicode.com/posts/3'

      ];
      parallelCalls(urls);