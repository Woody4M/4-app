import styles from '../../style/pugs.modules.css'
import Link from 'next/link'
export const getStaticProps = async () => {
  const res= await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return{
    props: { pugs: data  }
  }
}
const Pugs = ({pugs}) => {
  return(
    <div>
      <h1>Woody</h1>
      {pugs.map(pugs=>(
      <Link href={'/pugs/' + pugs.id key={pugs.id}>
        <a className={styles.single}>
          <h3>{pugs.name}</h3>
        </a>
    </div>
      ))}
      </div>
  );
}
export default Pugs;