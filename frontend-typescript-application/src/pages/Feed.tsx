import React from 'react'
import {Layout} from "../hoc/Layout";
import {MajorPost} from "../components/posts/MajorPost";

export const Feed: React.FC = () => {
    return (
        <Layout>
            <MajorPost title="GOVNO" username="luboveva" text="new Post for sex"/>
        </Layout>
    )
}