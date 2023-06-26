export async function getMovies() {
  const res = await fetch('http://localhost:3001/api/movies')
 
  if (!res.ok) {
    return Promise.resolve({})
  }
 
  return res.json()
}