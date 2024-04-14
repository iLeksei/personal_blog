import React, {ReactElement, lazy, Suspense} from 'react';
import {Route, Routes} from "react-router-dom";

import {Heading} from "./components/Heading/Heading";
import {RoutesEnum} from "./enums/RoutesEnum";

const BlogPage = lazy(() => import("./pages/BlogPage/BlogPage"));
import {HomePage} from "./pages/HomePage/HomePage";
import {Aside} from "./components/Aside/Aside";

import './App.css';

function App(): ReactElement {
    return (
        <main className="App__container">
            <section className="App__header-container">
                <Heading/>
            </section>
            <section className="App__page-container">
                <Suspense fallback={"Loading..."}>
                    <Routes>
                        <Route path={RoutesEnum.HOME} element={<HomePage/>}/>
                        <Route path={RoutesEnum.BLOG} element={<BlogPage/>}/>
                    </Routes>
                </Suspense>
            </section>
            <section className="App__aside-container">
                <Aside/>
            </section>
        </main>
    );
}

export default App;
