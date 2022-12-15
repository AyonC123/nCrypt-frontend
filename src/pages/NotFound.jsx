import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass as search } from '@fortawesome/free-solid-svg-icons'

function NotFound() {
  return (
    <div className='notfound'>
      <FontAwesomeIcon icon={search}/>
      <div>404 | Page not found</div>
    </div>
  )
}
export default NotFound;