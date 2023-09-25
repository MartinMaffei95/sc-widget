export type Sorts = 'MINOR_TO_MAJOR' | 'MAJOR_TO_MINOR' | 'TO_UP' | 'TO_BOTTOM'
export type Filters = 'TO_UP' | 'TO_BOTTOM'

export type Config = {
    sort?: {
        is_up?: 'TO_UP' | 'TO_BOTTOM'
        price?: 'MINOR_TO_MAJOR' | 'MAJOR_TO_MINOR'
    }
    filters?: {
        is_up?: boolean
    }
}
