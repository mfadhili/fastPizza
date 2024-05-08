import React from 'react';
import Header from "./Header.jsx";

function AppLayout() {
    return (
        <div>
            <Header />
            <main>
                <h1>Content</h1>
            </main>
        </div>
    );
}

export default AppLayout;