export type Comment = {
    id: string
    post_id: string
    user_id: string
    parent_id: string | null
    comment: string
    created_at: string
    upvotes: number
    user: User
    replies: Comment[]
}

export type User = {
    id: string
    name: string
    image: string | null
}