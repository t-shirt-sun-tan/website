import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'

const Navigation = () => (
    <div>
        <FontAwesomeIcon icon={faCalendar} />カレンダー
        <FontAwesomeIcon icon={faAngleLeft} />
        <FontAwesomeIcon icon={faAngleRight} />
    </div>
)

export default Navigation