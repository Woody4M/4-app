import '../style/globals.css'
import Layout from'../comps/Layout'
function Myapp({ Component, pagePros}) {
  return(
    <Layout>
      <Component{...pageProps}
      </Layout>
  )
}
export default Myapp
