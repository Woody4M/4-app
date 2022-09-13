export const getStatiCPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  const paths = data.map(pugs => {
   return{
     params: { id: pugs.id.toString()}
   } 
  })
  return{
    paths,fallback:false
  }
}
export const getStaticProps = async (context) => {
  const id = constext.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();
  return{
    props:{pugs:data}
  }
}
const Details = () => {
  return (
    <div>
      <h1>Details Page</h1>
      <p>{pugs.name}</p>
      <p>{ pugs.email}</p>
      <p>{pugs.website}</p>
      <p>{pugs.address.city}</p>
    </div>
  );
}
export default Details;