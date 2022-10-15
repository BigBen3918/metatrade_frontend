declare module "*.mp4";

declare interface Props {
    component: React.ComponentType;
    path?: string;
}

declare interface Layout {
    children: React.ReactNode;
}

/** ----- Auth Interfaces ----- */
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
    email: string;
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
