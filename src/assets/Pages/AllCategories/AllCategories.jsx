import './AllCategories.scss'
import { useQueries } from '@tanstack/react-query';
import { fetchData } from '../../../utils/api';
import Card from '../../Components/ProductCard/Card';
import { useNavigate } from 'react-router-dom';

function AllCategories() {

    const navigate = useNavigate();

    const results = useQueries({
        queries: [
            { queryKey: [1], queryFn: () => fetchData(`products?populate=*&[filters][categories][id]=${1}&pagination[limit]=4`) },
            { queryKey: [2], queryFn: () => fetchData(`products?populate=*&[filters][categories][id]=${2}&pagination[limit]=4`) },
            { queryKey: [3], queryFn: () => fetchData(`products?populate=*&[filters][categories][id]=${3}&pagination[limit]=4`) },
            { queryKey: [4], queryFn: () => fetchData(`products?populate=*&[filters][categories][id]=${4}&pagination[limit]=4`) }
        ]
    })
    let key = 0;

    return (
        <>
            {
                results.map(items => {
                    key++;
                    return (
                        <div className='category' key={key}>
                            <h2>{items.data?.data[0].attributes.categories.data[0].attributes.Title}</h2><br />
                            <div className='products'>
                                {items.data?.data.map(item => <Card key={item.id} product={item} />)}
                                <div className='more' onClick={() => navigate(`/category/${items.data?.data[0].attributes.categories.data[0].id}`)}>
                                    More ►
                                </div>
                            </div>
                        </div >
                    );
                })
            }
        </>
    );
}

export default AllCategories;