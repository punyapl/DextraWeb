export type BuildMode = 'production' | 'development'
export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    favicon: string;
    src: string;
    locales: string;
    buildLocales: string;
}

export interface BuildEnv {
    token: string;
    mode: BuildMode;
    port: number;
    apiUrl: string;
    strapiUrl: string;
    emailJSServiceId: string;
    emailJSTemplateId: string;
    emailJSPublicKey: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    strapiUrl: string;
    emailJSServiceId: string;
    emailJSTemplateId: string;
    emailJSPublicKey: string;
    project: 'storybook' | 'jest' | 'main';
}
