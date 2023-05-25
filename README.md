# eventify-compjr

This is a monorepo of a project for [junior enterprise](https://juniorenterprises.eu/what-is-a-junior-enterprise/) called [Comp Junior](https://www.compjunior.com.br/), at [UFLA (Federal University of Lavras)](https://ufla.br/).
I am developing it as a trainee of the company and I hope I get approved and learn a lot from it :)

## to-do

- back-end `api`
  - [x] Connect MongoDB
  - [x] Create a simple CRUD for events
    - [x] basic
    - [x] with images
  - [x] Implement authentication
    - ~~Implement Login via email (not necessary)~~
    - [x] Implement Social Login
  - [x] Implement CRUD permissions
    - [x] ensureAuthenticated on events
      - [x] create
      - [x] update
      - [x] delete
    - [x] show created events by the user
  - [x] improve file management
    - [x] delete files when deleting events
    - [x] delete files when updating image of an event
  - [x] Improve docs
    - [ ] Share Insomnia requests
    - [x] Implement [SwaggerUI](https://swagger.io/tools/swagger-ui/)
  - [ ] Add possibility so subscribe to events
    - [ ] Implement CRUD for subscriptions
      - eventId
      - userIds
    - [ ] cancel subscription
    - [ ] show subscriptions (users)
    - [ ] show subscriptions (events)

- front-end `web`
  - [ ] study `vue.js`
  - pages
    - [ ] landing
      - [ ] carousel
      - [ ] about
      - [ ] navbar
      - [ ] footer
    - [ ] login/signup
    - [ ] events
      - [ ] list all
        - [ ] cards
      - [ ] show one (modal)
    - [ ] dashboard
      - [ ] sidebar
      - [ ] table showing events
        - [ ] pagination
    - [ ] create event (modal)
    - [ ] update event (modal)

### later

> these are the stuff that I want to do but are not that important

- [ ] use cloudinary to store event's images
- [ ] Implement husky + lint-staged
- [ ] Improve this readme
  - [ ] Share my notes (on Notion) about the whole process of this project

## random notes
