import { useContext, useState } from 'react'
import './Search.scss'
import { useQuery } from '@tanstack/react-query'
import { fetchData } from '../../../utils/api'
import { useNavigate } from 'react-router-dom'
import { OCcontext } from '../../../utils/dialogOpener'
function Search() {

    const { ocDispatch } = useContext(OCcontext)
    const navigate = useNavigate()
    const [searchParam, setSearchParam] = useState()

    const { data, isLoading, refetch } = useQuery(['search'], () => fetchData(`products?populate=*&filters[title][$contains]=${searchParam}`))

    const handleClick = (event) => {
        setSearchParam(event.target.value);
        refetch();
    }

    return (
        <div className='search'>
            <input type="text" className="box" onChange={(event) => handleClick(event)} placeholder='Search' />
            {
                !isLoading && data?.data.map(item => {
                    return (<>
                        <div className='searchProducts' key={Date.now().toString()} onClick={() => { ocDispatch('CLOSEALL'); navigate(`/SingleProduct/${item.id}`); }}>
                            <img src={`${import.meta.env.VITE_REACT_APP_BASE_URL}${item.attributes.img.data[0].attributes.formats.small.url}`} alt="" />
                            <div>
                                <p className='details title'>{item.attributes.title}</p>
                                <p className='details desc'>{item.attributes.desc}</p>
                            </div>
                        </div>
                        <br />
                    </>);
                }
                )
            }
        </div>
    );
}

export default Search;