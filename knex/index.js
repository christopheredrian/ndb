const db = () => {
    return knex = require('knex')({
        client: 'sqlite3',
        connection: {
            filename: "./chinook.db"
        },
        // sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning.
        useNullAsDefault: true
    });
};

const main = async () => {

    try {

        const knext = db();
        const rows = await knex
            .select([
                'AlbumId',
                'Title',
                'ArtistId'
            ])
            .from('albums')
            .limit(1);


        rows.forEach(({ AlbumId }) => {
            console.log(AlbumId);
        });


        /**
         * Insert single album
         */

        // const insertId = await knext('albums').insert({
        //     Title: 'Sa Wakas',
        //     ArtistId: 1,
        // });

        // console.log(`Inserted: ${inserted}`);
        const album = await db()
            .select('*')
            .from('albums')
            .where({
                AlbumId: 348
            })
            .first();

        console.log(album.Title);


    } catch (error) {
        console.log(error);
    }

    process.exit(1);
};

main();