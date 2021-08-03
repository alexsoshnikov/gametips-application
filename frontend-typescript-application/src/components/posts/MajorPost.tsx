import React from "react"
import {IPost} from "../../models/components/IPost"
import {Card, Col, Image, Row} from "react-bootstrap"
import {YouTubePlayer} from "../VideoPlayer/YouTubePlayer";

export const MajorPost: React.FC<IPost> = props => (
    <Card text="white" bg="dark">
        <Card.Header>
            <Image src="https://i.pinimg.com/originals/d0/7a/f6/d07af684a67cd52d2f10acd6208db98f.jpg" roundedCircle
                   width={32} height={32}/>
            <p className="m-0">{props.username}</p>
        </Card.Header>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
            <YouTubePlayer idVideo={props.idVideo}/>
        </Card.Body>
    </Card>
)