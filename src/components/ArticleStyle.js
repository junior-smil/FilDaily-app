import React, { useState } from 'react';
import '../App.css'; // Assurez-vous d'importer le fichier CSS

const articles = [
    {
        id: 1,
        title: 'Article 1',
        description: 'Description de l\'article 1.',
        image: 'image1.jpg',
    },
    {
        id: 2,
        title: 'Article 2',
        description: 'Description de l\'article 2.',
        image: 'image2.jpg',
    },
    {
        id: 3,
        title: 'Article 3',
        description: 'Description de l\'article 3.',
        image: 'image3.jpg',
    },
];

const JournalPage = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);

    const handleArticleClick = (article) => {
        setSelectedArticle(article);
    };

    return (
        <div className="journal-container">
            <div className="details">
                {selectedArticle ? (
                    <>
                        <h2>{selectedArticle.title}</h2>
                        <img src={selectedArticle.image} alt={selectedArticle.title} />
                        <p>{selectedArticle.description}</p>
                    </>
                ) : (
                    <p>Sélectionnez un article pour voir les détails ici.</p>
                )}
            </div>
            <div className="sidebar">
                <h2>Articles</h2>
                {articles.map((article) => (
                    <div
                        key={article.id}
                        className="article"
                        onClick={() => handleArticleClick(article)}
                    >
                        <h3>{article.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JournalPage;