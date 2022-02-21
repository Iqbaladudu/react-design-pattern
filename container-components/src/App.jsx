import './App.css'
import { CurrentUserLoader } from './CurrentUserLoader'
import { UserInfo } from './UserInfo'
import { UserLoader } from './UserLoader'
import { ResourceLoader } from './ResourceLoader'
import { ProductInfo } from './ProductInfo'
import { DataSource } from './DataSource'
import axios from 'axios'

const userIds = [1, 2, 3]
const getServerData = url => async () => {
  const response = await axios.get(url)
  return response.data
}

const getLocalStorage = key => () => {
  return localStorage.getItem(key)
}

const Text = ({ nama }) => <h1>{nama}</h1>

function App() {

  return (
    <>
      <DataSource getDataFunction={getServerData("http://localhost:8080/users/3")} resourceName="user">
        <UserInfo />
      </DataSource>

      <DataSource getDataFunction={getLocalStorage("nama")} resourceName="nama">
        <Text />
      </DataSource>
    </>
  )

  // return (
  //   <>
  //     {userIds.map((value, index, arr) => {
  //       return (
  //         <UserLoader userId={value}>
  //           <UserInfo />
  //         </UserLoader>
  //       )
  //     })}
  //   </>
  // )

  // return (
  //   <>
  //     <ResourceLoader resourceUrl="http://localhost:8080/users/1" resourceName="user">
  //       <UserInfo />
  //     </ResourceLoader>
  //     <ResourceLoader resourceUrl="http://localhost:8080/products/1" resourceName="product">
  //       <ProductInfo />
  //     </ResourceLoader>
  //   </>
  // )
}

export default App
