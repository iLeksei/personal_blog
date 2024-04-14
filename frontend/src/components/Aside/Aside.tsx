import React, {ReactElement, useCallback} from "react";

import "./Aside.css";
import {ApiUrlEnum} from "../../enums/ApiUrlEnum";
import {useFetch} from "../../hooks/useFetch";
import {HashTag} from "../HashTag/HashTag";
import {SearchInput} from "../SearchInput/SearchInput";

//todo add hash tags to session storage
export const Aside = (): ReactElement => {
    const [data, isLoading] = useFetch<string[]>(ApiUrlEnum.HASH_TAGS);

    /**
     * todo:
     *  1) get posts by hashtag
     *  2) redirect to blog_page and render all that posts
     */
    const onClickCb = useCallback((name: string) => {
       return () => {}
    }, []);

    return (
        <aside className="Aside__container">
            <SearchInput/>
            <ul>
                {
                    data?.map((hashTag, idx) => {
                        return (
                            <HashTag
                                key={`${hashTag}`}
                                name={hashTag}
                                onClick={onClickCb(hashTag)}
                            />
                        );
                    })
                }
            </ul>
        </aside>
    );
}