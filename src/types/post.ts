export type Post = {
    id: string
    title: string
    created_at: string
    upvotes: number
    nr_of_comments: number
    description: string | null
    image: string | null
    group: Group
    user: User
}

export type Group = {
    id: string
    name: string
    image: string
}

export type User = {
    id: string
    name: string
    image: any
}
