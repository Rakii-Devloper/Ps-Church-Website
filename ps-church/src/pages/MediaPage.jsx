import React from 'react';
import NewCarousel from '../components/NewCarousel';

function MediaPage() {
    return (
        <div className="bg-cover bg-center" style={{ backgroundImage: 'url(./src/assets/bg1.jpg)' }}>
            <div className="container mx-auto">
                <NewCarousel />
            </div>
        </div>
    );
}

export default MediaPage;
