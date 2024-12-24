import NavBar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <NavBar item1="Home" item2="Products" item3="Contact me" />
      <ItemListContainer products1="Agrega tus productos!"/>
    </>
  )
}

export default App
