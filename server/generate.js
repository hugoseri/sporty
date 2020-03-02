import database from './database'
import jsonfile from 'jsonfile'
import path from 'path'

/**
 * Run
 */
const run = async () =>
{
    const content = await database()

    jsonfile.writeFileSync(path.resolve('./db.json'), content, { spaces: 4, EOL: '\r\n' })
}

// Start creating backup
run().then(() => console.warn('Completed!'))
     .catch((e) =>
     {
         throw e
         console.error('Unable to generate data..')
     })
