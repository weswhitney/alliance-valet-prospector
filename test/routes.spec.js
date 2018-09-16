process.env.NODE_ENV = 'development';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../app');
var knex = require('../db/knex');

chai.use(chaiHttp);


describe('API Routes', function() {

    describe('GET /valet-stations', function () {

        // beforeEach(function (done) {
        //     knex.migrate.rollback()
        //         .then(function () {
        //             knex.migrate.latest()
        //                 .then(function () {
        //                     return knex.seed.run()
        //                         .then(function () {
        //                             done();
        //                         });
        //                 });
        //         });
        // });


        beforeEach(function(done) {
            knex.migrate.rollback()
                .then(function () {
                    return knex.migrate.latest()
                }).then(function () {
                return knex.seed.run()
            }).then(function () {
                done();
            });
        });


        afterEach(function (done) {
            knex.migrate.rollback()
                .then(function () {
                    done();
                });
        });

        it('should return all valet stations', function (done) {
            chai.request(server)
                .get('/valet-stations')
                .end(function (err, res) {
                    res.should.have.status(200);
                    // res.should.be.json;
                    // res.body.should.be.a('array');
                    // res.body.length.should.equal(3);
                    res.body[0].should.have.property('address');
                    res.body[0].address.should.equal('1234 E. 1st street Denver, CO 80201');
                    res.body[0].should.have.property('comment');
                    res.body[0].comment.should.equal('pretty busy on a Monday night. not sure where they park the cars');
                    res.body[0].should.have.property('establishment_contact');
                    res.body[0].establishment_contact.should.equal('Jaime Hernandez');
                    res.body[0].should.have.property('establishment_email');
                    res.body[0].establishment_email.should.equal('jaime@thebarnres.com');
                    res.body[0].should.have.property('establishment_name');
                    res.body[0].establishment_name.should.equal('The Barn Restaurant');
                    res.body[0].should.have.property('establishment_phone');
                    res.body[0].establishment_phone.should.equal('303-987-4456');
                    res.body[0].should.have.property('num_employees');
                    res.body[0].num_employees.should.equal(2);
                    res.body[0].should.have.property('valet_contact');
                    res.body[0].valet_contact.should.equal('John Doe');
                    res.body[0].should.have.property('valet_email');
                    res.body[0].valet_email.should.equal('info@awesomevalet.com');
                    res.body[0].should.have.property('valet_name');
                    res.body[0].valet_name.should.equal('awesome valet');
                    res.body[0].should.have.property('valet_phone');
                    res.body[0].valet_phone.should.equal('303-123-4567')
                    res.body[0].should.have.property('valet_web');
                    res.body[0].valet_web.should.equal('www.awesomevalet.com');
                    res.body[0].should.have.property('establishment_web');
                    done();
                });
        });
    });

    describe.skip('GET /valet-stations/:id', function () {

        it('should return a single show', function (done) {
            chai.request(server)
                .get('/valet-stations/1')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json; // jshint ignore:line
                    res.body.should.be.a('object');
                    res.body.should.have.property('name');
                    res.body.name.should.equal('Suits');
                    res.body.should.have.property('channel');
                    res.body.channel.should.equal('USA Network');
                    res.body.should.have.property('genre');
                    res.body.genre.should.equal('Drama');
                    res.body.should.have.property('rating');
                    res.body.rating.should.equal(3);
                    res.body.should.have.property('explicit');
                    res.body.explicit.should.equal(false);
                    done();
                });
        });
    });

    describe.skip('POST /valet-stations', function () {
        it('should add a valet station', function (done) {
            chai.request(server)
                .post('/valet-stations')
                .send({
                    name: 'Family Guy',
                    channel: 'Fox',
                    genre: 'Comedy',
                    rating: 4,
                    explicit: true
                })
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json; // jshint ignore:line
                    res.body.should.be.a('object');
                    res.body.should.have.property('name');
                    res.body.name.should.equal('Family Guy');
                    res.body.should.have.property('channel');
                    res.body.channel.should.equal('Fox');
                    res.body.should.have.property('genre');
                    res.body.genre.should.equal('Comedy');
                    res.body.should.have.property('rating');
                    res.body.rating.should.equal(4);
                    res.body.should.have.property('explicit');
                    res.body.explicit.should.equal(true);
                    done();
                });
        });
    });

    describe.skip('PUT /valet-stations/:id', function () {
        it('should update a station', function (done) {
            chai.request(server)
                .put('/valet-stations/1')
                .send({
                    rating: 4,
                    explicit: true
                })
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json; // jshint ignore:line
                    res.body.should.be.a('object');
                    res.body.should.have.property('name');
                    res.body.name.should.equal('Suits');
                    res.body.should.have.property('channel');
                    res.body.channel.should.equal('USA Network');
                    res.body.should.have.property('genre');
                    res.body.genre.should.equal('Drama');
                    res.body.should.have.property('rating');
                    res.body.rating.should.equal(4);
                    res.body.should.have.property('explicit');
                    res.body.explicit.should.equal(true);
                    done();
                });
        });
    });

    describe.skip('DELETE /valet-stations/:id', function () {
        it('should delete a show', function (done) {
            chai.request(server)
                .delete('/valet-stations/1')
                .end(function (error, response) {
                    response.should.have.status(200);
                    response.should.be.json; // jshint ignore:line
                    response.body.should.be.a('object');
                    response.body.should.have.property('name');
                    response.body.name.should.equal('Suits');
                    response.body.should.have.property('channel');
                    response.body.channel.should.equal('USA Network');
                    response.body.should.have.property('genre');
                    response.body.genre.should.equal('Drama');
                    response.body.should.have.property('rating');
                    response.body.rating.should.equal(3);
                    response.body.should.have.property('explicit');
                    response.body.explicit.should.equal(false);
                    chai.request(server)
                        .get('/valet-stations')
                        .end(function (err, res) {
                            res.should.have.status(200);
                            res.should.be.json; // jshint ignore:line
                            res.body.should.be.a('array');
                            res.body.length.should.equal(3);
                            res.body[0].should.have.property('name');
                            res.body[0].name.should.equal('Game of Thrones');
                            res.body[0].should.have.property('channel');
                            res.body[0].channel.should.equal('HBO');
                            res.body[0].should.have.property('genre');
                            res.body[0].genre.should.equal('Fantasy');
                            res.body[0].should.have.property('rating');
                            res.body[0].rating.should.equal(5);
                            res.body[0].should.have.property('explicit');
                            res.body[0].explicit.should.equal(true);
                            done();
                        });
                });
        });
    });
});
