<p align="center">
  <img src="public/img/vinyl-ducky-logo-signs-and-stickers-nederlands-eindhoven.png" width="300" title="vinyl ducky logo">
</p>

# project Vinylducky.NL
At our core we are thinkerers, and this is one of our projects. We love making demos and letting people have a look. If you found anything interesting just leave a message.

[Jira bord](https://vinylducky.atlassian.net/jira/software/projects/ECBGI/boards/3)


## Deploy

```bash
npm run generate 
firebase deploy
```

## Tech stack

| Tech              | Version   | Note  |
|---                |---        |---    |
| Nuxt              | 3.11      |       |
| Vue               | 3         |       |
| Bootstrap         | 5         |       |
| Bootstrap Icons   | 1.11      |       |
| SCSS              | (SASS 1.7) |      |
| MermaidJS         |           |       |
| NPM               |           |       |
| Firebase Hosting  | 9         |       | 
| Pinia             | 2.1.7     |       |

## Page Structure

```mermaid
graph TB
    home[homepage]
    scrum[Scrum Master]
    contact[Contact and about]
    vinylShop[ShopPage]
    service[ShopPageService]
    product[ShopPageProducts]
    search[search result]

    home --> scrum
    home --> vinylShop
    home --> contact

    vinylShop --> service
    vinylShop --> product
    vinylShop --> search

    service -.-> |has no user | x[create user]
    product -.-> |has no user | x[create user]

```

## Structure
// ------------- Init and Import
// ------------- Data
// ------------- Hooks / methods
// ------------- Logic
// ------------- SEO

## position
1 0 [  7 / 001 ]