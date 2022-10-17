declare module "*.mp4";

declare interface Props {
    component: React.ComponentType;
    path?: string;
}

declare interface Layout {
    children: React.ReactNode;
}

/** ----- Auth Interfaces ----- */
interface AuthState {
    isAuth: boolean;
    name: string;
    email: string;
    gender: number;
    option: number;
}
declare interface RegistryObject {
    fullname: string;
    username: String;
    email: string;
    password: string;
    phonenumber: string;
    gender: number;
    option: number;
}
declare interface LoginObject {
    name: string;
    password: string;
}

// Card Interface
declare interface CardObject {
    title: string;
    cost: number;
    bonus: number;
}

declare interface TestiObject {
    image: string;
    name: string;
    content: string;
}

/** Interface, type for Redux State Variable */
interface IArticle {
    id: number;
    title: string;
    body: string;
}

type ArticleState = {
    articles: IArticle[];
};

type ArticleAction = {
    type: string;
    article: IArticle;
};

type DispatchType = (args: ArticleAction) => ArticleAction;
