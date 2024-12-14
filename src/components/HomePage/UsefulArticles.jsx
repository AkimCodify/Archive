import React, { useContext, useEffect} from 'react';
import '../../styles/UsefulArticles.css'
import { AutoContext } from '../../context/AutoContextProvider';

const UsefulArticles = () => {
    const { news, getUsefulArticles } = useContext(AutoContext);

    useEffect(() => {
        getUsefulArticles()
    }, []) 

    return (
        <section className='ourArticles'>
            <h1>Полезные статьи:</h1>
            <div>
                {news.map((el) => {
                    return(
                        <div className='articles' key={el.id}>
                            <p>{el.text}</p>
                            <img src={el.image} alt="" />
                    </div>
                    )
                })}
            </div>
        </section>
    );
};

export default UsefulArticles;