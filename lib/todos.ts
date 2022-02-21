export async function getSortedTodoData() {
    const data = await fetchData('')
return data
} 
//
export async function getAlltodoIds() {
    const data = await fetchData('')
    const ids =  data.map(itm => {
      return {
        params: {id: itm.id.toString()}
      }
    })
    return ids
}
//
export async function getTodoData(id: string) {
  return await fetchData(id)
}
//
export async function fetchData(id: string): Promise<any> {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (!response) {
      return {
        notFound: true,
      }
    }
    return await response.json();
}