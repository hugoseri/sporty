import { api } from './api'

/**
 * Export server middleware
 */
export default {
    path: '/api',
    handler: api,
}
