exports.seed = function(knex, Promise) {
    return knex('valet_stations').del() // Deletes ALL existing entries
        .then(function() { // Inserts seed entries one by one in series
            return knex('valet_stations').insert({
                valet_name: 'awesome valet',
                valet_phone: '303-123-4567',
                valet_web: 'www.awesomevalet.com',
                valet_email: 'info@awesomevalet.com',
                valet_contact: 'John Doe',
                establishment_name: 'The Barn Restaurant',
                establishment_phone: '303-987-4456',
                establishment_contact: 'Jaime Hernandez',
                establishment_email: 'jaime@thebarnres.com',
                num_employees: 2,
                address: '1234 E. 1st street Denver, CO 80201',
                comment: 'pretty busy on a Monday night. not sure where they park the cars'

                ,            });
        }).then(function () {
            return knex('valet_stations').insert({
                valet_name: 'premier valet',
                valet_phone: '3038473890',
                valet_web: 'www.premiervalet.com',
                valet_email: 'sales@premiervalet.com',
                valet_contact: 'Grant Huthinson',
                establishment_name: 'The Milk Barrel',
                establishment_phone: '303-998-6577',
                establishment_contact: 'Jack Smith',
                establishment_email: 'jack@themilkbarrel.com',
                num_employees: 1,
                address: '1877 17th street Denver, CO 80201',
                comment: 'This place looks cool, young crowd. Hipster food court.'
                ,            });
        }).then(function () {
            return knex('valet_stations').insert({
                valet_name: 'first valet',
                valet_phone: '7207489940',
                valet_web: 'www.firstvalet.com',
                valet_email: 'info@firstvalet.com',
                valet_contact: 'Kristen Portland',
                establishment_name: 'Three Dogs Tavern',
                establishment_phone: '303-390-0883',
                establishment_contact: 'Parson Gregario',
                establishment_email: 'pg@threedogs.com',
                num_employees: 3,
                address: '145 Gaylord street Denver, CO 80201',
                comment: 'this place sucks.'
            });
        });
};