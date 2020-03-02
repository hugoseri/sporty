import faker from 'faker'
import { kebabCase } from 'lodash'

/**
 * Database generator function
 */
export default async () =>
{
    // Init database
    const database = {
        config: {},
        users: [],
    }

    // Create 20 users
    for ( let i = 1; i <= 20; i++ )
    {
        const gender = faker.random.number(1)
        const firstName = faker.name.firstName(gender)
        const lastName = faker.name.lastName(gender)

        database.users.push({
            id: i,
            firstName: firstName,
            lastName: lastName,
            email: `${kebabCase(firstName)}.${kebabCase(lastName)}@domain.com`,
        })
    }

    return database
}
