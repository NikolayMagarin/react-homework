export async function getCinemas() {
  const res = await fetch('http://localhost:3001/api/cinemas')
 
  if (!res.ok) {
    return Promise.resolve({})
  }
 
  return res.json()
}