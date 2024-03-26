import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

function NewsBoard({category}) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=402db6d66e5d4789ba5400d3cfb8e163`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.articles && data.articles.length > 0) {
                    setArticles(data.articles);
                } else {
                    console.error('No articles found in API response');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [category]);

    return (
        <div>
            <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
            {articles.map((news, index) => (
                <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            ))}
        </div>
    );
}

export default NewsBoard;
