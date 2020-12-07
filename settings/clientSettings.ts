// All of this information is available to the client-side code
// DO NOT retrieve sensitive information from the environment in here! :O

import { clientSettings } from "./localSettings"

// todo: handle when someone overrides these 3, the derived vars
const ADMIN_SERVER_PORT = 3030
const ADMIN_SERVER_HOST = "localhost"
const BAKED_BASE_URL = `http://${ADMIN_SERVER_HOST}:${ADMIN_SERVER_PORT}`

export interface ClientSettings {
    ENV: string
    ADMIN_SERVER_HOST: string
    ADMIN_SERVER_PORT: number
    BAKED_BASE_URL: string
    BAKED_GRAPHER_URL: string
    ADMIN_BASE_URL: string
    WORDPRESS_URL: string
    GRAPHER_VERSION: string
    OPTIMIZE_SVG_EXPORTS: boolean
    GITHUB_USERNAME: string
    GIT_DEFAULT_USERNAME: string
    GIT_DEFAULT_EMAIL: string
    BLOG_POSTS_PER_PAGE: number
    BLOG_SLUG: string
    ALGOLIA_ID: string
    ALGOLIA_SEARCH_KEY: string
    STRIPE_PUBLIC_KEY: string
    DONATE_API_URL: string
    RECAPTCHA_SITE_KEY: string
}

const defaultSettings: ClientSettings = {
    ENV: "development",
    ADMIN_SERVER_HOST,
    ADMIN_SERVER_PORT,
    BAKED_BASE_URL,
    BAKED_GRAPHER_URL: `${BAKED_BASE_URL}/grapher`,
    ADMIN_BASE_URL: `http://${ADMIN_SERVER_HOST}:${ADMIN_SERVER_PORT}`,
    WORDPRESS_URL: "https://owid.cloud",

    GRAPHER_VERSION: "1.0.0", // Ideally the Git hash
    GITHUB_USERNAME: "owid-test",
    GIT_DEFAULT_USERNAME: "Our World in Data",
    GIT_DEFAULT_EMAIL: "info@ourworldindata.org",

    BLOG_POSTS_PER_PAGE: 20,
    BLOG_SLUG: "blog",

    ALGOLIA_ID: "",
    ALGOLIA_SEARCH_KEY: "",

    STRIPE_PUBLIC_KEY: "pk_test_nIHvmH37zsoltpw3xMssPIYq",
    DONATE_API_URL: "http://localhost:9000/donate",

    RECAPTCHA_SITE_KEY: "6LcJl5YUAAAAAATQ6F4vl9dAWRZeKPBm15MAZj4Q",
    OPTIMIZE_SVG_EXPORTS: false,
}

const {
    ENV,
    BAKED_GRAPHER_URL,
    ADMIN_BASE_URL,
    WORDPRESS_URL,
    GRAPHER_VERSION,
    GITHUB_USERNAME,
    GIT_DEFAULT_USERNAME,
    GIT_DEFAULT_EMAIL,
    BLOG_POSTS_PER_PAGE,
    BLOG_SLUG,
    ALGOLIA_ID,
    ALGOLIA_SEARCH_KEY,
    STRIPE_PUBLIC_KEY,
    DONATE_API_URL,
    RECAPTCHA_SITE_KEY,
    OPTIMIZE_SVG_EXPORTS,
} = {
    ...defaultSettings,
    ...clientSettings,
}

export {
    ADMIN_SERVER_PORT,
    ADMIN_SERVER_HOST,
    BAKED_BASE_URL,
    ENV,
    BAKED_GRAPHER_URL,
    ADMIN_BASE_URL,
    WORDPRESS_URL,
    GRAPHER_VERSION,
    GITHUB_USERNAME,
    GIT_DEFAULT_USERNAME,
    GIT_DEFAULT_EMAIL,
    BLOG_POSTS_PER_PAGE,
    BLOG_SLUG,
    ALGOLIA_ID,
    ALGOLIA_SEARCH_KEY,
    STRIPE_PUBLIC_KEY,
    DONATE_API_URL,
    RECAPTCHA_SITE_KEY,
    OPTIMIZE_SVG_EXPORTS,
}
