# Hiring Frontend

Frontend Next.js programming exercise

### Overview

The goal of this exercise is to demonstrate an understanding of React and Next.js. It is NOT expected to complete all of these tasks.

### Tasks

- [ ] Create a page `/dogs` that displays every dog breed in a stylized `<Card />`
  - [ ] Style the `<Card />` to display the dog breed
  - [ ] Display the `<Card />` components in a grid (using flexbox or grid)
  - [ ] BONUS: display an image of that dog breed in the card
- [ ] Create a page `/dogs/[breed]` that displays an image of that dynamic dog breed
  - [ ] Display an image of the dog breed using `next/image`
  - [ ] Describe the differences between server-side fetching (`getStaticProps`, `getServerSideProps`) and client-side fetching
- [ ] Add a searchbar on the `/dogs` page that allows the user to search for a dog breed (case insensitive)

### Reference Mockups

These are some example mockups to represent a potential UI. These are to give a general direction for the app.

- `/dogs` - [mockup](https://storage.googleapis.com/agros-assets/hiring/All%20Dogs%20Page.png)
- `/dogs/[breed]` - [mockup](<https://console.cloud.google.com/storage/browser/_details/agros-assets/hiring/Individual%20Dog%20Page.png;tab=live_object?pageState=(%22StorageObjectListTable%22:(%22f%22:%22%255B%255D%22))&project=agrosapi-213321&supportedpurview=project>)
