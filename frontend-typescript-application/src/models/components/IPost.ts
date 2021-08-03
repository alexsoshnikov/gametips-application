import {IYouTubePlayer} from "./IYouTubePlayer";

export interface IPost extends IYouTubePlayer{
    title: string,
    text: string,
    username: string,
    createDate?: Date
}