import './Categories.scss'
import { useQuery } from '@tanstack/react-query'
import { fetchData } from '../../../../utils/api'
import { useNavigate } from 'react-router-dom'

function Categories() {

    const { isLoading, error, data } = useQuery(['categories'], () => fetchData('categories?populate=*'))

    error && console.log(`Error: ${error}`)

    const navigate = useNavigate();

    return (
        <>
            <p className='homeCat'>CATEGORIES</p>
            <div className='categories'>
                {isLoading ? <p>Loading...</p> :
                    data?.data.map(item => {
                        return (
                            <div
                                key={item.id}
                                onClick={() => navigate(`/category/${item.id}`)}
                                className="cat">
                                <img src={`${import.meta.env.VITE_REACT_APP_BASE_URL}${item.attributes.img.data.attributes.url}`} alt="" />
                            </div>
                        );
                    })}
            </div>
        </>
    );
}

export default Categories;